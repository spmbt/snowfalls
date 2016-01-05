// jSnowSimple, a jQuery Plugin v1.1mod3.0 falling in full window, 2009+2015. Licensed under GPL licenses.
// (c) 2009 Nikos "DuMmWiaM" Kontis, dummwiam@gmail.com
// upd Shadowmint (http://shadowmint.blogspot.com/) 2009
// upd Serban Boanca (http://www.dj50.ro/) 2010
// upd spmbt.github.com 2015
(function($){'use strict';
	$['fn']['jSnow'] = function(o, wW, wH){ //[''] are written for Closure Compiler
		var $contOver = $('body')
			,setWH = function(){
				wW = $contOver.width();
				wH = o.height || (window.innerHeight || document.documentElement.clientHeight) -20;
			};
		setWH();
		var sN = o['flakes'] ||30 //default settings
			,sCodes = o['flakeCode'] ||['&bull;']
		,sColors = o['flakeColor'] ||['#fff']
		,sSizeMin = o['flakeMinSize']==null ? 10 : o['flakeMinSize']
		,sSizeMax = o['flakeMaxSize'] ||20
		,dYMin = 1+ (o['fallingSpeedMin']==null ? 1 : o['fallingSpeedMin'])
		,dYMax = o['fallingSpeedMax'] ||3
		,dT = o['interval'] ||50
		,z = o['zIndex']==null ?'auto': o['zIndex']
		,fadeAway = o['fadeAway'] //progressive transparency before hide
		,fwS = o['followScroll'] //'fixed' support
		,runFall = o['runFall']==null ? 1 : o['runFall'] //move on start and continue falling
		,toggleFalling = o['toggleFalling'] ||'.toggleFalling' //selector for 'stop/continue' button

		,$cont = $('<div \/>')['css']({ //container
			width: wW,
			height: 1,
			display: 'block',
			overflow: 'visible',
			position: fwS ?'fixed':'absolute',
			zIndex: z
		})['prependTo']($contOver)
		,S =[] //flakes
		,moveFlakes = function(one){
			for(var i = S.length; i--;){
				var sI = S[i]
					,sID = $['data'](sI);
				sID.top = 0| sID.top + sID.dY;
				sID.rad += 2;
				if(sID.top > wH){
					$['removeData'](sI);
					S.splice(i, 1);
					addFlakes(1,1);
				}
				sI['css']({
					left: (sID.left0 - (Math.cos((sID.rad / 180) * Math.PI)) * sID.swingRange),
					top: sID.top,
					opacity: fadeAway ? Math.min((wH - sID.top) / 100, 1) : 1
				});
			}
			!one && runFall && setTimeout(moveFlakes, dT);
		}
		,addFlakes = function(n, destroy){
			var rand = function(m, m0){return (m0||0) + (0|Math.random() * m);}
				,siz = rand(sSizeMax - sSizeMin, sSizeMin);
			for(var i = n; i--;){ //.. each flake
				var $k = $('<div />')
					,sC = sCodes[rand(sCodes.length)];
				if(/\.(png|gif)$/.test(sC)){
					new Image().src = sC;
					sC = '<img src="' + sC +'"alt="*"width="'+ siz +'">';
				}
				$k['html'](sC)['css']({
					color: sColors[rand(sColors.length)],
					fontSize: siz,
					lineHeight: 0.5,
					position: 'absolute',
					cursor: 'default'
				})
					['appendTo']($cont);
				$['data']($k,{
					left0: rand(wW - $k.width() - 20, 25),
					top: destroy ? -$k.height() : rand(wH -$k.height()),
					rad: rand(50),
					dY: rand(dYMax - dYMin, dYMin),
					swingRange: rand(90)
				});
				S.push($k);
			}
			moveFlakes(1);
		};
		$('html')['css']({
			overflowY: 'scroll',
			overflowX: 'hidden'
		});
		addFlakes(sN);
		runFall && moveFlakes();
		window.onresize = setWH;
		$(toggleFalling)['on']({click:function(){if(runFall = runFall ?0:1) moveFlakes();} });
		return this;
	};

})(jQuery); //end of jQuery plugin

/*jSnowSimple 1.1mod3.0 2015* /$.fn.jSnow=function(a,m,h){function n(a,f){function c(a,b){return(b||0)+(0|Math.random()*a)}for(var b=c(w-p,p),e=a;e--;){var d=$("<div />"),g=q[c(q.length)];/\.(png|gif)$/.test(g)&&((new Image).src=g,g='<img src="'+g+'"alt="*"width="'+b+'">');d.html(g).css({color:r[c(r.length)],fontSize:b,lineHeight:.5,position:"absolute",cursor:"default"}).appendTo(x);$.data(d,{c:c(m-d.width()-20,25),top:f?-d.height():c(h-d.height()),a:c(50),b:c(y-t,t),f:c(90)});k.push(d)}l(1)}function l(a){for(var f=k.length;f--;){var c=k[f],b=$.data(c);b.top=0|b.top+b.b;b.a+=2;b.top>h&&($.removeData(c),c.remove(),k.splice(f,1),n(1,1));c.css({left:b.c-Math.cos(b.a/180*Math.PI)*b.f,top:b.top,opacity:z?Math.min((h-b.top)/100,1):1})}!a&&e&&setTimeout(l,A)}function u(){m=v.width();h=a.height||(window.innerHeight||document.documentElement.clientHeight)-20}var v=$("body");u();var B=a.flakes||30,q=a.flakeCode||["&bull;"],r=a.flakeColor||["#fff"],p=null==a.flakeMinSize?10:a.flakeMinSize,w=a.flakeMaxSize||20,t=1+(null==a.fallingSpeedMin?1:a.fallingSpeedMin),y=a.fallingSpeedMax||3,A=a.interval||50,C=null==a.zIndex?"auto":a.zIndex,z=a.fadeAway,D=a.followScroll,e=null==a.runFall?1:a.runFall,E=a.toggleFalling||".toggleFalling",x=$("<div />").css({width:m,height:1,display:"block",overflow:"visible",position:D?"fixed":"absolute",zIndex:C}).prependTo(v),k=[];$("html").css({overflowY:"scroll",overflowX:"hidden"});n(B);e&&l();window.onresize=u;$(E).on({click:function(){(e=e?0:1)&&l()}});return this};/**/

!1&& $(function(){ //example of start
	$().jSnow({
		flakes: 25
		,flakeCode: [
			'snow21.png',
			'❄', '❅', '❆', '•', '<sup>✻</sup>', '✺', '*'
		]
		,fallingSpeedMax: 2
		,fallingSpeedMin:.2
		,flakeMaxSize: 40
		,zIndex: 65535
		,interval: 80
		,fadeAway: 1
		,followScroll: 1
		,flakeColor: ['rgba(208,222,255,.7)','rgba(223,255,223,.78)','#fcc']
	});
});


