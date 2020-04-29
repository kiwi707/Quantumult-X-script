/*
Banana video unlock vip
app download link : https://is.gd/3kW1id

QX:
# 香蕉视频VIP
^https?:\/\/.*\.(fuli|xiang(jiao|xiang))apps\.com\/(ucp\/index|index|getGlobalData|.+\/reqplay\/) url script-response-body xjsp.js

Surge & QX MITM = ios.fuliapps.com, apple.fuliapps.com, ios.xiangjiaoapps.com, apple.xiangjiaoapps.com, *.xiangxiangapps.com
*/

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/ucp/index") != -1){
  obj.data.uinfo.down_daily_remainders = "999";
  obj.data.uinfo.play_daily_remainders = "999";
  obj.data.uinfo.minivod_play_daily_remainders = "999";
  obj.data.uinfo["next_upgrade_need"] = "0";
  obj.data.user.isvip = "1";
  obj.data.user.gicon = "V5";
  obj.data.user.gid = "5";
}
if ($request.url.indexOf("/getGlobalData") != -1){
delete obj.data.adrows
delete obj.data.iOS_adgroups
delete obj.data.adgroups
}
if ($request.url.indexOf("/reqplay/") != -1){
  obj.retcode = "0";
  if(obj.data.hasOwnProperty("httpurl_preview")){
  var playurl = obj.data["httpurl_preview"];
  obj.data["httpurl"] = playurl;
  };
}
$done({body: JSON.stringify(obj)});
