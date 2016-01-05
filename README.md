# snowfalls

Some scripts of moving snowflakes on DOM layers and Canvas

Article (in Russian) about [snowfall scripts](http://spmbt.github.io/snowfalls/index.ru.htm) (12 variants) for DOM and Canvas scenes - [Habrahabr (ext. link)](http://habrahabr.ru/post/274535/). Codes, FPS, screenshots.

### Script groups and variations

For better run and inspecting of selected old scripts its are located here with necessary facilities and rework, from little to more.

* falling-snow
    * original (2005) [demo](http://spmbt.github.io/snowfalls/falling-snow.htm) [script](https://github.com/spmbt/snowfalls/blob/gh-pages/falling-snow.htm) with some forms for start it in various modes (stop button is present);
    * original (2005) [demo](http://spmbt.github.io/snowfalls/falling-snow-woButtons.htm) [script](https://github.com/spmbt/snowfalls/blob/gh-pages/falling-snow-woButtons.htm) without forms on clean list; [jsFiddle](https://jsfiddle.net/spmbt/haL5g3o7/1/);
    * original (2006) [demo](http://spmbt.github.io/snowfalls/falling-snow-BrownMov.htm) [script](https://github.com/spmbt/snowfalls/blob/gh-pages/falling-snow-BrownMov.htm) with approaching of flakes; [jsFiddle](https://jsfiddle.net/spmbt/zqm64eq8/);
* jSnow
    * [demo](http://spmbt.github.io/snowfalls/jSnow.htm) [code](https://github.com/spmbt/snowfalls/blob/gh-pages/jSnow.htm) of 2 processes of snow falling in container and in whole window;
    * [demo](http://spmbt.github.io/snowfalls/jSnowMultiWin.htm) [code](https://github.com/spmbt/snowfalls/blob/gh-pages/jSnowMultiWin.htm) of snow falling in multiple containers and in whole window at one time;
    * [demo](http://spmbt.github.io/snowfalls/jSnowSimple.htm) [script](https://github.com/spmbt/snowfalls/blob/gh-pages/jSnowSimple.js) giving one instance of process on the page (analog of original script); [jsFiddle](https://jsfiddle.net/spmbt/xcez6ha6/1/);
    * original [jsFiddle](https://jsfiddle.net/spmbt/vhccLbzm/) (2009) version 1.1.mod1 (footprints of unpacking); [ext.link](http://shadowmint.blogspot.ru/2009/12/jsnow-mods.html);
    * original [jsFiddle](https://jsfiddle.net/spmbt/vhccLbzm/1/) [script](https://github.com/spmbt/snowfalls/blob/gh-pages/jSnow11mod2orig.js) 1.1mod2 (2010) with compatibility of jQuery 2.X;
    * original [jsFiddle](https://jsfiddle.net/spmbt/vhccLbzm/2/) (2009) obfuscated version 1.2 (original source is absent); [ext.link](http://demos.9lessons.info/happyxmas.html);
* snow-canvas
    * [demo](http://spmbt.github.io/snowfalls/snow-canvasTorus.htm) [code](https://github.com/spmbt/snowfalls/blob/gh-pages/snow-canvasTorus.htm) falling in list folded in **torus** (isothropic); [jsFiddle](http://jsfiddle.net/spmbt/963b3cyg/1/);
    * [demo](http://spmbt.github.io/snowfalls/snow-canvasMelt.htm) [code](https://github.com/spmbt/snowfalls/blob/gh-pages/snow-canvasMelt.htm) falling with snow melting on the ground; [jsFiddle](http://jsfiddle.net/spmbt/963b3cyg/3/);
    * [demo](http://spmbt.github.io/snowfalls/snow-canvasMeltPhoto.htm) [code](https://github.com/spmbt/snowfalls/blob/gh-pages/snow-canvasMeltPhoto.htm) variant of melting with photo; [jsFiddle](http://jsfiddle.net/spmbt/963b3cyg/9/embedded/result,js,html,css/);
    * "[Snow Effect using...](http://thecodeplayer.com/walkthrough/html5-canvas-snow-effect)" is prototype of snow-canvas from **TheCodePlayer** playground; copy to [jsFiddle](https://jsfiddle.net/spmbt/mbdardty/);
* [snowMachine](https://github.com/clubadm/snowmachine) - variant with similar code from [kafeman](https://github.com/kafeman)

Use pages of demo for show effects and experiments with parameters.
Use newest versions of code for run in another pages.

### Assets of selected scripts

'falling-snow' - most natural moving of flakes using 4 parameters and 1 of themсфыгфд is harmonical.

'jSnow' - fairly natural movement with this parameters (big and slow harmonical gusts to left and right). More simple maths.

'snow-canvas' - method of fast and massive animations using Canvas object of HTML5. When no additiona library, we arrive maximum of visual effects. In this variant the method of casual deviations is used, without harmonic functions.

'snowMachine' - combined constructor for create DOM-manager od Canvas one;
 
* ... - additional visual effects based on 'snow-canvas' engine: snow growing;

