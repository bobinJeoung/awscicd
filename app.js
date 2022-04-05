const express =require('express'); 
const app = express(); 
const port = 3000; 
const os = require("os"); 
const hostname = os.hostname(); 
app.get('/', function (req,res){ 
res.send('호스트정보 : '+ hostname); 
}); 
app.listen(port, function (){ 
console.log('서버가 시작되었습니다. 포트:%s',port); 
});
