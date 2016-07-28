/**
 * Created by Hernan Y.Ke on 2016/7/27.
 */
var seneca = require('seneca')();
function account(options){
    this.add({init:"account"},function(pluginInfo,respond){
        console.log(options.message);
        respond();
    })

    seneca.add({role:"account",cmd:"login"},function(args,respond){

    })
    seneca.add({role:"account",cmd:"register"},function(args,respond){

    })
}
seneca.use(account,{message:"added"})

seneca.act({role:"account",cmd:"login",username:"ke",password:"ke"},function(args,respond){

})
seneca.act({role:"account",cmd:"register",username:"ke",password:"ke"},function(args,respond) {
})