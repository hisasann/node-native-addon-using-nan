// buindings 経由で取りにいく場合
var hello = require('bindings')('hello');

// パスで取りに行く場合
// var hello = require('../build/Release/hello.node');

console.log(hello.hello()); // 'world'