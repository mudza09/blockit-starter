/* --------------------------------------------------------------------------
 * File        : config-theme.js
 * Author      : indonez
 * Author URI  : http://www.indonez.com
 *
 * Indonez Copyright 2020 All Rights Reserved.
 * -------------------------------------------------------------------------- 
 * javascript handle initialization
    1. Slideshow
    2. Counter
    3. Mobile nav button
 * -------------------------------------------------------------------------- */

    'use strict';

    const HomepageApp = {
        //----------- 1. Slideshow -----------
        theme_slideshow: function() {
            new CarouselConfig({
                element: '#main-slideshow',         // carousel element id
                fadeTransition: false,              // default is slide, use 'true' if want use fade effect
                interval: 6000,                     // interval between change slide
                control: {
                    type: 'button',                 // the options is: 'button', 'indicator' and 'both'
                    onHover: true                   // control appears when hover in careousel element
                },
                height: {                           // height for every devices
                    desktop: '460px',
                    tablet: '380px',
                    phone: '320px'
                }
            }).init();
        },
        //---------- 2. Counter -----------
        theme_counter: function() {
            new CounterUp({
                selector: '.count',
                start: 0,
                duration: 3200,
                intvalues: true,
                interval: 50
            }).start()
        },
        //---------- 3. Mobile nav button -----------
        theme_mobilenav: function() {
            new MobileNavbar({
                addonButtons: true,                 // options to use addon buttons, set it "false" if you won't use addon buttons
                buttons: [
                    {
                        name: 'Login',              // button name
                        url: '',                    // button url
                        type: 'primary',            // button type (default, primary, secondary, danger, text)
                        icon: 'sign-in-alt'         // button icon, you can use all icons from here : https://fontawesome.com/icons?d=gallery&s=solid&m=free
                    },
                ]
            }).init();
        },
        theme_init: function() {
            HomepageApp.theme_slideshow();
            HomepageApp.theme_counter();
            HomepageApp.theme_mobilenav();
        }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        HomepageApp.theme_init();
    });