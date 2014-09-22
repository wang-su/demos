/**
 * New node file
 */
var ejs = require("ejs");
var fs = require("fs");

console.log(Object.keys(ejs));
var content = fs.readFileSync("./views/NewFile.html",{encode:"utf-8"});

debugger;
console.log(typeof(content));

var rs = ejs.render(content.toString(), {user:{
    name:"wangsu"
}});

console.log(rs);

//debugger;
//ejs.renderFile("./views/NewFile.html",{
//    user:{
//        name:"wangsu"
//    }
//},function(err,data){
//    console.log(err,data);
//});

