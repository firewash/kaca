//通过命令行进入mongo命令
mongo
//创建数据库
use tools_site_capture;

//创建用户
db.createUser({ 
  user: "admin",
  pwd: "admin",
  customData: { des: "only for test" },
  roles: [
    { role: "readWrite", db: "tools_site_capture" },
    "readWrite"
  ]
});


//建表
db.createCollection("origin_captures");
db.createCollection("tasks");

//插入一条测试数据
db.origin_captures.insert({
    //"_id" : ObjectId("58d4d90674bb09c7c87bf2e0"),
    "taskid" : ObjectId("573af109883c694045b9ea29"),
    "taskinfo" : {
        "_id" : ObjectId("573af109883c694045b9ea29"),
        "domain" : "www.uc123.com",
        "url" : "http://www.uc123.com",
        "startdate" : "2016-05-17",
        "starttime" : "12:30",
        "scheduled" : "perday",
        "name_prefix" : "www.uc123.com",
        "enabled" : true,
        "createtime" : ISODate("2016-11-14T10:24:09.447Z"),
        "updatetime" : ISODate("2016-11-14T10:24:09.447Z"),
        "update_email_notify_enabled" : "on",
        "email_list" : "le.wanglel1@alibaba-inc.com;le.wanglel1@alibaba-inc.com;",
        "email_notify_enabled" : true,
        "agent_width" : NaN,
        "agent_height" : NaN,
        "useragent" : "Mozilla/5.0 (Windows NT 10.0; WOW64) Chrome/49.0.2623.87 Safari/537.36 SiteCapture/1.0",
        "ignore" : "[[277,516,916,128]]"
    },
    "url" : "http://www.uc123.com",
    "quality" : 90,
    "filename" : "www.uc123.com_1490344191622",
    "base64" : null,
    "format" : "png",
    "timestamp_start_capture" : ISODate("2017-03-24T08:29:51.623Z"),
    "timestamp_capture_complete" : ISODate("2017-03-24T08:29:58.479Z"),
    "agent_width" : 600,
    "agent_height" : 1000,
    "useragent" : "Mozilla/5.0 (Windows NT 10.0; WOW64) Chrome/49.0.2623.87 Safari/537.36 SiteCapture/1.0",
    "description" : "Fri Mar 24 2017 16:29:51 GMT+0800 (中国标准时间)",
    "renderResult" : true
});

db.tasks.insert({
    //"_id" : ObjectId("573af109883c694045b9ea29"),
    "domain" : "www.uc123.com",
    "url" : "http://www.uc123.com",
    "startdate" : "2016-05-17",
    "starttime" : "12:30",
    "scheduled" : "perday",
    "name_prefix" : "www.uc123.com",
    "enabled" : true,
    "createtime" : ISODate("2017-03-24T09:43:55.305Z"),
    "updatetime" : ISODate("2017-03-24T09:43:55.305Z"),
    "update_email_notify_enabled" : "on",
    "email_list" : "le.wanglel1@alibaba-inc.com;le.wanglel1@alibaba-inc.com;",
    "email_notify_enabled" : true,
    "agent_width" : NaN,
    "agent_height" : NaN,
    "useragent" : "Mozilla/5.0 (Windows NT 10.0; WOW64) Chrome/49.0.2623.87 Safari/537.36 SiteCapture/1.0",
    "ignore" : "[]"
});
