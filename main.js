/**
 * Created by Hernan Y.Ke on 2016/7/27.
 */
var seneca = require('seneca')();
seneca.add({role:"account",cmd:"login"},function(args,respond){

})
seneca.add({role:"account",cmd:"register"},function(args,respond){

})
seneca.act({role:"account",cmd:"login",username:"ke",password:"ke"},function(args,respond){

})
seneca.act({role:"account",cmd:"register",username:"ke",password:"ke"},function(args,respond) {
})