var obj = JSON.parse($response.body);
obj = {
  "errcode": 0,
  "timestamp": 1595413767,
  "data": "D3570508AE58776F2DBCC11BA7A7E046EF6CD7DC4DA3380E7864A27D8F9C55E2A410BB5B343538EC087319B598A1125F797290AF2AA8D0DB2F49432BF4639CD991B67F53A8004DBC85F078D2A10E24ED001B91F934E81F356E71BE7B06AAA883724FEF4DBFCE99221052137AA737F055F74F31F2D7890EE73402217A51CD7BC7062B74FAFBCC18170035453FF0191DC90CAF0069A0F46B71BA9D3099B899729C5516B1F88042626BDBBE5A5E4701CB2F015B11EF42DEFF8A1CF9A502D0C11D00EA58807B685CEA36BD526BA0663B1733608F19F7F0F3DE6AF990A5C0EB446C909F772115CD633608905BF0E229D2D3E07E41B3AC94947E22B90C9B58A85EF922BE91FC3275F2AC3FFD48099F66BD62E8EF8E02841920630D138223511DC6CD2C219EB80CA5693D784314204DD6EF9B35DC4D4C1C6934E7EEE777C493516000D4D30F792646235C78EB5CBCB857239136F618DA01D5F351EC2E57DD7ECB247B1A0C86DEF9D6BD0FF2F541FC45778A88BD4BF7C7F1BC59C4C543B2EE50ACB42CFAB4B5685C78FCC3F09FCB571AB57E7912E2E35EF5595526DFED49CDAE09A0A03F96D776E8051BBB2ADA49F90D84C79BBFA4E1F1D185B07AE775455A47E1FF2E2A98A975C19E696C7EEDC9DACECDDA686F9BB515395BE618A3A7451A828140D22DA395",
  "sign": "8057e8e25dac728dd7b055e11b6e8f6b"
}
$done({body: JSON.stringify(obj)});
