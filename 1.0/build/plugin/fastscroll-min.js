/*!build time : 2014-07-11 3:20:50 PM*/
KISSY.add("gallery/xlist/1.0/plugin/fastscroll",function(a,b){var c=(a.all,1),d=500,e=4,f=15,g=b.extend({initializer:function(){var a=this,b=a.userConfig.xlist;a.dragRecords=[],a.times=0,b.on("dragEnd",function(d){Math.abs(d.velocityY)>c?(a.dragRecords.push({velocityY:d.velocityY,timeStamp:d.timeStamp}),a.times++):a.reset(),a.times>=e&&b.dragEndHandler({velocityY:Math.abs(d.velocityY)/d.velocityY*f},!0),a.set("direction",b.direction)}),b.on("scrollEnd",function(){b.isScrolling||a.reset()}),b.on("dragStart",function(c){if(b.isScrolling){if(a.dragRecords.length){var e=a.dragRecords.pop().timeStamp;c.timeStamp-e>d&&a.reset()}}else a.dragRecords=[]}),a.on("afterDirectionChange",function(){a.reset()})},reset:function(){var a=this;a.dragRecords=[],a.times=0},judger:function(){var a=this;a.dragRecords.length}},{ATTRS:{}});return g},{requires:["base","node"]});