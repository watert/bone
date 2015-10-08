let Bone = require("exoskeleton")
let NativeView = require("./backbone.nativeview.js")
Bone.ajax = require("./backbone.nativeajax.js")
// console.log(Backbone)
let _ = Bone.utils
_.template = require("micro-template").template
_.extend(Bone, {NativeView,_})

window.Bone = module.exports = Bone
