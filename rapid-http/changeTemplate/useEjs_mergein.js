/**
 * helloworld  rapid-httpserver 
 */

require("rapid-core");
require("rapid-httpserver");

rapid.plugin.use("rapid-httpserver",function(httpd){
    
    httpd.start({
        tplConfig:{
            engine:"/ejs_adap.js",
            view_dir:"/views"
        },
        defaultAction:function(){
            
            var content = this.render("hello",{user:{
                name:"rapid"
            }});
            
            this.send(content);
        }
    });
});