/**
 * @file Define the plugin [rapid-express], simple to use the express.
 * @author wangsu01@baidu.com
 */
var express = require("express");

rapid.plugin.define("rapid-express",['rapid-log'],function(log,cb){
    
    log.info("starting rapid-express , wating config...");
    
    var app = express();
    
    rapid.watch("config.rapid-express",function(conf){
        var opts, src_dir;
        
        log.info("find out the config for [rapid-express]");
        
        /*
         * the settings for express standard.
         */
        if(opts = conf.opts){
            for(var key in opts){
                app.set(key,opts[keys]);
            }
        }
        
        /*
         * auto loading all "*.js" from these directory
         */
        if(Array.isArray(src_dir = conf.loading_dir)){
            src_dir.forEach(rapid.requireDir.bind(rapid));
        }
        
        if(conf.autoStart){
            setImmediate(function(app,port,hostname,backlog){
                app.listen(port,hostname,backlog,function(){
                    log.info("[rapid-express] auto start. listen on port:%s [hostname:%s] ",port,hostname || "any");
                });
            },app,conf.port || 8080, conf.hostname, conf.backlog);
        }
        
        cb(null,app);
    });
    
});