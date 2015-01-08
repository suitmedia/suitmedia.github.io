/*!
loadCSS: load a CSS file asynchronously.
[c]2014 @scottjehl, Filament Group, Inc.
Licensed MIT
*/
function loadCSS( href, before, media ){
    "use strict";
    // Arguments explained:
    // `href` is the URL for your CSS file.
    // `before` optionally defines the element we'll use as a reference for injecting our <link>
    // By default, `before` uses the first <script> element in the page.
    // However, since the order in which stylesheets are referenced matters, you might need a more specific location in your document.
    // If so, pass a different reference element to the `before` argument and it'll insert before that instead
    // note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
    var ss = window.document.createElement( "link" );
    var ref = before || window.document.getElementsByTagName( "script" )[ 0 ];
    var sheets = window.document.styleSheets;
    ss.rel = "stylesheet";
    ss.href = href;
    // temporarily, set media to something non-matching to ensure it'll fetch without blocking render
    ss.media = "only x";
    // inject link
    ref.parentNode.insertBefore( ss, ref );
    // This function sets the link's media back to `all` so that the stylesheet applies once it loads
    // It is designed to poll until document.styleSheets includes the new sheet.
    function toggleMedia(){
        var defined;
        for( var i = 0; i < sheets.length; i++ ){
            if( sheets[ i ].href && sheets[ i ].href.indexOf( href ) > -1 ){
                defined = true;
            }
        }
        if( defined ){
            ss.media = media || "all";
        }
        else {
            setTimeout( toggleMedia );
        }
    }
    toggleMedia();
    return ss;
}

/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
function loadJS( src, cb ){
    "use strict";
    var ref = window.document.getElementsByTagName( "script" )[ 0 ];
    var script = window.document.createElement( "script" );
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore( script, ref );
    if (cb && typeof(cb) === "function") {
        script.onload = cb;
    }
    return script;
}

;(function ( window, document, undefined ) {
    "use strict";

    var Site = {

        init: function () {
            Site.syntaxHighlighter();
            Site.titleParallax();
            Site.consoleMessage();
        },

        syntaxHighlighter: function () {
            var elems = document.querySelectorAll('code');

            if ( !elems.length ) return;

            var initPlugin = function () {
                hljs.initHighlighting();
            };

            loadCSS('//fonts.googleapis.com/css?family=Inconsolata');
            loadCSS('//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/styles/tomorrow-night.min.css');
            loadJS('//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/highlight.min.js', initPlugin);
        },

        titleParallax: function () {
            var header  = document.querySelector('.main-header'),
                title   = document.querySelector('.page-title'),

                headerHeight    = header.clientHeight,
                MULTIPLIER      = 3;

            window.addEventListener('scroll', function () {
                var pos = window.scrollY;

                if ( scrollY < headerHeight ) {
                    title.style.transform = 'translateY(' + pos/MULTIPLIER + 'px)';
                }
            }, false);
        },

        consoleMessage: function () {
            console.clear();
            logHeading('Welcome to', 16);
            logHeading('Suitmedia Front-end Styleguides', 22);
        }

    };

    function logHeading( msg, size ) {
        console.log('%c' + msg, 'background: #BE532C; color: #fff; font-size: ' + size + 'px; padding: 4px;');
    }

    var EasterEgg = {

        init: function () {
            console.log('HIII!!!!!!');
        }

    };

    Site.init();

    window.SMEE = EasterEgg;

})( window, document );