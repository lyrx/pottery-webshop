import './App.css';
import React, {useEffect} from "react";
import ShopHeader from "./components/ShopHeader";
import Banner from "./components/Banner";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";


function App() {
    // Dropdowns.


    useEffect(() => {


        function init($, breakpoints, browser) {
            var $window = $(window),
                $body = $('body');

            function setBreakpoints() {
                breakpoints({
                    xlarge: ['1281px', '1680px'],
                    large: ['981px', '1280px'],
                    medium: ['737px', '980px'],
                    small: ['481px', '736px'],
                    xsmall: [null, '480px']
                });
            }

            function browserMobile() {
                // Touch mode.
                if (browser.mobile)
                    $body.addClass('is-touch');
            }

            function initScrolly() {
                $('.scrolly').scrolly({
                    speed: 2000
                });
            }

            function initDropotron() {
                $('#nav > ul').dropotron({
                    alignment: 'right',
                    hideDelay: 350
                });
            }

            function navPanel() {
                $(
                    '<div id="navPanel">' +
                    '<nav>' +
                    $('#nav').navList() +
                    '</nav>' +
                    '</div>'
                );
            }

            function titleBar() {
                // Title Bar.
                $(
                    '<div id="titleBar">' +
                    '<a href="#navPanel" class="toggle"></a>' +
                    '<span class="title">' + $('#logo').html() + '</span>' +
                    '</div>'
                )
                    .appendTo($body);
            }

            function navPanel() {
                // Panel.
                $(
                    '<div id="navPanel">' +
                    '<nav>' +
                    $('#nav').navList() +
                    '</nav>' +
                    '</div>'
                )
                    .appendTo($body)
                    .panel({
                        delay: 500,
                        hideOnClick: true,
                        hideOnSwipe: true,
                        resetScroll: true,
                        resetForms: true,
                        side: 'left',
                        target: $body,
                        visibleClass: 'navPanel-visible'
                    });
            }

            function parallax() {
                // Parallax.
                // Disabled on IE (choppy scrolling) and mobile platforms (poor performance).
                if (browser.name == 'ie'
                    || browser.mobile) {

                    $.fn._parallax = function () {

                        return $(this);

                    };

                } else {

                    $.fn._parallax = function () {

                        $(this).each(function () {

                            var $this = $(this),
                                on, off;

                            on = function () {

                                $this
                                    .css('background-position', 'center 0px');

                                $window
                                    .on('scroll._parallax', function () {

                                        var pos = parseInt($window.scrollTop()) - parseInt($this.position().top);

                                        $this.css('background-position', 'center ' + (pos * -0.15) + 'px');

                                    });

                            };

                            off = function () {

                                $this
                                    .css('background-position', '');

                                $window
                                    .off('scroll._parallax');

                            };

                            breakpoints.on('<=medium', off);
                            breakpoints.on('>medium', on);

                        });

                        return $(this);

                    };

                    $window
                        .on('load resize', function () {
                            $window.trigger('scroll');
                        });

                }
            }

            function spotlights() {
                // Spotlights.
                var $spotlights = $('.spotlight');

                $spotlights
                    ._parallax()
                    .each(function () {

                        var $this = $(this),
                            on, off;

                        on = function () {

                            var top, bottom, mode;

                            // Use main <img>'s src as this spotlight's background.
                            $this.css('background-image', 'url("' + $this.find('.image.main > img').attr('src') + '")');

                            // Side-specific scrollex tweaks.
                            if ($this.hasClass('top')) {

                                mode = 'top';
                                top = '-20%';
                                bottom = 0;

                            } else if ($this.hasClass('bottom')) {

                                mode = 'bottom-only';
                                top = 0;
                                bottom = '20%';

                            } else {

                                mode = 'middle';
                                top = 0;
                                bottom = 0;

                            }

                            // Add scrollex.
                            $this.scrollex({
                                mode: mode,
                                top: top,
                                bottom: bottom,
                                initialize: function (t) {
                                    $this.addClass('inactive');
                                },
                                terminate: function (t) {
                                    $this.removeClass('inactive');
                                },
                                enter: function (t) {
                                    $this.removeClass('inactive');
                                },

                                // Uncomment the line below to "rewind" when this spotlight scrolls out of view.

                                //leave:	function(t) { $this.addClass('inactive'); },

                            });

                        };

                        off = function () {

                            // Clear spotlight's background.
                            $this.css('background-image', '');

                            // Remove scrollex.
                            $this.unscrollex();

                        };

                        breakpoints.on('<=medium', off);
                        breakpoints.on('>medium', on);

                    });
            }

            function wrappers() {
                // Wrappers.
                var $wrappers = $('.wrapper');
                $wrappers
                    .each(function () {

                        var $this = $(this),
                            on, off;

                        on = function () {

                            $this.scrollex({
                                top: 250,
                                bottom: 0,
                                initialize: function (t) {
                                    $this.addClass('inactive');
                                },
                                terminate: function (t) {
                                    $this.removeClass('inactive');
                                },
                                enter: function (t) {
                                    $this.removeClass('inactive');
                                },

                                // Uncomment the line below to "rewind" when this wrapper scrolls out of view.

                                //leave:	function(t) { $this.addClass('inactive'); },

                            });

                        };

                        off = function () {
                            $this.unscrollex();
                        };

                        breakpoints.on('<=medium', off);
                        breakpoints.on('>medium', on);

                    });
            }

            function banners() {
                // Banner.
                var $banner = $('#banner');

                $banner
                    ._parallax();
            }

            setBreakpoints();
            browserMobile();
            initScrolly();
            initDropotron();
            navPanel();
            titleBar();
            navPanel();
            parallax();
            spotlights();
            wrappers();
            banners();
        }

        init(window.$, window.breakpoints, window.browser);

    }, []);


    return (
        <div className="App">
            <ShopHeader/>
            <Banner/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
        </div>
    );
}

export default App;
