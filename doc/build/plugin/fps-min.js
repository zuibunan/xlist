/*!build time : 2014-08-23 11:37:18 AM*/
!function(a,b){function c(a,b){for(var c in b)try{a.style[c]=b[c]}catch(d){}return a}function d(a){return null==a?String(a):"object"==typeof a||"function"==typeof a?Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof a}function e(a,b){if("array"!==d(b))return-1;if(b.indexOf)return b.indexOf(a);for(var c=0,e=b.length;e>c;c++)if(b[c]===a)return c;return-1}function f(){var a,b=arguments;for(a in b[1])if(b[1].hasOwnProperty(a))switch(d(b[1][a])){case"object":b[0][a]=f({},b[0][a],b[1][a]);break;case"array":b[0][a]=b[1][a].slice(0);break;default:b[0][a]=b[1][a]}return 2<b.length?f.apply(null,[b[0]].concat(Array.prototype.slice.call(b,2))):b[0]}function g(a){return a=Math.round(255*a).toString(16),1===a.length?"0"+a:a}function h(a,b,c,d){a.addEventListener?a[d?"removeEventListener":"addEventListener"](b,c,!1):a.attachEvent&&a[d?"detachEvent":"attachEvent"]("on"+b,c)}function i(a,k){function n(a,b,c,d){return y[0|a][Math.round(Math.min((b-c)/(d-c)*K,K))]}function o(){I.legend.fps!==S&&(I.legend.fps=S,I.legend[q]=S?"FPS":"ms"),D=S?G.fps:G.duration,I.count[q]=D>999?"999+":D.toFixed(D>99?0:H.decimals)}function p(){for(z=j(),P<z-H.threshold&&(G.fps-=G.fps/Math.max(1,60*H.smoothing/H.interval),G.duration=1e3/G.fps),E=H.history;E--;)Q[E]=0===E?G.fps:Q[E-1],R[E]=0===E?G.duration:R[E-1];if(o(),H.heat){if(L.length)for(E=L.length;E--;)L[E].el.style[x[L[E].name].heatOn]=S?n(x[L[E].name].heatmap,G.fps,0,H.maxFps):n(x[L[E].name].heatmap,G.duration,H.threshold,0);if(I.graph&&x.column.heatOn)for(E=J.length;E--;)J[E].style[x.column.heatOn]=S?n(x.column.heatmap,Q[E],0,H.maxFps):n(x.column.heatmap,R[E],H.threshold,0)}if(I.graph)for(F=0;F<H.history;F++)J[F].style.height=(S?Q[F]?Math.round(C/H.maxFps*Math.min(Q[F],H.maxFps)):0:R[F]?Math.round(C/H.threshold*Math.min(R[F],H.threshold)):0)+"px"}function t(){20>H.interval?(A=m(t),p()):(A=setTimeout(t,H.interval),B=m(p))}function u(a){a=a||window.event,a.preventDefault?(a.preventDefault(),a.stopPropagation()):(a.returnValue=!1,a.cancelBubble=!0),G.toggle()}function v(){H.toggleOn&&h(I.container,H.toggleOn,u,1),a.removeChild(I.container)}function w(){if(I.container&&v(),x=i.theme[H.theme],y=x.compiledHeatmaps||[],!y.length&&x.heatmaps.length){for(F=0;F<x.heatmaps.length;F++)for(y[F]=[],E=0;K>=E;E++){var b,d=y[F],e=E;b=.33/K*E;var f=x.heatmaps[F].saturation,j=x.heatmaps[F].lightness,k=void 0,l=void 0,m=void 0,n=m=void 0,p=k=l=void 0,p=void 0,m=.5>=j?j*(1+f):j+f-j*f;0===m?b="#000":(n=2*j-m,l=(m-n)/m,b*=6,k=Math.floor(b),p=b-k,p*=m*l,0===k||6===k?(k=m,l=n+p,m=n):1===k?(k=m-p,l=m,m=n):2===k?(k=n,l=m,m=n+p):3===k?(k=n,l=m-p):4===k?(k=n+p,l=n):(k=m,l=n,m-=p),b="#"+g(k)+g(l)+g(m)),d[e]=b}x.compiledHeatmaps=y}I.container=c(document.createElement("div"),x.container),I.count=I.container.appendChild(c(document.createElement("div"),x.count)),I.legend=I.container.appendChild(c(document.createElement("div"),x.legend)),I.graph=H.graph?I.container.appendChild(c(document.createElement("div"),x.graph)):0,L.length=0;for(var q in I)I[q]&&x[q].heatOn&&L.push({name:q,el:I[q]});if(J.length=0,I.graph)for(I.graph.style.width=H.history*x.column.width+(H.history-1)*x.column.spacing+"px",E=0;E<H.history;E++)J[E]=I.graph.appendChild(c(document.createElement("div"),x.column)),J[E].style.position="absolute",J[E].style.bottom=0,J[E].style.right=E*x.column.width+E*x.column.spacing+"px",J[E].style.width=x.column.width+"px",J[E].style.height="0px";c(I.container,H),o(),a.appendChild(I.container),I.graph&&(C=I.graph.clientHeight),H.toggleOn&&("click"===H.toggleOn&&(I.container.style.cursor="pointer"),h(I.container,H.toggleOn,u))}"object"===d(a)&&a.nodeType===b&&(k=a,a=document.body),a||(a=document.body);var x,y,z,A,B,C,D,E,F,G=this,H=f({},i.defaults,k||{}),I={},J=[],K=100,L=[],M=0,N=H.threshold,O=0,P=j()-N,Q=[],R=[],S="fps"===H.show;G.options=H,G.fps=0,G.duration=0,G.isPaused=0,G.tickStart=function(){O=j()},G.tick=function(){z=j(),M=z-P,N+=(M-N)/H.smoothing,G.fps=1e3/N,G.duration=P>O?N:z-O,P=z},G.pause=function(){return A&&(G.isPaused=1,clearTimeout(A),l(A),l(B),A=B=0),G},G.resume=function(){return A||(G.isPaused=0,t()),G},G.set=function(a,b){return H[a]=b,S="fps"===H.show,-1!==e(a,r)&&w(),-1!==e(a,s)&&c(I.container,H),G},G.showDuration=function(){return G.set("show","ms"),G},G.showFps=function(){return G.set("show","fps"),G},G.toggle=function(){return G.set("show",S?"ms":"fps"),G},G.hide=function(){return G.pause(),I.container.style.display="none",G},G.show=function(){return G.resume(),I.container.style.display="block",G},G.destroy=function(){G.pause(),v(),G.tick=G.tickStart=function(){}},w(),t()}var j,k=a.performance;j=k&&(k.now||k.webkitNow)?k[k.now?"now":"webkitNow"].bind(k):function(){return+new Date};for(var l=a.cancelAnimationFrame||a.cancelRequestAnimationFrame,m=a.requestAnimationFrame,k=["moz","webkit","o"],n=0,o=0,p=k.length;p>o&&!l;++o)m=(l=a[k[o]+"CancelAnimationFrame"]||a[k[o]+"CancelRequestAnimationFrame"])&&a[k[o]+"RequestAnimationFrame"];l||(m=function(b){var c=j(),d=Math.max(0,16-(c-n));return n=c+d,a.setTimeout(function(){b(c+d)},d)},l=function(a){clearTimeout(a)});var q="string"===d(document.createElement("div").textContent)?"textContent":"innerText";i.extend=f,window.FPSMeter=i,i.defaults={interval:100,smoothing:10,show:"fps",toggleOn:"click",decimals:1,maxFps:60,threshold:100,position:"absolute",zIndex:10,left:"5px",top:"5px",right:"auto",bottom:"auto",margin:"0 0 0 0",theme:"dark",heat:0,graph:0,history:20};var r=["toggleOn","theme","heat","graph","history"],s="position zIndex left top right bottom margin".split(" ")}(window),function(a,b){b.theme={};var c=b.theme.base={heatmaps:[],container:{heatOn:null,heatmap:null,padding:"5px",minWidth:"95px",height:"30px",lineHeight:"30px",textAlign:"right",textShadow:"none"},count:{heatOn:null,heatmap:null,position:"absolute",top:0,right:0,padding:"5px 10px",height:"30px",fontSize:"24px",fontFamily:"Consolas, Andale Mono, monospace",zIndex:2},legend:{heatOn:null,heatmap:null,position:"absolute",top:0,left:0,padding:"5px 10px",height:"30px",fontSize:"12px",lineHeight:"32px",fontFamily:"sans-serif",textAlign:"left",zIndex:2},graph:{heatOn:null,heatmap:null,position:"relative",boxSizing:"padding-box",MozBoxSizing:"padding-box",height:"100%",zIndex:1},column:{width:4,spacing:1,heatOn:null,heatmap:null}};b.theme.dark=b.extend({},c,{heatmaps:[{saturation:.8,lightness:.8}],container:{background:"#222",color:"#fff",border:"1px solid #1a1a1a",textShadow:"1px 1px 0 #222"},count:{heatOn:"color"},column:{background:"#3f3f3f"}}),b.theme.light=b.extend({},c,{heatmaps:[{saturation:.5,lightness:.5}],container:{color:"#666",background:"#fff",textShadow:"1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},count:{heatOn:"color"},column:{background:"#eaeaea"}}),b.theme.colorful=b.extend({},c,{heatmaps:[{saturation:.5,lightness:.6}],container:{heatOn:"backgroundColor",background:"#888",color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.2)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},column:{background:"#777",backgroundColor:"rgba(0,0,0,.2)"}}),b.theme.transparent=b.extend({},c,{heatmaps:[{saturation:.8,lightness:.5}],container:{padding:0,color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.5)"},count:{padding:"0 5px",height:"40px",lineHeight:"40px"},legend:{padding:"0 5px",height:"40px",lineHeight:"42px"},graph:{height:"40px"},column:{width:5,background:"#999",heatOn:"backgroundColor",opacity:.5}})}(window,FPSMeter);