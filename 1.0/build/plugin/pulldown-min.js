/*!build time : 2014-06-23 4:49:31 PM*/
KISSY.add(function(a,b){var c,d=a.all,e="Pull Down To Refresh",f="Loading...",g=b.extend({initializer:function(){var b=this,d=b.userConfig.xlist;b.userConfig=a.merge({content:e,downContent:"",upContent:"",loadingContent:f,prefix:"ks-xlist-plugin-pulldown-"},b.userConfig),c=b.userConfig.prefix,d&&d.on("afterRender",function(){b.render()})},render:function(){var a,b,e=this,f=c+"container",g='<div class="'+f+'"></div>',h=e.userConfig.xlist,i=e.userConfig.height||60,j=e.$pulldown=d(g).css({position:"absolute",width:"100%",height:i,top:-i}).prependTo(h.$ctn);e.on("afterStatusChange",function(a){j.removeClass(c+a.prevVal).addClass(c+a.newVal),e.setContent(e.userConfig[a.newVal+"Content"])}),j.addClass(c+e.get("status")),j.html(e.userConfig[e.get("status")+"Content"]||e.userConfig.content);var k=0;h.on("drag",function(){k=h.getOffsetTop(),k>0&&(Math.abs(k)<i?e.set("status","down"):e.set("status","up"))}),h.on("dragStart",function(){clearTimeout(b),clearTimeout(a),e.isBoundryBounce=!1,h.enableBoundryCheck()}),h.on("outOfBoundry",function(){e.isBoundryBounce=!0}),h.on("scrollEnd",function(){k=h.getOffsetTop(),k>i&&!e.isBoundryBounce&&(h.disableBoundryCheck(),h.scrollTo(-i,.4),h.isScrolling=!1,e.set("status","loading"),b=setTimeout(function(){h.enableBoundryCheck()},500),a=setTimeout(function(){location.reload()},700))})},setContent:function(a){var b=this;a&&b.$pulldown.html(a)}},{ATTRS:{status:{value:"down"}}});return g},{requires:["base","node"]});