/**
 * echo the param say for parse the query URL;
 */



var app = rapid.use("rapid-express");

app.get("/say",function(req,res){
    var content = req.query.say || "what do you want??";
    res.end(content);
});