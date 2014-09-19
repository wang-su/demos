/**
 * New world
 */

var peopleConfig = rapid.use("config.people");
var god = rapid.use("plugin.god");

peopleConfig.forEach(function(conf){
    god.create(conf.name);
});