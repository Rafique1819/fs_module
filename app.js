const fs = require("fs");
fs.readFile("english.js","utf-8",(error,data)=>{
    if(error) throw error
    console.log(data);
    
})
    

