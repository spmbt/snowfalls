// jSnow, a jQuery Plugin v1.1mod3, 2009+2015. Licensed under GPL licenses.
// (c) 2009 Nikos "DuMmWiaM" Kontis, dummwiam@gmail.com
// upd Shadowmint (http://shadowmint.blogspot.com/) 2009
// upd Serban Boanca (http://www.dj50.ro/) 2010
// upd spmbt.github.com 2015
(function($){'use strict';
	$['fn']['jSnow'] = function(o){
		if(this.length==0) this.push(window);
	return this['each'](function(I, el, wW, wH, elBody){ //[''] are written for Closure Compiler
		elBody = el.tagName ? el : document.body;
		var $contOver = elBody.tagName ? $(elBody) : $('BODY');
		elBody = elBody.tagName=='BODY';
		var setWH = function(){
			wW = elBody ? window.innerWidth || document.documentElement.clientWidth : $contOver.width();
			wH =  o.height || (elBody ? (window.innerHeight || document.documentElement.clientHeight) -20 : $contOver.height());
		};
		setWH();
		var sN = o['flakes'] ||30 //default settings
			,sCodes = o['flakeCode'] ||['&bull;','❄', '❅', '❆', '•', '<sup>✻</sup>', '✺', '*' /*,'snow.png'*/]
		,sColors = o['flakeColor'] ||'#fff'//string delim.','or array
		,sSizeMin = o['flakeMinSize']==null ? 10 : o['flakeMinSize']
		,sSizeMax = o['flakeMaxSize'] ||40
		,dYMin = 1+ (o['fallingSpeedMin']==null ? .4 : o['fallingSpeedMin'])
		,dYMax = o['fallingSpeedMax'] ||3
		,dT = o['interval'] ||80
		,z = o['zIndex']==null ? 'auto' : o['zIndex']
		,fadeAway = o['fadeAway'] //progressive transparency before hide
		,fwS = o['followScroll']==null ? 1 : o['followScroll'] //'fixed' support
		,runFall = o['runFall']==null ? 1 : o['runFall'] //move on start and continue falling
		,toggSel = o['toggleSelector'] ||'.toggleFalling'

		,$cont = $('<div />')['css']({ //container
			width: wW,
			height: wH,
			minHeight:'inherit',
			overflow:'inherit',
			position: fwS && elBody ?'fixed':'absolute',
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
					sI.remove();
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
				var $k = $('<div \/>')
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
		sCodes = (sCodes+'').split(','); //do not use ',' in data
		sColors = sColors instanceof Array ? sColors :[sColors];
		$('html')['css']({
			overflowY: 'scroll',
			overflowX: 'hidden'
		});
		addFlakes(sN);
		runFall && moveFlakes();
		window.onresize = setWH;
		$(toggSel)['on']({click:function(){if(runFall = runFall ?0:1) moveFlakes();} });
	});};
})(jQuery); //end of jQuery plugin

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


