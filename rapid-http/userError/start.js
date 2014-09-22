/**
 * helloworld  rapid-httpserver 
 */

require("rapid-core");
require("rapid-httpserver");

rapid.plugin.use("rapid-httpserver",function(httpd){
    
    httpd.start({
        tplConfig:{
            engine:"/ejs_adap.js",
            view_dir:"/views/"
        },
        errorAction:function(){
            debugger;
            var params = this.params;
            
            var statusCode = params.httpStatus || 500,
                msg = params.errorMsg || "Server Error : " + (params.errorCode || "Unknown"),
                content = params.errorStack || "Unknow";
            
            var content = this.render("err",{err:{
                message:msg,
                stack:content
            }});
            
            this.send(content,statusCode);
        },
        defaultAction:function(){
            throw new Error("this is an error");
        }
    });
});