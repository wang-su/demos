/**
 * helloworld  rapid-httpserver 
 */

require("rapid-core");
require("rapid-httpserver");
var ejs = require("ejs");

rapid.plugin.use("rapid-httpserver",function(httpd){
    httpd.start({
        defaultAction:function(){
            this.send(ejs.render("hello, <%= user.name %>",{user:{
                name:"rapid."
            }}));
        }
    });
});