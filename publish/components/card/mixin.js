"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={props:{color:[String],mode:{type:String,default:function(){return this.$config.get("mode")||"ios"}}},computed:{modeClass:function(){return this.componentName+" "+this.componentName+"-"+this.mode},colorClass:function(){return this.color?this.componentName+"-"+this.mode+"-"+this.color:""}}};