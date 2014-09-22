/**
 * helloworld  rapid-httpserver 
 */

require("rapid-core");
require("rapid-httpserver");

rapid.plugin.use("rapid-httpserver",function(httpd){
    httpd.start({
        loading_dir:["/src"],
        defaultAction:"hello"
    });
});