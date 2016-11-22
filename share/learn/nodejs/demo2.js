var http = require('http');
var url = 'http://f2er.club/';

/* 找出页面的所有的a标签 并写成md文件*/

var fs = require('fs');
// cheerio
var cheerio = require('cheerio');

function findAllaNodes(html){
	var $ = cheerio.load(html);
	var aNodes = $('a');
	console.log("所有的a标签:"+aNodes.length);
	var result = [];
	aNodes.each(function(item){
		var one = $(this);
		// console.log(typeof item);
		var aText = one.text();
		var aHref = one.attr("href");

		// var item = {
		// 	"标题": aText,
		// 	"链接": aHref
		// };
		var item= {
			"title":aText,
			"link": aHref
		};
		result.push(item);
	});
	return result;
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
		//console.log(html);
		//找到所有的链接 并输出
		var result = findAllaNodes(html);
		// console.log(result);
		// fs.writeFile('最牛前端a标签'+new Date().getTime()+ '.txt', JSON.stringify(result), {}, function(a) {
		// 	console.log("写入done");
		// });
		//格式化文本输出
		//写成md文档试试
		handlerToMdFile(result);

		// handleFormat(result);
	});
}).on('error',function(err){
	console.log("读取网页发生错误",err);
})

function handlerToMdFile(result){
	console.log("invoke me");
	var str = JSON.stringify(result);
	var jsonArray = JSON.parse(str);
	var sb='### 最牛前端a标签\n';
	console.log(jsonArray.length);
	// jsonArray.forEach(function(item){
	// 	if(item.title==''||item.title.trim().length==0) item.title='本页面地址';
	// 	var one = `* [${item.title}](${item.link}) \n`;
	// 	sb+= one;
	// });
	var len = jsonArray.length;
	for (var i = jsonArray.length - 1; i >= 0; i--) {
		var item =jsonArray[i];
		if(item.title==''|| item.title.trim().length==0 ||/javascript/.test(item.link) || !/http/.test(item.link)){
			continue;
		}else{
			var one = `* [${item.title}](${item.link}) \n`;
		  sb+= one;
		}
	};
	fs.writeFile('最牛A集合.md',sb,{},function(a){
		console.log("done",a);
	});
}