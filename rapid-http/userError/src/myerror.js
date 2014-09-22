/**
 * define action  myerror
 */
var httpd = rapid.use("rapid-httpserver");

httpd.defineAction("myerror",function(){
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
});