/**
 * define action  my default action
 */
var httpd = rapid.use("rapid-httpserver");

httpd.defineAction("myDefAct",function(){
    throw new Error("this is error");
});