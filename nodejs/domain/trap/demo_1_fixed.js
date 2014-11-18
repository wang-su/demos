var domain = require("domain");
var d1 = domain.create();
var whatDomain = domain.create();

var e1;

whatDomain.run(function(){
    e1 = require("./what.js");
});

var whatErrorHandle = function(err){
    console.log("whatDomain, ",err.stack);
};

whatDomain.on("error",whatErrorHandle);

d1.on("error",function(err){
    console.log("domain, ",err.stack);
});

var start = function(){
    e1.on("data",function(data){
        console.log(data);
    });
    e1.emit("data","222");
};

d1.run(start);