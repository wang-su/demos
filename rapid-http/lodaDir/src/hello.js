/**
 * define action
 */

var httpd = rapid.use("rapid-httpserver");

httpd.defineAction("hello",function(){
    this.send("helloworld");
});