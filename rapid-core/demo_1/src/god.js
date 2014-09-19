/**
 * god & human
 */

var _extend = require("util")._extend;
var EventEmitter = require("events").EventEmitter;

var faves = ["吃饭","打麻将","逛公园","写代码","借钱"];

var whatYouSay = /^(.*):(.*)$/;

var Human = function(name){
    var me = this;
    this.name = name;
    
    var listen = function(content){
        if(me.died){
            debugger;
            log.err("%s, not exists!!", me.name);
            rapid.resource.unwatch("voice",listen);
        }else{
            me.listen(content);
        }
    };
    
    rapid.resource.watch("voice",listen);
    
    this.timer = setInterval(function(){
        var rand = ~~(Math.random() * 10);
        var say = "";
        
        if(!rand){
            debugger;
            say = "借钱";
        }else{
            say = faves[~~(Math.random() * faves.length)]
        }
        
        me.talk(say);
        
    }, (~~(Math.random() * 3) + 2) * 1000);
    
    this.talk("哈哈!");
    
};

Human.prototype = _extend(new EventEmitter(),{
    listen:function(content){
        //debugger;
        var me = this;
        
        var what = whatYouSay.exec(content);
        
        if(!what || what[1] == this.name){
            return;
        }
        switch(what[2]){
            case "哈哈!":
                me.talk("你是谁");
            case "你是谁":
                me.talk("我是" + this.name);
                break;
            case "吃饭" :
                me.talk("带上我");
                break;
            case "逛公园" :
                me.talk("看猴子嘛?");
                break;
            case "打麻将" :
                me.talk("不会");
                break;
            case "借钱":
                me.talk("要钱没有,要命一条");
                break;
//            default:
//                log.dev("i don't understand!!, ignore....");
        }
    },
    talk:function(content){
        var say = this.name + ":" + content;
        log.info(say);
        rapid.resource.define("voice",say);
    },
    die:function(){
        this.talk("i saw a light! so beautiful!! ");
        this.died = true;
        clearInterval(this.timer);
    }
});

var peoples = {}

rapid.plugin.define("god",['rapid-log'],function(log,cb){
    
    log.info("i am god....");
    
    rapid.resource.watch("voice",function(content){
        
        var what = whatYouSay.exec(content);
        
        if(what){
            if(what[2] == "借钱"){
                log.warn("刚才谁借钱??? %s?? 上帝想了2秒,然后.....",what[1]);
                setTimeout(function(){
                    var p = peoples[what[1]];
                    p.die();
                    delete peoples[what[1]];
                    if(Object.keys(peoples).length == 0){
                        log.info("the world is cleaned!! ");
                        process.exit();
                    }
                },2000);
            }
        }
    });
    
    cb(null,{
        create:function(name,type){
            type = type || "human";
            switch(type){
                case "house":
                    log.dev("GOD : look !! this is a human, named %s...HA.HA.HA.HA...", name);
                    console.log("i don't");
                    return false;
                case "human":
                    log.dev("look !! this is a human, named %s....", name);
                    return peoples[name] = peoples[name] || new Human(name);
            }
        }
    });
});