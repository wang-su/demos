/**
 * New node file
 */
var engine = require('ejs');
var path = require('path');
var fs = require("fs");
var views_dir = "/app/views/";
var suffix = '.html';

console.log("i'm in....");

module.exports = {
    
    conf : function(opts){
        if(opts && opts.view_dir){ views_dir = opts.view_dir; }
    },

    render : function (viewname, data, opts){
        var cb;
        opts = opts || {};
        var fullPath =  path.join(ROOT_DIR, views_dir, viewname + suffix);
        
        if(cb = opts.callback){
            return engine.renderFile(fullPath, opts, cb);
        }else{
            return engine.render(fs.readFileSync(fullPath,{encode:"utf-8"}).toString(), data, opts);
        }
        
    },

    renderStr : function(tplstr, data, opts){
        
        var tpl = engine.compile(tplstr, opts);

        return tpl(data);

    }

}