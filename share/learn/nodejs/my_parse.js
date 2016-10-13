// fs 读取文本
var fs = require('fs');
fs.readFile('test.txt',function(err,logData){
	if(err) throw err;
	var text = logData.toString();
	console.log(text);
})

//fs 解析文本
var fs = require('fs');
fs.readFile('test.txt',function(err,logData){
	if(err) throw err;
	var text = logData.toString();
	var results = {};
	var lines = text.split('\n');
	lines.forEach(function(line){
		var parts = line.split(' ');
		var letter = parts[1];
		var count = parseInt(parts[2]);
    
    if(!results[letter]){
    	results[letter] = 0;
    }
    results[letter] += parseInt(count);

	})
	console.log(results);
})

//读取文件 
fs.readFile('note.md', function (err, data) {
  if (err) {
  	console.err(err);
  }
　　console.log('读取文本内容:',data.toString());
});
