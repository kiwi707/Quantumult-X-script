/*
智能证件照 unlock vip

Quantumult X:
^http:\/\/certificate\.yiyongcad\.com\/api\/v4\/virtualactregister url script-response-body https://raw.githubusercontent.com/kiwi707/Quantumult-X-script/master/znzj.js
下载链接：https://apps.apple.com/cn/app/%E6%99%BA%E8%83%BD%E8%AF%81%E4%BB%B6%E7%85%A7%E7%9B%B8%E6%9C%BA-%E6%9C%80%E7%BE%8E%E8%AF%81%E4%BB%B6%E7%85%A7%E6%8B%8D%E7%85%A7%E8%BD%AF%E4%BB%B6/id1474736468
Tg频道：https://t.me/jmkji
MITM = certificate.yiyongcad.com
*/
var obj = JSON.parse($response.body);
 obj={
 "code": 10000,
 "message": "register success",
 "userinfo": {
  "usertoken": "XoNrZLGHdl7WZ0oHXRy89LKXzwwz12IqHJORBnGzXNdSVfhKgMoX4kbszcoRwvE_iM5PozsjJfGXIZ8r4oyrxn22IePYhzXFZACB",
  "nickname": "",
  "head_portrait": "",
  "username": "hd_f1e3390b536edca40bd4d9741d8ab990",
  "nowtime": 1587910333,
  "lastloginip": "47.103.92.104",
  "lastlogintime": 1587894998,
  "createtime": 1583051036,
  "bindmobile": "",
  "bindemail": "",
  "ispwd": 0,
  "uid": 149117870,
  "accounttype": 5,
  "vip": [
   {
    "id": 11038332,
    "auth_type": 1,
    "auth_value": 3742774399
   }
  ],
  "vip_valid": 1,
  "vip_deadline": 3742774399
 }
};
$done({body: JSON.stringify(obj)});
//



