var domain = require("domain");
var d1 = domain.create();

try{
    var e1 = require("./what.js");
    
    d1.on("error",function(err){
        console.log("domain, ",err.stack);
    });
    
    d1.run(function(){
        e1.on("data",function(data){
            console.log(data);
        });
        e1.emit("data","data!data!");
    });
}catch(e){
    console.log("catch, ", e.stack);
}