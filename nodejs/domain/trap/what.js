var EventEmitter = require('events').EventEmitter;
var e1 = new EventEmitter();

e1.on("originData",function(v){
    if( v == "complete")
        throw new Error("invalid data : " + v );
    
    if(v == "error"){
        this.emit("error",new Error("inner error"));
        return;
    }
    
    this.emit("data",v);
});

setTimeout(function(){
    e1.emit("originData","complete");
},1000);

setTimeout(function(){
    e1.emit("originData","error");
},2000);

module.exports = e1;