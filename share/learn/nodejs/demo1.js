var http = require('http');
var url = 'http://www.imooc.com/learn/348';
var url1 = 'http://www.baidu.com'; 


var fs = require('fs');
// cheerio
var cheerio = require('cheerio');


//读取网页源码

// 1.获取baidu的源码
// http.get(url1,function(res){
// 	console.log(res);
// 	var html = '';
// 	//注册data 事件
// 	res.on('data',function(data){
// 		html += data;
// 	});
//   //注册end 事件
// 	res.on('end', function(){
// 		console.log(html);
// 	});
// })




// imooc 爬虫 
// tips cheerio 类似于jsoup /jquery一样的dom 操作库 先安装下 当前目录 npm install cheerio

function filterChapters(html){
	var $ = cheerio.load(html);
	var chapters = $('.mod-chapters .chapter');
	// console.log(chapters);
	//
	console.log("章节的长度:"+chapters.length);
	var result = [];
	chapters.each(function(item){
		var one = $(this);
		// console.log(typeof item);
		var chapterTitle = one.find("strong").text();
		var videos = one.find(".video").children('li');
		var chapterData = {
			chapterTitle: chapterTitle,
			videos:[]
		};

		//videos
		videos.each(function(item){
			var video = $(this).find('.J-media-item').text();
			var id= $(this).attr('data-media-id');
			chapterData.videos.push({
				title:video,
				id:id
			})
		});

		result.push(chapterData);
	})
	return result;
}


//
function handleFormat(aa){
	var ss = '';
	aa.forEach(function(item){
		ss += "章节标题:"+item.chapterTitle+"";
		console.log("章节标题:"+item.chapterTitle+"");
		item.videos.forEach(function(one){
			console.log("  内容:"+one.title+"id:["+one.id+"]");
			ss += "  内容:"+one.title+"id:["+one.id+"]";
		});
	});
	return ss;
}




http.get(url,function(res){
	// console.log(res);
	var html = '';
	//注册data 事件
	res.on('data',function(data){
		html += data;
	});
  //注册end 事件
	res.on('end', function(){
		// console.log(html);
		//可以写入一个文件中 
		//
		// fs.writeFile(new Date().getTime() + '.txt', html, {}, function(a) {
		// 	console.log("done");
		// });

		// 解析html
		var result = filterChapters(html);
		console.log(Array.isArray(result));
		fs.writeFile(new Date().getTime() + '标题.txt', handleFormat(result), {}, function(a) {
			// console.log("done");
		});
		//格式化文本输出
		handleFormat(result);

	});
}).on('error',function(err){
	console.log("读取网页发生错误",err);
})
