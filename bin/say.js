#!/usr/bin/env node
var isaacs = require("isaacs")

isaacs(function (izs) {
  var s = isaacs.speak().join(" ")
  console.log(s)
  izs.end()
})
