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



