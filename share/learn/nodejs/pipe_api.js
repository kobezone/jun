var madoka = require("madoka");
var Mock = require('mockjs');
var Server = require("ohana");

// 使用 madoka.generate 为默认的解析器，解析数据模板
var server = new Server({
  parser: madoka.generate
});


// 获取文章列表
// server.get('/article/', {
//   delay: 200,
//   data: function (params, query) {
//     console.log(params);
//     console.log(query);

//     return [
//       '{{ repeat(10) }}',
//       {
//         'id': '{{ index() }}',
//         'title': '{{ lorem(1, "sentences") }}',
//         'author': '{{ firstName() }} {{ lastName() }}',
//         'brief': '{{ lorem(1, "paragraphs") }}',
//         'post_time': '{{ date(new Date(2014, 0, 1), "YYYY-MM-dd HH:mm:ss") }}',
//         'read_count': '{{ integer(100, 10000) }}'
//       }

//     ];

//   }
// });

server.get('/test',{
	data:function(){
		return {msg:'node mock is running ok'}
	}
});

server.get('/article/:id', {
  parser: Mock.mock,
  data: function (params, query) {
    return {
      "status": "ok",
      "data": {
        "id": params.id,
        "title": "@TITLE(5, 7)",
        "author": "@NAME",
        "post_time": "@DATETIME('yyyy-MM-dd HH:mm:ss')",
        "content": "@PARAGRAPH(2)",
        "poster": "@IMAGE('700x350', '#ccc', '#000', 'hello world')",
        "read_count|0-1000": 100
      }
    }
  }
});

server.get('/bus/v1/line/list.json', {
  // parser: Mock.mock,
  data: function (params, query) {
    return {
      "resultCode": "0000",
      "resultMsg":"",
      "object": [
       '{{ repeat(10) }}',
	      {
		      "scheduleId": "123",
		      "scheduleName": "测试线路",
		      "fromCityId": "1111",
		      "fromCityName": "深圳",
		      "fromStationId": "22222",
		      "fromStationName": "宝安汽车站",
		      "startCityId": "11112222",
		      "startCityName": "深圳",
		      "startStationId": "112233",
		      "startStationName": "宝安汽车站",
		      "toCityId": "122222",
		      "toCityName": "广州",
		      "toStationId": "22222",
		      "toStationName": "广州汽车站",
		      "endCityId": "22333",
		      "endCityName": "广州",
		      "endStationId": "22222",
		      "endStationName": "广州",
		      "startDate": "2016-11-12",
		      "startTime": "09:15",
		      "distance": "50KM",
		      "scheduleType": "高级大巴",
		      "seatType": "硬座",
		      "status": "1",
		      "totalSeats": 50,
		      "leaveSeats": 20,
		      "price": 30000,
		      "endTime": "21:15",
		      "runTime": "50000",
		      "discountType": "0",
		      "discountCount": "0",
		      "labelInfoList": [],
		      "scheduleCount": 5,
		      "stopoverStationList": [
		        {
		          "stationId": "123",
		          "stationName": "汽车站",
		          "nameAlias": "汽车站",
		          "type": "0",
		          "sortNum": 1,
		          "longitude": "11.1234",
		          "latitude": "11.1234"
		        }
		      ],
		      "isStartStation": "0",
		      "isRealName": "1"
		    },
		    {
		      "scheduleId": "123",
		      "scheduleName": "测试线路",
		      "fromCityId": "1111",
		      "fromCityName": "深圳",
		      "fromStationId": "22222",
		      "fromStationName": "宝安汽车站",
		      "startCityId": "11112222",
		      "startCityName": "深圳",
		      "startStationId": "112233",
		      "startStationName": "宝安汽车站",
		      "toCityId": "122222",
		      "toCityName": "广州",
		      "toStationId": "22222",
		      "toStationName": "广州汽车站",
		      "endCityId": "22333",
		      "endCityName": "广州",
		      "endStationId": "22222",
		      "endStationName": "广州",
		      "startDate": "2016-11-12",
		      "startTime": "09:15",
		      "distance": "50KM",
		      "scheduleType": "高级大巴",
		      "seatType": "硬座",
		      "status": "1",
		      "totalSeats": 50,
		      "leaveSeats": 20,
		      "price": 30000,
		      "endTime": "21:15",
		      "runTime": "50000",
		      "discountType": "0",
		      "discountCount": "0",
		      "labelInfoList": [],
		      "scheduleCount": 5,
		      "stopoverStationList": [
		        {
		          "stationId": "123",
		          "stationName": "汽车站",
		          "nameAlias": "汽车站",
		          "type": "0",
		          "sortNum": 1,
		          "longitude": "11.1234",
		          "latitude": "11.1234"
		        }
		      ],
		      "isStartStation": "0",
		      "isRealName": "1"
		    }
	    ]
    }
  }
});









































server.start(3000);