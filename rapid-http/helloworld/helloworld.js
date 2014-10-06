/**
 * helloworld  rapid-httpserver 
 */

require("rapid-core");
require("rapid-httpserver");

var randomStr = function(_len){
    var rv,str = [] , len = _len || 10;
    for(; str.length < len ; str.push((~~(Math.random() * 36)).toString(36)));
    rv = str.join("");
    str.length = 0;
    return rv; 
};


var nodeName = randomStr();

rapid.plugin.use("rapid-httpserver",function(httpd){
    httpd.start({
        defaultAction:function(){
            this.send("hello rapid! + \n\n" + JSON.stringify({
                NODE:nodeName,
                ROOT:ROOT_DIR,
                USER:USER_DIR,
                CONF:CONF_DIR
            }));
        }
    });
});