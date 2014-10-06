/**
 * the action to echo the message "hello rapid-express"
 */

var app = rapid.use("rapid-express");

app.get("/*",function(req,res){
    res.end("hello rapid-express.");
}); 