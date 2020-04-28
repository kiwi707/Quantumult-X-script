/*
Quantumult X:
#拍照取字unlock Vip
^http:\/\/pay\.maoqilai\.com\/get_user_info url script-response-body pzqz.js
app下载链接（国区）：https://apps.apple.com/cn/app/%E6%8B%8D%E7%85%A7%E5%8F%96%E5%AD%97-%E5%B0%B1%E6%98%AF%E5%A5%BD%E7%94%A8/id1249414505
MITM=pay.maoqilai.com
*/
var obj = JSON.parse($response.body);
 obj={
  "paid_service_list" : [
    {
      "service_id" : 7,
      "start_time" : 1588058243,
      "end_time" : 3742787843,
      "service_name" : "连续包月月度VIP会员"
    }
  ],
};
$done({body: JSON.stringify(obj)});
//
