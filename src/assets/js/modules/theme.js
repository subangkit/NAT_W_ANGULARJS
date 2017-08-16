angular.module('dez-theme', [
    'ngStorage',
    'ngMessages',
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad',
    'ajoslin.promise-tracker', 'restangular', //REST Angular
    'satellizer',
])
.config(['$stateProvider', '$urlRouterProvider', '$authProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $authProvider, $httpProvider) {

        $stateProvider
            .state('angularjs', {
                url: '/angularjs',
                templateUrl: 'assets/views/ready_angularjs.html'
            })
            .state('default', {
                controller: 'DefaultCtrl',
                templateUrl: 'assets/views/layout_default.html',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/slick/slick.min.css',
                                'assets/js/plugins/slick/slick-theme.min.css',
                                'assets/js/plugins/slick/slick.min.js',
                                'assets/js/plugins/chartjs/Chart.min.js'
                            ]
                        });
                    }],
                },
            })
            .state('uiActivity', {
                url: '/ui/activity',
                templateUrl: 'assets/views/ui_activity.html',
                controller: 'UiActivityCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/sweetalert2/sweetalert2.min.css',
                                'assets/js/plugins/bootstrap-notify/bootstrap-notify.min.js',
                                'assets/js/plugins/sweetalert2/es6-promise.auto.min.js',
                                'assets/js/plugins/sweetalert2/sweetalert2.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('uiTabs', {
                url: '/ui/tabs',
                templateUrl: 'assets/views/ui_tabs.html'
            })
            .state('uiModalsTooltips', {
                url: '/ui/modals-tooltips',
                templateUrl: 'assets/views/ui_modals_tooltips.html'
            })
            .state('uiColorThemes', {
                url: '/ui/color-themes',
                templateUrl: 'assets/views/ui_color_themes.html'
            })
            .state('uiBlocksDraggable', {
                url: '/ui/blocks-draggable',
                templateUrl: 'assets/views/ui_blocks_draggable.html',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/jquery-ui/jquery-ui.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('uiChatFull', {
                url: '/ui/chat/full',
                templateUrl: 'assets/views/ui_chat_full.html',
                controller: 'UiChatCtrl'
            })
            .state('uiChatFixed', {
                url: '/ui/chat/fixed',
                templateUrl: 'assets/views/ui_chat_fixed.html',
                controller: 'UiChatCtrl'
            })
            .state('uiChatPopup', {
                url: '/ui/chat/popup',
                templateUrl: 'assets/views/ui_chat_popup.html',
                controller: 'UiChatCtrl'
            })
            .state('tablesTools', {
                url: '/tables/tools',
                templateUrl: 'assets/views/tables_tools.html'
            })
            .state('tablesDatatables', {
                url: '/tables/datatables',
                templateUrl: 'assets/views/tables_datatables.html',
                controller: 'TablesDatatablesCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/datatables/jquery.dataTables.min.css',
                                'assets/js/plugins/datatables/jquery.dataTables.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('formsPickersMore', {
                url: '/forms/pickers-more',
                templateUrl: 'assets/views/forms_pickers_more.html',
                controller: 'FormsPickersMoreCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/bootstrap-datepicker/bootstrap-datepicker3.min.css',
                                'assets/js/plugins/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css',
                                'assets/js/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css',
                                'assets/js/plugins/select2/select2.min.css',
                                'assets/js/plugins/select2/select2-bootstrap.min.css',
                                'assets/js/plugins/jquery-auto-complete/jquery.auto-complete.min.css',
                                'assets/js/plugins/ion-rangeslider/css/ion.rangeSlider.min.css',
                                'assets/js/plugins/ion-rangeslider/css/ion.rangeSlider.skinHTML5.min.css',
                                'assets/js/plugins/dropzonejs/dropzone.min.css',
                                'assets/js/plugins/jquery-tags-input/jquery.tagsinput.min.css',
                                'assets/js/plugins/bootstrap-datepicker/bootstrap-datepicker.min.js',
                                'assets/js/plugins/bootstrap-datetimepicker/moment.min.js',
                                'assets/js/plugins/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js',
                                'assets/js/plugins/bootstrap-colorpicker/bootstrap-colorpicker.min.js',
                                'assets/js/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
                                'assets/js/plugins/select2/select2.full.min.js',
                                'assets/js/plugins/masked-inputs/jquery.maskedinput.min.js',
                                'assets/js/plugins/jquery-auto-complete/jquery.auto-complete.min.js',
                                'assets/js/plugins/ion-rangeslider/js/ion.rangeSlider.min.js',
                                'assets/js/plugins/dropzonejs/dropzone.min.js',
                                'assets/js/plugins/jquery-tags-input/jquery.tagsinput.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('formsEditors', {
                url: '/forms/editors',
                templateUrl: 'assets/views/forms_editors.html',
                controller: 'FormsEditorsCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/summernote/summernote.min.css',
                                'assets/js/plugins/summernote/summernote.min.js',
                                'assets/js/plugins/ckeditor/ckeditor.js',
                                'assets/js/plugins/simplemde/simplemde.min.css',
                                'assets/js/plugins/simplemde/simplemde.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('formsValidation', {
                url: '/forms/validation',
                templateUrl: 'assets/views/forms_validation.html',
                controller: 'FormsValidationCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/select2/select2.min.css',
                                'assets/js/plugins/select2/select2-bootstrap.min.css',
                                'assets/js/plugins/select2/select2.full.min.js',
                                'assets/js/plugins/jquery-validation/jquery.validate.min.js',
                                'assets/js/plugins/jquery-validation/additional-methods.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('formsWizard', {
                url: '/forms/wizard',
                templateUrl: 'assets/views/forms_wizard.html',
                controller: 'FormsWizardCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js',
                                'assets/js/plugins/jquery-validation/jquery.validate.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('compCharts', {
                url: '/components/charts',
                templateUrl: 'assets/views/comp_charts.html',
                controller: 'CompChartsCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/sparkline/jquery.sparkline.min.js',
                                'assets/js/plugins/easy-pie-chart/jquery.easypiechart.min.js',
                                'assets/js/plugins/chartjs/Chart.min.js',
                                'assets/js/plugins/flot/jquery.flot.min.js',
                                'assets/js/plugins/flot/jquery.flot.pie.min.js',
                                'assets/js/plugins/flot/jquery.flot.stack.min.js',
                                'assets/js/plugins/flot/jquery.flot.resize.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('compCalendar', {
                url: '/components/calendar',
                templateUrl: 'assets/views/comp_calendar.html',
                controller: 'CompCalendarCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/fullcalendar/fullcalendar.min.css',
                                'assets/js/plugins/jquery-ui/jquery-ui.min.js',
                                'assets/js/plugins/fullcalendar/moment.min.js',
                                'assets/js/plugins/fullcalendar/fullcalendar.min.js',
                                'assets/js/plugins/fullcalendar/gcal.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('compSliders', {
                url: '/components/sliders',
                templateUrl: 'assets/views/comp_sliders.html',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/slick/slick.min.css',
                                'assets/js/plugins/slick/slick-theme.min.css',
                                'assets/js/plugins/slick/slick.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('compScrolling', {
                url: '/components/scrolling',
                templateUrl: 'assets/views/comp_scrolling.html'
            })
            .state('compSyntaxHighlighting', {
                url: '/components/syntax-highlighting',
                templateUrl: 'assets/views/comp_syntax_highlighting.html',
                controller: 'CompSyntaxHighlightingCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/highlightjs/github-gist.min.css',
                                'assets/js/plugins/highlightjs/highlight.pack.js'
                            ]
                        });
                    }]
                }
            })
            .state('compRating', {
                url: '/components/rating',
                templateUrl: 'assets/views/comp_rating.html',
                controller: 'CompRatingCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/jquery-raty/jquery.raty.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('compTreeview', {
                url: '/components/treeview',
                templateUrl: 'assets/views/comp_treeview.html',
                controller: 'CompTreeviewCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/bootstrap-treeview/bootstrap-treeview.min.css',
                                'assets/js/plugins/bootstrap-treeview/bootstrap-treeview.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('compMapsGoogle', {
                url: '/components/maps/google',
                templateUrl: 'assets/views/comp_maps.html',
                controller: 'CompMapsGoogleCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                /*
                                 * Google Maps API Key (you will have to obtain a Google Maps API key to use Google Maps)
                                 * For more info please have a look at https://developers.google.com/maps/documentation/javascript/get-api-key#key
                                 */
                                {type: 'js', path: 'https://maps.googleapis.com/maps/api/js?key='},
                                'assets/js/plugins/gmapsjs/gmaps.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('compMapsGoogleFull', {
                url: '/components/maps/google-full',
                templateUrl: 'assets/views/comp_maps_full.html',
                controller: 'CompMapsGoogleFullCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                /*
                                 * Google Maps API Key (you will have to obtain a Google Maps API key to use Google Maps)
                                 * For more info please have a look at https://developers.google.com/maps/documentation/javascript/get-api-key#key
                                 */
                                {type: 'js', path: 'https://maps.googleapis.com/maps/api/js?key='},
                                'assets/js/plugins/gmapsjs/gmaps.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('compMapsVector', {
                url: '/components/maps/vector',
                templateUrl: 'assets/views/comp_maps_vector.html',
                controller: 'CompMapsVectorCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/jquery-jvectormap/jquery-jvectormap.min.css',
                                'assets/js/plugins/jquery-jvectormap/jquery-jvectormap.min.js',
                                'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-au-mill-en.js',
                                'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-cn-mill-en.js',
                                'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-de-mill-en.js',
                                'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-europe-mill-en.js',
                                'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-fr-mill-en.js',
                                'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-in-mill-en.js',
                                'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-us-aea-en.js',
                                'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-world-mill-en.js',
                                'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-za-mill-en.js'
                            ]
                        });
                    }]
                }
            })
            .state('compGallerySimple', {
                url: '/components/gallery/simple',
                templateUrl: 'assets/views/comp_gallery_simple.html',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/magnific-popup/magnific-popup.min.css',
                                'assets/js/plugins/magnific-popup/magnific-popup.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('compGalleryAdvanced', {
                url: '/components/gallery/advanced',
                templateUrl: 'assets/views/comp_gallery_advanced.html',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/magnific-popup/magnific-popup.min.css',
                                'assets/js/plugins/magnific-popup/magnific-popup.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('blocks', {
                url: '/blocks',
                templateUrl: 'assets/views/api_blocks.html'
            })
            .state('layout', {
                url: '/layout',
                templateUrl: 'assets/views/api_layout.html'
            })
            .state('create', {
                url: '/create',
                templateUrl: 'assets/views/ready_create.html'
            });
    }
])

// Tooltips and Popovers configuration
.config(['$uibTooltipProvider',
    function ($uibTooltipProvider) {
        $uibTooltipProvider.options({
            appendToBody: true
        });
    }
])

// Custom UI helper functions
.factory('uiHelpers', function () {
    return {
        // Handles active color theme
        uiHandleColorTheme: function (themeName) {
            var colorTheme = jQuery('#css-theme');

            if (themeName) {
                if (colorTheme.length && (colorTheme.prop('href') !== 'assets/css/themes/' + themeName + '.min.css')) {
                    jQuery('#css-theme').prop('href', 'assets/css/themes/' + themeName + '.min.css');
                } else if (!colorTheme.length) {
                    jQuery('#css-main').after('<link rel="stylesheet" id="css-theme" href="assets/css/themes/' + themeName + '.min.css">');
                }
            } else {
                if (colorTheme.length) {
                    colorTheme.remove();
                }
            }
        },
        // Handles #main-container height resize to push footer to the bottom of the page
        uiHandleMain: function () {
            var lMain = jQuery('#main-container');
            var hWindow = jQuery(window).height();
            var hHeader = jQuery('#header-navbar').outerHeight();
            var hFooter = jQuery('#page-footer').outerHeight();

            if (jQuery('#page-container').hasClass('header-navbar-fixed')) {
                lMain.css('min-height', hWindow - hFooter);
            } else {
                lMain.css('min-height', hWindow - (hHeader + hFooter));
            }
        },
        // Handles transparent header functionality (solid on scroll - used in frontend pages)
        uiHandleHeader: function () {
            var lPage = jQuery('#page-container');

            if (lPage.hasClass('header-navbar-fixed') && lPage.hasClass('header-navbar-transparent')) {
                jQuery(window).on('scroll', function () {
                    if (jQuery(this).scrollTop() > 20) {
                        lPage.addClass('header-navbar-scroll');
                    } else {
                        lPage.removeClass('header-navbar-scroll');
                    }
                });
            }
        },
        // Handles sidebar and side overlay custom scrolling functionality
        uiHandleScroll: function (mode) {
            var windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var lPage = jQuery('#page-container');
            var lSidebar = jQuery('#sidebar');
            var lSidebarScroll = jQuery('#sidebar-scroll');
            var lSideOverlay = jQuery('#side-overlay');
            var lSideOverlayScroll = jQuery('#side-overlay-scroll');

            // Init scrolling
            if (mode === 'init') {
                // Init scrolling only if required the first time
                uiHandleScroll();
            } else {
                // If screen width is greater than 991 pixels and .side-scroll is added to #page-container
                if (windowW > 991 && lPage.hasClass('side-scroll') && (lSidebar.length || lSideOverlay.length)) {
                    // If sidebar exists
                    if (lSidebar.length) {
                        // Turn sidebar's scroll lock off (slimScroll will take care of it)
                        jQuery(lSidebar).scrollLock('disable');

                        // If sidebar scrolling does not exist init it..
                        if (lSidebarScroll.length && (!lSidebarScroll.parent('.slimScrollDiv').length)) {
                            lSidebarScroll.slimScroll({
                                height: lSidebar.outerHeight(),
                                color: '#fff',
                                size: '5px',
                                opacity: .35,
                                wheelStep: 15,
                                distance: '2px',
                                railVisible: false,
                                railOpacity: 1
                            });
                        }
                        else { // ..else resize scrolling height
                            lSidebarScroll
                                .add(lSidebarScroll.parent())
                                .css('height', lSidebar.outerHeight());
                        }
                    }

                    // If side overlay exists
                    if (lSideOverlay.length) {
                        // Turn side overlay's scroll lock off (slimScroll will take care of it)
                        jQuery(lSideOverlay).scrollLock('disable');

                        // If side overlay scrolling does not exist init it..
                        if (lSideOverlayScroll.length && (!lSideOverlayScroll.parent('.slimScrollDiv').length)) {
                            lSideOverlayScroll.slimScroll({
                                height: lSideOverlay.outerHeight(),
                                color: '#000',
                                size: '5px',
                                opacity: .35,
                                wheelStep: 15,
                                distance: '2px',
                                railVisible: false,
                                railOpacity: 1
                            });
                        }
                        else { // ..else resize scrolling height
                            lSideOverlayScroll
                                .add(lSideOverlayScroll.parent())
                                .css('height', lSideOverlay.outerHeight());
                        }
                    }
                } else {
                    // If sidebar exists
                    if (lSidebar.length) {
                        // If sidebar scrolling exists destroy it..
                        if (lSidebarScroll.length && lSidebarScroll.parent('.slimScrollDiv').length) {
                            lSidebarScroll
                                .slimScroll({destroy: true});
                            lSidebarScroll
                                .attr('style', '');
                        }

                        // Turn sidebars's scroll lock on
                        jQuery(lSidebar).scrollLock('enable');
                    }

                    // If side overlay exists
                    if (lSideOverlay.length) {
                        // If side overlay scrolling exists destroy it..
                        if (lSideOverlayScroll.length && lSideOverlayScroll.parent('.slimScrollDiv').length) {
                            lSideOverlayScroll
                                .slimScroll({destroy: true});
                            lSideOverlayScroll
                                .attr('style', '');
                        }

                        // Turn side overlay's scroll lock on
                        jQuery(lSideOverlay).scrollLock('enable');
                    }
                }
            }
        },
        // Handles page loader functionality
        uiLoader: function (mode) {
            var lBody = jQuery('body');
            var lpageLoader = jQuery('#page-loader');

            if (mode === 'show') {
                if (lpageLoader.length) {
                    lpageLoader.fadeIn(250);
                } else {
                    lBody.prepend('<div id="page-loader"></div>');
                }
            } else if (mode === 'hide') {
                if (lpageLoader.length) {
                    lpageLoader.fadeOut(250);
                }
            }
        },
        // Handles blocks API functionality
        uiBlocks: function (block, mode, button) {
            // Set default icons for fullscreen and content toggle buttons
            var iconFullscreen = 'si si-size-fullscreen';
            var iconFullscreenActive = 'si si-size-actual';
            var iconContent = 'si si-arrow-up';
            var iconContentActive = 'si si-arrow-down';

            if (mode === 'init') {
                // Auto add the default toggle icons
                switch (button.data('action')) {
                    case 'fullscreen_toggle':
                        button.html('<i class="' + (button.closest('.block').hasClass('block-opt-fullscreen') ? iconFullscreenActive : iconFullscreen) + '"></i>');
                        break;
                    case 'content_toggle':
                        button.html('<i class="' + (button.closest('.block').hasClass('block-opt-hidden') ? iconContentActive : iconContent) + '"></i>');
                        break;
                    default:
                        return false;
                }
            } else {
                // Get block element
                var elBlock = (block instanceof jQuery) ? block : jQuery(block);

                // If element exists, procceed with blocks functionality
                if (elBlock.length) {
                    // Get block option buttons if exist (need them to update their icons)
                    var btnFullscreen = jQuery('[data-js-block-option][data-action="fullscreen_toggle"]', elBlock);
                    var btnToggle = jQuery('[data-js-block-option][data-action="content_toggle"]', elBlock);

                    // Mode selection
                    switch (mode) {
                        case 'fullscreen_toggle':
                            elBlock.toggleClass('block-opt-fullscreen');

                            // Enable/disable scroll lock to block
                            if (elBlock.hasClass('block-opt-fullscreen')) {
                                jQuery(elBlock).scrollLock('enable');
                            } else {
                                jQuery(elBlock).scrollLock('disable');
                            }

                            // Update block option icon
                            if (btnFullscreen.length) {
                                if (elBlock.hasClass('block-opt-fullscreen')) {
                                    jQuery('i', btnFullscreen)
                                        .removeClass(iconFullscreen)
                                        .addClass(iconFullscreenActive);
                                } else {
                                    jQuery('i', btnFullscreen)
                                        .removeClass(iconFullscreenActive)
                                        .addClass(iconFullscreen);
                                }
                            }
                            break;
                        case 'fullscreen_on':
                            elBlock.addClass('block-opt-fullscreen');

                            // Enable scroll lock to block
                            jQuery(elBlock).scrollLock('enable');

                            // Update block option icon
                            if (btnFullscreen.length) {
                                jQuery('i', btnFullscreen)
                                    .removeClass(iconFullscreen)
                                    .addClass(iconFullscreenActive);
                            }
                            break;
                        case 'fullscreen_off':
                            elBlock.removeClass('block-opt-fullscreen');

                            // Disable scroll lock to block
                            jQuery(elBlock).scrollLock('disable');

                            // Update block option icon
                            if (btnFullscreen.length) {
                                jQuery('i', btnFullscreen)
                                    .removeClass(iconFullscreenActive)
                                    .addClass(iconFullscreen);
                            }
                            break;
                        case 'content_toggle':
                            elBlock.toggleClass('block-opt-hidden');

                            // Update block option icon
                            if (btnToggle.length) {
                                if (elBlock.hasClass('block-opt-hidden')) {
                                    jQuery('i', btnToggle)
                                        .removeClass(iconContent)
                                        .addClass(iconContentActive);
                                } else {
                                    jQuery('i', btnToggle)
                                        .removeClass(iconContentActive)
                                        .addClass(iconContent);
                                }
                            }
                            break;
                        case 'content_hide':
                            elBlock.addClass('block-opt-hidden');

                            // Update block option icon
                            if (btnToggle.length) {
                                jQuery('i', btnToggle)
                                    .removeClass(iconContent)
                                    .addClass(iconContentActive);
                            }
                            break;
                        case 'content_show':
                            elBlock.removeClass('block-opt-hidden');

                            // Update block option icon
                            if (btnToggle.length) {
                                jQuery('i', btnToggle)
                                    .removeClass(iconContentActive)
                                    .addClass(iconContent);
                            }
                            break;
                        case 'refresh_toggle':
                            elBlock.toggleClass('block-opt-refresh');

                            // Return block to normal state if the demostration mode is on in the refresh option button - data-action-mode="demo"
                            if (jQuery('[data-js-block-option][data-action="refresh_toggle"][data-action-mode="demo"]', elBlock).length) {
                                setTimeout(function () {
                                    elBlock.removeClass('block-opt-refresh');
                                }, 2000);
                            }
                            break;
                        case 'state_loading':
                            elBlock.addClass('block-opt-refresh');
                            break;
                        case 'state_normal':
                            elBlock.removeClass('block-opt-refresh');
                            break;
                        case 'close':
                            elBlock.hide();
                            break;
                        case 'open':
                            elBlock.show();
                            break;
                        default:
                            return false;
                    }
                }
            }
        }
    };
})

/*
 * Partial views controllers
 *
 */

// Side Overlay Controller
.controller('SideOverlayCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // When view content is loaded
        $scope.$on('$includeContentLoaded', function () {
            // Handle Scrolling
            $scope.helpers.uiHandleScroll();
        });
    }
])

// Sidebar Controller
.controller('SidebarCtrl', ['$scope', '$localStorage', '$window', '$location',
    function ($scope, $localStorage, $window, $location) {
        // When view content is loaded
        $scope.$on('$includeContentLoaded', function () {
            // Handle Scrolling
            $scope.helpers.uiHandleScroll();

            // Get current path to use it for adding active classes to our submenus
            $scope.path = $location.path();
        });
    }
])

// Header Controller
.controller('HeaderCtrl', ['$scope', '$rootScope', '$localStorage', '$window',
    function ($scope, $rootScope, $localStorage, $window) {
        // When view content is loaded
        $scope.$on('$includeContentLoaded', function () {
            // Transparent header functionality
            $scope.helpers.uiHandleHeader();
        });

    }
])

/**
 *  CONTROLLER
 */

// Default Layout Controller
.controller('DefaultCtrl', ['$scope', '$localStorage', '$window', 'Debuger',
    function ($scope, $localStorage, $window, Debuger) {
        /*
         * Init Chart.js Chart, for more examples you can check out http://www.chartjs.org/docs
         */
        Debuger.info('Layout : ', 'Default')
    }
])
// Login Layout Controller

// UI Elements Activity Controller
.controller('UiActivityCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Preview page loader
        $scope.previewPageLoader = function () {
            $scope.helpers.uiLoader('show');

            setTimeout(function () {
                $scope.helpers.uiLoader('hide');
            }, 3000);
        };

        // Randomize progress bars values
        var barsRandomize = function () {
            jQuery('.js-bar-randomize').on('click', function () {
                jQuery(this)
                    .parents('.block')
                    .find('.progress-bar')
                    .each(function () {
                        var el = jQuery(this);
                        var random = Math.floor((Math.random() * 91) + 10) + '%';

                        el.css('width', random);

                        if (!el.parent().hasClass('progress-mini')) {
                            el.html(random);
                        }
                    });
            });
        };

        // SweetAlert, for more examples you can check out https://github.com/t4t5/sweetalert
        var sweetAlert = function () {
            // Init a simple alert on button click
            jQuery('.js-swal-alert').on('click', function () {
                swal('Hi, this is a simple alert!');
            });

            // Init an success alert on button click
            jQuery('.js-swal-success').on('click', function () {
                swal('Success', 'Everything updated perfectly!', 'success');
            });

            // Init an error alert on button click
            jQuery('.js-swal-error').on('click', function () {
                swal('Oops...', 'Something went wrong!', 'error');
            });

            // Init an example confirm alert on button click
            jQuery('.js-swal-confirm').on('click', function () {
                swal({
                    title: 'Are you sure?',
                    text: 'You will not be able to recover this imaginary file!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d26a5c',
                    confirmButtonText: 'Yes, delete it!',
                    html: false,
                    preConfirm: function () {
                        return new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve();
                            }, 50);
                        });
                    }
                }).then(
                    function (result) {
                        swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
                    }, function (dismiss) {
                        // dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
                    }
                );
            });
        };

        // Init randomize bar values
        barsRandomize();

        // Init SweetAlert
        sweetAlert();
    }
])

// UI Elements Chat Controller
.controller('UiChatCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Helper variables - set in initChat()
        var lWindow, lHeader, lFooter, cContainer, cHead, cTalk, cPeople, cform, cTimeout;

        // Init chat
        var initChat = function () {
            // Set variables
            lWindow = jQuery(window);
            lHeader = jQuery('#header-navbar');
            lFooter = jQuery('#page-footer');
            cContainer = jQuery('.js-chat-container');
            cHead = jQuery('.js-chat-head');
            cTalk = jQuery('.js-chat-talk');
            cPeople = jQuery('.js-chat-people');
            cform = jQuery('.js-chat-form');

            // Add word wraping to chat content
            cTalk.css('word-wrap', 'break-word');

            // Chat layout mode
            switch (cContainer.data('chat-mode')) {
                case 'full':
                    // Init chat windows' height
                    initChatWindows();

                    // ..also on browser resize or orientation change
                    jQuery(window).on('resize orientationchange', function () {
                        clearTimeout(cTimeout);

                        cTimeout = setTimeout(function () {
                            initChatWindows();
                        }, 150);
                    });
                    break;
                case 'fixed':
                    // Init chat windows' height with a specific height
                    initChatWindows(cContainer.data('chat-height'));
                    break;
                case 'popup':
                    // Init chat windows' height with a specific height
                    initChatWindows(cContainer.data('chat-height'));

                    // Adjust chat container
                    cContainer.css({
                        'position': 'fixed',
                        'right': '10px',
                        'bottom': 0,
                        'display': 'inline-block',
                        'padding': 0,
                        'width': '70%',
                        'max-width': '420px',
                        'min-width': '300px',
                        'z-index': '1031'
                    });
                    break;
                default:
                    return false;
            }

            // Enable scroll lock to chat talk window
            cTalk.scrollLock('enable');

            // Init form submission
            cform.on('submit', function (e) {
                // Stop form submission
                e.preventDefault();

                // Get chat input
                var chatInput = jQuery('.js-chat-input', jQuery(this));

                // Add message
                chatAddMessage(chatInput.data('target-chat-id'), chatInput.val(), 'self', chatInput);
            });
        };

        // Init chat windows' height
        var initChatWindows = function (customHeight) {
            if (customHeight) {
                cHeight = customHeight;
            } else {
                // Calculate height
                var cHeight = lWindow.height() -
                    lHeader.outerHeight() -
                    lFooter.outerHeight() -
                    cHead.outerHeight() -
                    (parseInt(cContainer.css('padding-top')) + parseInt(cContainer.css('padding-bottom')));

                // Add a minimum height
                if (cHeight < 200) {
                    cHeight = 200;
                }
            }

            // Set height to chat windows (+ people window if exists)
            if (cPeople) {
                cPeople.css('height', cHeight);
            }

            cTalk.css('height', cHeight - cform.outerHeight());
        };

        // Add a message to a chat window
        var chatAddMessage = function (chatId, chatMsg, chatMsgLevel, chatInput) {
            // Get chat window
            var chatWindow = jQuery('.js-chat-talk[data-chat-id="' + chatId + '"]');

            // If message and chat window exists
            if (chatMsg && chatWindow.length) {
                var chatBlockClasses = 'animated fadeIn push-50-l';
                var chatMsgClasses = 'bg-gray-lighter';

                // Post it to its related window (if message level is 'self', make it stand out)
                if (chatMsgLevel === 'self') {
                    chatBlockClasses = 'animated fadeInUp push-50-r';
                    chatMsgClasses = 'bg-gray-light';
                }

                chatWindow.append('<div class="block block-rounded block-transparent push-15 ' + chatBlockClasses + '">'
                    + '<div class="block-content block-content-full block-content-mini ' + chatMsgClasses + '">'
                    + jQuery('<div />').text(chatMsg).html()
                    + '</div>'
                    + '</div>');

                // Scroll the message list to the bottom
                chatWindow.animate({scrollTop: chatWindow[0].scrollHeight}, 150);

                // If input is set, reset it
                if (chatInput) {
                    chatInput.val('');
                }
            }
        };

        // Init chat
        initChat();

        // Add Message
        $scope.addMessage = function (chatId, chatMsg, chatMsgLevel) {
            chatAddMessage(chatId, chatMsg, chatMsgLevel, false);
        };
    }
])

// Tables DataTables Controller
.controller('TablesDatatablesCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Init full DataTable, for more examples you can check out https://www.datatables.net/
        var initDataTableFull = function () {
            jQuery('.js-dataTable-full').dataTable({
                columnDefs: [{orderable: false, targets: [4]}],
                pageLength: 10,
                lengthMenu: [[5, 10, 15, 20], [5, 10, 15, 20]]
            });
        };

        // Init simple DataTable, for more examples you can check out https://www.datatables.net/
        var initDataTableSimple = function () {
            jQuery('.js-dataTable-simple').dataTable({
                columnDefs: [{orderable: false, targets: [4]}],
                pageLength: 10,
                lengthMenu: [[5, 10, 15, 20], [5, 10, 15, 20]],
                searching: false,
                oLanguage: {
                    sLengthMenu: ""
                },
                dom: "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-6'i><'col-sm-6'p>>"
            });
        };

        // DataTables Bootstrap integration
        var bsDataTables = function () {
            var DataTable = jQuery.fn.dataTable;

            // Set the defaults for DataTables init
            jQuery.extend(true, DataTable.defaults, {
                dom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-6'i><'col-sm-6'p>>",
                renderer: 'bootstrap',
                oLanguage: {
                    sLengthMenu: "_MENU_",
                    sInfo: "Showing <strong>_START_</strong>-<strong>_END_</strong> of <strong>_TOTAL_</strong>",
                    oPaginate: {
                        sPrevious: '<i class="fa fa-angle-left"></i>',
                        sNext: '<i class="fa fa-angle-right"></i>'
                    }
                }
            });

            // Default class modification
            jQuery.extend(DataTable.ext.classes, {
                sWrapper: "dataTables_wrapper form-inline dt-bootstrap",
                sFilterInput: "form-control",
                sLengthSelect: "form-control"
            });

            // Bootstrap paging button renderer
            DataTable.ext.renderer.pageButton.bootstrap = function (settings, host, idx, buttons, page, pages) {
                var api = new DataTable.Api(settings);
                var classes = settings.oClasses;
                var lang = settings.oLanguage.oPaginate;
                var btnDisplay, btnClass;

                var attach = function (container, buttons) {
                    var i, ien, node, button;
                    var clickHandler = function (e) {
                        e.preventDefault();
                        if (!jQuery(e.currentTarget).hasClass('disabled')) {
                            api.page(e.data.action).draw(false);
                        }
                    };

                    for (i = 0, ien = buttons.length; i < ien; i++) {
                        button = buttons[i];

                        if (jQuery.isArray(button)) {
                            attach(container, button);
                        }
                        else {
                            btnDisplay = '';
                            btnClass = '';

                            switch (button) {
                                case 'ellipsis':
                                    btnDisplay = '&hellip;';
                                    btnClass = 'disabled';
                                    break;

                                case 'first':
                                    btnDisplay = lang.sFirst;
                                    btnClass = button + (page > 0 ? '' : ' disabled');
                                    break;

                                case 'previous':
                                    btnDisplay = lang.sPrevious;
                                    btnClass = button + (page > 0 ? '' : ' disabled');
                                    break;

                                case 'next':
                                    btnDisplay = lang.sNext;
                                    btnClass = button + (page < pages - 1 ? '' : ' disabled');
                                    break;

                                case 'last':
                                    btnDisplay = lang.sLast;
                                    btnClass = button + (page < pages - 1 ? '' : ' disabled');
                                    break;

                                default:
                                    btnDisplay = button + 1;
                                    btnClass = page === button ?
                                        'active' : '';
                                    break;
                            }

                            if (btnDisplay) {
                                node = jQuery('<li>', {
                                    'class': classes.sPageButton + ' ' + btnClass,
                                    'aria-controls': settings.sTableId,
                                    'tabindex': settings.iTabIndex,
                                    'id': idx === 0 && typeof button === 'string' ?
                                        settings.sTableId + '_' + button :
                                        null
                                })
                                    .append(jQuery('<a>', {
                                            'href': '#'
                                        })
                                            .html(btnDisplay)
                                    )
                                    .appendTo(container);

                                settings.oApi._fnBindAction(
                                    node, {action: button}, clickHandler
                                );
                            }
                        }
                    }
                };

                attach(
                    jQuery(host).empty().html('<ul class="pagination"/>').children('ul'),
                    buttons
                );
            };

            // TableTools Bootstrap compatibility - Required TableTools 2.1+
            if (DataTable.TableTools) {
                // Set the classes that TableTools uses to something suitable for Bootstrap
                jQuery.extend(true, DataTable.TableTools.classes, {
                    "container": "DTTT btn-group",
                    "buttons": {
                        "normal": "btn btn-default",
                        "disabled": "disabled"
                    },
                    "collection": {
                        "container": "DTTT_dropdown dropdown-menu",
                        "buttons": {
                            "normal": "",
                            "disabled": "disabled"
                        }
                    },
                    "print": {
                        "info": "DTTT_print_info"
                    },
                    "select": {
                        "row": "active"
                    }
                });

                // Have the collection use a bootstrap compatible drop down
                jQuery.extend(true, DataTable.TableTools.DEFAULTS.oTags, {
                    "collection": {
                        "container": "ul",
                        "button": "li",
                        "liner": "a"
                    }
                });
            }
        };

        // Init Datatables
        bsDataTables();
        initDataTableSimple();
        initDataTableFull();
    }
])

// Forms Pickers and More Controller
.controller('FormsPickersMoreCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Init jQuery AutoComplete example, for more examples you can check out https://github.com/Pixabay/jQuery-autoComplete
        var initAutoComplete = function () {
            // Init autocomplete functionality
            jQuery('.js-autocomplete').autoComplete({
                minChars: 1,
                source: function (term, suggest) {
                    term = term.toLowerCase();

                    var countriesList = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];
                    var suggestions = [];

                    for (i = 0; i < countriesList.length; i++) {
                        if (~countriesList[i].toLowerCase().indexOf(term)) suggestions.push(countriesList[i]);
                    }

                    suggest(suggestions);
                }
            });
        };

        // Init jQuery AutoComplete example
        initAutoComplete();
    }
])

// Form Editors Controller
.controller('FormsEditorsCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Disable auto init when contenteditable property is set to true
        CKEDITOR.disableAutoInline = true;

        // Init inline text editor
        if (jQuery('#js-ckeditor-inline').length) {
            CKEDITOR.inline('js-ckeditor-inline');
        }

        // Init full text editor
        if (jQuery('#js-ckeditor').length) {
            CKEDITOR.replace('js-ckeditor');
        }
    }
])

// Forms Validation Controller
.controller('FormsValidationCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Init Bootstrap Forms Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
        var initValidationBootstrap = function () {
            jQuery('.js-validation-bootstrap').validate({
                ignore: [],
                errorClass: 'help-block animated fadeInDown',
                errorElement: 'div',
                errorPlacement: function (error, e) {
                    jQuery(e).parents('.form-group > div').append(error);
                },
                highlight: function (e) {
                    var elem = jQuery(e);

                    elem.closest('.form-group').removeClass('has-error').addClass('has-error');
                    elem.closest('.help-block').remove();
                },
                success: function (e) {
                    var elem = jQuery(e);

                    elem.closest('.form-group').removeClass('has-error');
                    elem.closest('.help-block').remove();
                },
                rules: {
                    'val-username': {
                        required: true,
                        minlength: 3
                    },
                    'val-email': {
                        required: true,
                        email: true
                    },
                    'val-password': {
                        required: true,
                        minlength: 5
                    },
                    'val-confirm-password': {
                        required: true,
                        equalTo: '#val-password'
                    },
                    'val-select2': {
                        required: true
                    },
                    'val-select2-multiple': {
                        required: true,
                        minlength: 2
                    },
                    'val-suggestions': {
                        required: true,
                        minlength: 5
                    },
                    'val-skill': {
                        required: true
                    },
                    'val-currency': {
                        required: true,
                        currency: ['$', true]
                    },
                    'val-website': {
                        required: true,
                        url: true
                    },
                    'val-phoneus': {
                        required: true,
                        phoneUS: true
                    },
                    'val-digits': {
                        required: true,
                        digits: true
                    },
                    'val-number': {
                        required: true,
                        number: true
                    },
                    'val-range': {
                        required: true,
                        range: [1, 5]
                    },
                    'val-terms': {
                        required: true
                    }
                },
                messages: {
                    'val-username': {
                        required: 'Please enter a username',
                        minlength: 'Your username must consist of at least 3 characters'
                    },
                    'val-email': 'Please enter a valid email address',
                    'val-password': {
                        required: 'Please provide a password',
                        minlength: 'Your password must be at least 5 characters long'
                    },
                    'val-confirm-password': {
                        required: 'Please provide a password',
                        minlength: 'Your password must be at least 5 characters long',
                        equalTo: 'Please enter the same password as above'
                    },
                    'val-select2': 'Please select a value!',
                    'val-select2-multiple': 'Please select at least 2 values!',
                    'val-suggestions': 'What can we do to become better?',
                    'val-skill': 'Please select a skill!',
                    'val-currency': 'Please enter a price!',
                    'val-website': 'Please enter your website!',
                    'val-phoneus': 'Please enter a US phone!',
                    'val-digits': 'Please enter only digits!',
                    'val-number': 'Please enter a number!',
                    'val-range': 'Please enter a number between 1 and 5!',
                    'val-terms': 'You must agree to the service terms!'
                }
            });
        };

        // Init Material Forms Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
        var initValidationMaterial = function () {
            jQuery('.js-validation-material').validate({
                ignore: [],
                errorClass: 'help-block text-right animated fadeInDown',
                errorElement: 'div',
                errorPlacement: function (error, e) {
                    jQuery(e).parents('.form-group > div').append(error);
                },
                highlight: function (e) {
                    var elem = jQuery(e);

                    elem.closest('.form-group').removeClass('has-error').addClass('has-error');
                    elem.closest('.help-block').remove();
                },
                success: function (e) {
                    var elem = jQuery(e);

                    elem.closest('.form-group').removeClass('has-error');
                    elem.closest('.help-block').remove();
                },
                rules: {
                    'val-username2': {
                        required: true,
                        minlength: 3
                    },
                    'val-email2': {
                        required: true,
                        email: true
                    },
                    'val-password2': {
                        required: true,
                        minlength: 5
                    },
                    'val-confirm-password2': {
                        required: true,
                        equalTo: '#val-password2'
                    },
                    'val-select22': {
                        required: true
                    },
                    'val-select2-multiple2': {
                        required: true,
                        minlength: 2
                    },
                    'val-suggestions2': {
                        required: true,
                        minlength: 5
                    },
                    'val-skill2': {
                        required: true
                    },
                    'val-currency2': {
                        required: true,
                        currency: ['$', true]
                    },
                    'val-website2': {
                        required: true,
                        url: true
                    },
                    'val-phoneus2': {
                        required: true,
                        phoneUS: true
                    },
                    'val-digits2': {
                        required: true,
                        digits: true
                    },
                    'val-number2': {
                        required: true,
                        number: true
                    },
                    'val-range2': {
                        required: true,
                        range: [1, 5]
                    },
                    'val-terms2': {
                        required: true
                    }
                },
                messages: {
                    'val-username2': {
                        required: 'Please enter a username',
                        minlength: 'Your username must consist of at least 3 characters'
                    },
                    'val-email2': 'Please enter a valid email address',
                    'val-password2': {
                        required: 'Please provide a password',
                        minlength: 'Your password must be at least 5 characters long'
                    },
                    'val-confirm-password2': {
                        required: 'Please provide a password',
                        minlength: 'Your password must be at least 5 characters long',
                        equalTo: 'Please enter the same password as above'
                    },
                    'val-select22': 'Please select a value!',
                    'val-select2-multiple2': 'Please select at least 2 values!',
                    'val-suggestions2': 'What can we do to become better?',
                    'val-skill2': 'Please select a skill!',
                    'val-currency2': 'Please enter a price!',
                    'val-website2': 'Please enter your website!',
                    'val-phoneus2': 'Please enter a US phone!',
                    'val-digits2': 'Please enter only digits!',
                    'val-number2': 'Please enter a number!',
                    'val-range2': 'Please enter a number between 1 and 5!',
                    'val-terms2': 'You must agree to the service terms!'
                }
            });
        };

        // Init Bootstrap Forms Validation
        initValidationBootstrap();

        // Init Material Forms Validation
        initValidationMaterial();

        // Init Validation on Select2 change
        jQuery('[data-js-select2]').on('change', function () {
            jQuery(this).valid();
        });
    }
])

// Forms Wizard Controller
.controller('FormsWizardCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Init simple wizard, for more examples you can check out http://vadimg.com/twitter-bootstrap-wizard-example/
        var initWizardSimple = function () {
            jQuery('.js-wizard-simple').bootstrapWizard({
                'tabClass': '',
                'firstSelector': '.wizard-first',
                'previousSelector': '.wizard-prev',
                'nextSelector': '.wizard-next',
                'lastSelector': '.wizard-last',
                'onTabShow': function (tab, navigation, index) {
                    var total = navigation.find('li').length;
                    var current = index + 1;
                    var percent = (current / total) * 100;

                    // Get vital wizard elements
                    var wizard = navigation.parents('.block');
                    var progress = wizard.find('.wizard-progress > .progress-bar');
                    var btnPrev = wizard.find('.wizard-prev');
                    var btnNext = wizard.find('.wizard-next');
                    var btnFinish = wizard.find('.wizard-finish');

                    // Update progress bar if there is one
                    if (progress) {
                        progress.css({width: percent + '%'});
                    }

                    // If it's the last tab then hide the last button and show the finish instead
                    if (current >= total) {
                        btnNext.hide();
                        btnFinish.show();
                    } else {
                        btnNext.show();
                        btnFinish.hide();
                    }
                }
            });
        };

        // Init wizards with validation, for more examples you can check out http://vadimg.com/twitter-bootstrap-wizard-example/
        var initWizardValidation = function () {
            // Get forms
            var form1 = jQuery('.js-form1');
            var form2 = jQuery('.js-form2');

            // Prevent forms from submitting on enter key press
            form1.add(form2).on('keyup keypress', function (e) {
                var code = e.keyCode || e.which;

                if (code === 13) {
                    e.preventDefault();
                    return false;
                }
            });

            // Init form validation on classic wizard form
            var validator1 = form1.validate({
                errorClass: 'help-block animated fadeInDown',
                errorElement: 'div',
                errorPlacement: function (error, e) {
                    jQuery(e).parents('.form-group > div').append(error);
                },
                highlight: function (e) {
                    jQuery(e).closest('.form-group').removeClass('has-error').addClass('has-error');
                    jQuery(e).closest('.help-block').remove();
                },
                success: function (e) {
                    jQuery(e).closest('.form-group').removeClass('has-error');
                    jQuery(e).closest('.help-block').remove();
                },
                rules: {
                    'validation-classic-firstname': {
                        required: true,
                        minlength: 2
                    },
                    'validation-classic-lastname': {
                        required: true,
                        minlength: 2
                    },
                    'validation-classic-email': {
                        required: true,
                        email: true
                    },
                    'validation-classic-details': {
                        required: true,
                        minlength: 5
                    },
                    'validation-classic-city': {
                        required: true
                    },
                    'validation-classic-skills': {
                        required: true
                    },
                    'validation-classic-terms': {
                        required: true
                    }
                },
                messages: {
                    'validation-classic-firstname': {
                        required: 'Please enter a firstname',
                        minlength: 'Your firtname must consist of at least 2 characters'
                    },
                    'validation-classic-lastname': {
                        required: 'Please enter a lastname',
                        minlength: 'Your lastname must consist of at least 2 characters'
                    },
                    'validation-classic-email': 'Please enter a valid email address',
                    'validation-classic-details': 'Let us know a few thing about yourself',
                    'validation-classic-skills': 'Please select a skill!',
                    'validation-classic-terms': 'You must agree to the service terms!'
                }
            });

            // Init form validation on the other wizard form
            var validator2 = form2.validate({
                errorClass: 'help-block text-right animated fadeInDown',
                errorElement: 'div',
                errorPlacement: function (error, e) {
                    jQuery(e).parents('.form-group > div').append(error);
                },
                highlight: function (e) {
                    jQuery(e).closest('.form-group').removeClass('has-error').addClass('has-error');
                    jQuery(e).closest('.help-block').remove();
                },
                success: function (e) {
                    jQuery(e).closest('.form-group').removeClass('has-error');
                    jQuery(e).closest('.help-block').remove();
                },
                rules: {
                    'validation-firstname': {
                        required: true,
                        minlength: 2
                    },
                    'validation-lastname': {
                        required: true,
                        minlength: 2
                    },
                    'validation-email': {
                        required: true,
                        email: true
                    },
                    'validation-details': {
                        required: true,
                        minlength: 5
                    },
                    'validation-city': {
                        required: true
                    },
                    'validation-skills': {
                        required: true
                    },
                    'validation-terms': {
                        required: true
                    }
                },
                messages: {
                    'validation-firstname': {
                        required: 'Please enter a firstname',
                        minlength: 'Your firtname must consist of at least 2 characters'
                    },
                    'validation-lastname': {
                        required: 'Please enter a lastname',
                        minlength: 'Your lastname must consist of at least 2 characters'
                    },
                    'validation-email': 'Please enter a valid email address',
                    'validation-details': 'Let us know a few thing about yourself',
                    'validation-skills': 'Please select a skill!',
                    'validation-terms': 'You must agree to the service terms!'
                }
            });

            // Init classic wizard with validation
            jQuery('.js-wizard-classic-validation').bootstrapWizard({
                'tabClass': '',
                'previousSelector': '.wizard-prev',
                'nextSelector': '.wizard-next',
                'onTabShow': function (tab, nav, index) {
                    var total = nav.find('li').length;
                    var current = index + 1;

                    // Get vital wizard elements
                    var wizard = nav.parents('.block');
                    var btnNext = wizard.find('.wizard-next');
                    var btnFinish = wizard.find('.wizard-finish');

                    // If it's the last tab then hide the last button and show the finish instead
                    if (current >= total) {
                        btnNext.hide();
                        btnFinish.show();
                    } else {
                        btnNext.show();
                        btnFinish.hide();
                    }
                },
                'onNext': function (tab, navigation, index) {
                    var valid = form1.valid();

                    if (!valid) {
                        validator1.focusInvalid();

                        return false;
                    }
                },
                onTabClick: function (tab, navigation, index) {
                    return false;
                }
            });

            // Init wizard with validation
            jQuery('.js-wizard-validation').bootstrapWizard({
                'tabClass': '',
                'previousSelector': '.wizard-prev',
                'nextSelector': '.wizard-next',
                'onTabShow': function (tab, nav, index) {
                    var total = nav.find('li').length;
                    var current = index + 1;

                    // Get vital wizard elements
                    var wizard = nav.parents('.block');
                    var btnNext = wizard.find('.wizard-next');
                    var btnFinish = wizard.find('.wizard-finish');

                    // If it's the last tab then hide the last button and show the finish instead
                    if (current >= total) {
                        btnNext.hide();
                        btnFinish.show();
                    } else {
                        btnNext.show();
                        btnFinish.hide();
                    }
                },
                'onNext': function (tab, navigation, index) {
                    var valid = form2.valid();

                    if (!valid) {
                        validator2.focusInvalid();

                        return false;
                    }
                },
                onTabClick: function (tab, navigation, index) {
                    return false;
                }
            });
        };

        // Init simple wizard
        initWizardSimple();

        // Init wizards with validation
        initWizardValidation();
    }
])

// Components Charts Controller
.controller('CompChartsCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
        var initChartsChartJS = function () {
            // Get Chart Containers
            var chartLinesCon = jQuery('.js-chartjs-lines')[0].getContext('2d');
            var chartBarsCon = jQuery('.js-chartjs-bars')[0].getContext('2d');
            var chartRadarCon = jQuery('.js-chartjs-radar')[0].getContext('2d');

            // Set Chart and Chart Data variables
            var chartLines, chartBars, chartRadar;
            var chartLinesBarsRadarData;

            // Set global chart options
            var globalOptions = {
                scaleFontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                scaleFontColor: '#999',
                scaleFontStyle: '600',
                tooltipTitleFontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                tooltipCornerRadius: 3,
                maintainAspectRatio: false,
                responsive: true
            };

            // Lines/Bar/Radar Chart Data
            var chartLinesBarsRadarData = {
                labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                datasets: [
                    {
                        label: 'Last Week',
                        fillColor: 'rgba(220,220,220,.3)',
                        strokeColor: 'rgba(220,220,220,1)',
                        pointColor: 'rgba(220,220,220,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [30, 32, 40, 45, 43, 38, 55]
                    },
                    {
                        label: 'This Week',
                        fillColor: 'rgba(171, 227, 125, .3)',
                        strokeColor: 'rgba(171, 227, 125, 1)',
                        pointColor: 'rgba(171, 227, 125, 1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(171, 227, 125, 1)',
                        data: [15, 16, 20, 25, 23, 25, 32]
                    }
                ]
            };

            // Init Charts
            chartLines = new Chart(chartLinesCon).Line(chartLinesBarsRadarData, globalOptions);
            chartBars = new Chart(chartBarsCon).Bar(chartLinesBarsRadarData, globalOptions);
            chartRadar = new Chart(chartRadarCon).Radar(chartLinesBarsRadarData, globalOptions);
        };

        // jQuery Sparkline Charts, for more examples you can check out http://omnipotent.net/jquery.sparkline/#s-docs
        var initChartsSparkline = function () {
            // Bar Charts
            var barOptions = {
                type: 'bar',
                barWidth: 8,
                barSpacing: 6,
                height: '70px',
                barColor: '#fadb7d',
                tooltipPrefix: '',
                tooltipSuffix: ' Tickets',
                tooltipFormat: '{{prefix}}{{value}}{{suffix}}'
            };
            jQuery('.js-slc-bar1').sparkline('html', barOptions);

            barOptions['barColor'] = '#abe37d';
            barOptions['tooltipPrefix'] = '$ ';
            barOptions['tooltipSuffix'] = '';
            jQuery('.js-slc-bar2').sparkline('html', barOptions);

            barOptions['barColor'] = '#faad7d';
            barOptions['tooltipPrefix'] = '';
            barOptions['tooltipSuffix'] = ' Sales';
            jQuery('.js-slc-bar3').sparkline('html', barOptions);

            // Line Charts
            var lineOptions = {
                type: 'line',
                width: '120px',
                height: '70px',
                tooltipOffsetX: -25,
                tooltipOffsetY: 20,
                lineColor: '#fadb7d',
                fillColor: '#fadb7d',
                spotColor: '#777777',
                minSpotColor: '#777777',
                maxSpotColor: '#777777',
                highlightSpotColor: '#777777',
                highlightLineColor: '#777777',
                spotRadius: 2,
                tooltipPrefix: '',
                tooltipSuffix: ' Tickets',
                tooltipFormat: '{{prefix}}{{y}}{{suffix}}'
            };
            jQuery('.js-slc-line1').sparkline('html', lineOptions);

            lineOptions['lineColor'] = '#abe37d';
            lineOptions['fillColor'] = '#abe37d';
            lineOptions['tooltipPrefix'] = '$ ';
            lineOptions['tooltipSuffix'] = '';
            jQuery('.js-slc-line2').sparkline('html', lineOptions);

            lineOptions['lineColor'] = '#faad7d';
            lineOptions['fillColor'] = '#faad7d';
            lineOptions['tooltipPrefix'] = '';
            lineOptions['tooltipSuffix'] = ' Sales';
            jQuery('.js-slc-line3').sparkline('html', lineOptions);

            // Pie Charts
            var pieCharts = {
                type: 'pie',
                width: '50px',
                height: '50px',
                sliceColors: ['#fadb7d', '#faad7d', '#75b0eb', '#abe37d'],
                tooltipPrefix: '',
                tooltipSuffix: ' Tickets',
                tooltipFormat: '{{prefix}}{{value}}{{suffix}}'
            };
            jQuery('.js-slc-pie1').sparkline('html', pieCharts);

            pieCharts['tooltipPrefix'] = '$ ';
            pieCharts['tooltipSuffix'] = '';
            jQuery('.js-slc-pie2').sparkline('html', pieCharts);

            pieCharts['tooltipPrefix'] = '';
            pieCharts['tooltipSuffix'] = ' Sales';
            jQuery('.js-slc-pie3').sparkline('html', pieCharts);

            // Tristate Charts
            var tristateOptions = {
                type: 'tristate',
                barWidth: 8,
                barSpacing: 6,
                height: '80px',
                posBarColor: '#abe37d',
                negBarColor: '#faad7d'
            };
            jQuery('.js-slc-tristate1').sparkline('html', tristateOptions);
            jQuery('.js-slc-tristate2').sparkline('html', tristateOptions);
            jQuery('.js-slc-tristate3').sparkline('html', tristateOptions);
        };

        // Randomize Easy Pie Chart values
        var initRandomEasyPieChart = function () {
            jQuery('.js-pie-randomize').on('click', function () {
                jQuery(this)
                    .parents('.block')
                    .find('.pie-chart')
                    .each(function () {
                        var random = Math.floor((Math.random() * 100) + 1);

                        jQuery(this)
                            .data('easyPieChart')
                            .update(random);
                    });
            });
        };

        // Flot charts, for more examples you can check out http://www.flotcharts.org/flot/examples/
        var initChartsFlot = function () {
            // Get the elements where we will attach the charts
            var flotLines = jQuery('.js-flot-lines');
            var flotStacked = jQuery('.js-flot-stacked');
            var flotLive = jQuery('.js-flot-live');
            var flotPie = jQuery('.js-flot-pie');
            var flotBars = jQuery('.js-flot-bars');

            // Demo Data
            var dataEarnings = [[1, 2500], [2, 2300], [3, 3200], [4, 2500], [5, 4500], [6, 2800], [7, 3900], [8, 3100], [9, 4600], [10, 3200], [11, 4200], [12, 5700]];
            var dataSales = [[1, 1100], [2, 700], [3, 1300], [4, 900], [5, 1900], [6, 950], [7, 1700], [8, 1250], [9, 1800], [10, 1300], [11, 1750], [12, 2900]];

            var dataSalesBefore = [[1, 500], [4, 390], [7, 1000], [10, 600], [13, 800], [16, 1050], [19, 1200], [22, 750], [25, 980], [28, 900], [31, 1350], [34, 1200]];
            var dataSalesAfter = [[2, 650], [5, 600], [8, 1400], [11, 900], [14, 1300], [17, 1200], [20, 1420], [23, 1650], [26, 1300], [29, 1120], [32, 1550], [35, 1650]];

            var dataMonths = [[1, 'Jan'], [2, 'Feb'], [3, 'Mar'], [4, 'Apr'], [5, 'May'], [6, 'Jun'], [7, 'Jul'], [8, 'Aug'], [9, 'Sep'], [10, 'Oct'], [11, 'Nov'], [12, 'Dec']];
            var dataMonthsBars = [[2, 'Jan'], [5, 'Feb'], [8, 'Mar'], [11, 'Apr'], [14, 'May'], [17, 'Jun'], [20, 'Jul'], [23, 'Aug'], [26, 'Sep'], [29, 'Oct'], [32, 'Nov'], [35, 'Dec']];

            // Init lines chart
            jQuery.plot(flotLines,
                [
                    {
                        label: 'Earnings',
                        data: dataEarnings,
                        lines: {
                            show: true,
                            fill: true,
                            fillColor: {
                                colors: [{opacity: .7}, {opacity: .7}]
                            }
                        },
                        points: {
                            show: true,
                            radius: 6
                        }
                    },
                    {
                        label: 'Sales',
                        data: dataSales,
                        lines: {
                            show: true,
                            fill: true,
                            fillColor: {
                                colors: [{opacity: .5}, {opacity: .5}]
                            }
                        },
                        points: {
                            show: true,
                            radius: 6
                        }
                    }
                ],
                {
                    colors: ['#abe37d', '#333333'],
                    legend: {
                        show: true,
                        position: 'nw',
                        backgroundOpacity: 0
                    },
                    grid: {
                        borderWidth: 0,
                        hoverable: true,
                        clickable: true
                    },
                    yaxis: {
                        tickColor: '#ffffff',
                        ticks: 3
                    },
                    xaxis: {
                        ticks: dataMonths,
                        tickColor: '#f5f5f5'
                    }
                }
            );

            // Creating and attaching a tooltip to the classic chart
            var previousPoint = null, ttlabel = null;
            flotLines.bind('plothover', function (event, pos, item) {
                if (item) {
                    if (previousPoint !== item.dataIndex) {
                        previousPoint = item.dataIndex;

                        jQuery('.js-flot-tooltip').remove();
                        var x = item.datapoint[0], y = item.datapoint[1];

                        if (item.seriesIndex === 0) {
                            ttlabel = '$ <strong>' + y + '</strong>';
                        } else if (item.seriesIndex === 1) {
                            ttlabel = '<strong>' + y + '</strong> sales';
                        } else {
                            ttlabel = '<strong>' + y + '</strong> tickets';
                        }

                        jQuery('<div class="js-flot-tooltip flot-tooltip">' + ttlabel + '</div>')
                            .css({top: item.pageY - 45, left: item.pageX + 5}).appendTo("body").show();
                    }
                }
                else {
                    jQuery('.js-flot-tooltip').remove();
                    previousPoint = null;
                }
            });

            // Stacked Chart
            jQuery.plot(flotStacked,
                [
                    {
                        label: 'Sales',
                        data: dataSales
                    },
                    {
                        label: 'Earnings',
                        data: dataEarnings
                    }
                ],
                {
                    colors: ['#faad7d', '#fadb7d'],
                    series: {
                        stack: true,
                        lines: {
                            show: true,
                            fill: true
                        }
                    },
                    lines: {
                        show: true,
                        lineWidth: 0,
                        fill: true,
                        fillColor: {
                            colors: [{opacity: 1}, {opacity: 1}]
                        }
                    },
                    legend: {
                        show: true,
                        position: 'nw',
                        sorted: true,
                        backgroundOpacity: 0
                    },
                    grid: {
                        borderWidth: 0
                    },
                    yaxis: {
                        tickColor: '#ffffff',
                        ticks: 3
                    },
                    xaxis: {
                        ticks: dataMonths,
                        tickColor: '#f5f5f5'
                    }
                }
            );

            // Live Chart
            var dataLive = [];

            function getRandomData() { // Random data generator

                if (dataLive.length > 0)
                    dataLive = dataLive.slice(1);

                while (dataLive.length < 300) {
                    var prev = dataLive.length > 0 ? dataLive[dataLive.length - 1] : 50;
                    var y = prev + Math.random() * 10 - 5;
                    if (y < 0)
                        y = 0;
                    if (y > 100)
                        y = 100;
                    dataLive.push(y);
                }

                var res = [];
                for (var i = 0; i < dataLive.length; ++i)
                    res.push([i, dataLive[i]]);

                // Show live chart info
                jQuery('.js-flot-live-info').html(y.toFixed(0) + '%');

                return res;
            }

            function updateChartLive() { // Update live chart
                chartLive.setData([getRandomData()]);
                chartLive.draw();
                setTimeout(updateChartLive, 70);
            }

            var chartLive = jQuery.plot(flotLive, // Init live chart
                [{data: getRandomData()}],
                {
                    series: {
                        shadowSize: 0
                    },
                    lines: {
                        show: true,
                        lineWidth: 2,
                        fill: true,
                        fillColor: {
                            colors: [{opacity: .2}, {opacity: .2}]
                        }
                    },
                    colors: ['#75b0eb'],
                    grid: {
                        borderWidth: 0,
                        color: '#aaaaaa'
                    },
                    yaxis: {
                        show: true,
                        min: 0,
                        max: 110
                    },
                    xaxis: {
                        show: false
                    }
                }
            );

            updateChartLive(); // Start getting new data

            // Bars Chart
            jQuery.plot(flotBars,
                [
                    {
                        label: 'Sales Before',
                        data: dataSalesBefore,
                        bars: {
                            show: true,
                            lineWidth: 0,
                            fillColor: {
                                colors: [{opacity: 1}, {opacity: 1}]
                            }
                        }
                    },
                    {
                        label: 'Sales After',
                        data: dataSalesAfter,
                        bars: {
                            show: true,
                            lineWidth: 0,
                            fillColor: {
                                colors: [{opacity: 1}, {opacity: 1}]
                            }
                        }
                    }
                ],
                {
                    colors: ['#faad7d', '#fadb7d'],
                    legend: {
                        show: true,
                        position: 'nw',
                        backgroundOpacity: 0
                    },
                    grid: {
                        borderWidth: 0
                    },
                    yaxis: {
                        ticks: 3,
                        tickColor: '#f5f5f5'
                    },
                    xaxis: {
                        ticks: dataMonthsBars,
                        tickColor: '#f5f5f5'
                    }
                }
            );

            // Pie Chart
            jQuery.plot(flotPie,
                [
                    {
                        label: 'Sales',
                        data: 22
                    },
                    {
                        label: 'Tickets',
                        data: 22
                    },
                    {
                        label: 'Earnings',
                        data: 56
                    }
                ],
                {
                    colors: ['#fadb7d', '#75b0eb', '#abe37d'],
                    legend: {show: false},
                    series: {
                        pie: {
                            show: true,
                            radius: 1,
                            label: {
                                show: true,
                                radius: 2 / 3,
                                formatter: function (label, pieSeries) {
                                    return '<div class="flot-pie-label">' + label + '<br>' + Math.round(pieSeries.percent) + '%</div>';
                                },
                                background: {
                                    opacity: .75,
                                    color: '#000000'
                                }
                            }
                        }
                    }
                }
            );
        };

        // Init all charts
        initChartsChartJS();
        initChartsSparkline();
        initChartsFlot();

        // Randomize Easy Pie values functionality
        initRandomEasyPieChart();
    }
])

// Components Calendar Controller
.controller('CompCalendarCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Add new event in the event list
        var addEvent = function () {
            var eventInput = jQuery('.js-add-event');
            var eventInputVal = '';

            // When the add event form is submitted
            jQuery('.js-form-add-event').on('submit', function () {
                eventInputVal = eventInput.prop('value'); // Get input value

                // Check if the user entered something
                if (eventInputVal) {
                    // Add it to the events list
                    jQuery('.js-events')
                        .prepend('<li class="animated fadeInDown">' +
                            jQuery('<div />').text(eventInputVal).html() +
                            '</li>');

                    // Clear input field
                    eventInput.prop('value', '');

                    // Re-Init Events
                    initEvents();
                }

                return false;
            });
        };

        // Init drag and drop event functionality
        var initEvents = function () {
            jQuery('.js-events')
                .find('li')
                .each(function () {
                    var event = jQuery(this);

                    // create an Event Object
                    var eventObject = {
                        title: jQuery.trim(event.text()),
                        color: event.css('background-color')
                    };

                    // store the Event Object in the DOM element so we can get to it later
                    jQuery(this).data('eventObject', eventObject);

                    // make the event draggable using jQuery UI
                    jQuery(this).draggable({
                        zIndex: 999,
                        revert: true,
                        revertDuration: 0
                    });
                });
        };

        // Init FullCalendar
        var initCalendar = function () {
            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            jQuery('.js-calendar').fullCalendar({
                firstDay: 1,
                editable: true,
                droppable: true,
                header: {
                    left: 'title',
                    right: 'prev,next month,agendaWeek,agendaDay'
                },
                drop: function (date, allDay) { // this function is called when something is dropped
                    // retrieve the dropped element's stored Event Object
                    var originalEventObject = jQuery(this).data('eventObject');

                    // we need to copy it, so that multiple events don't have a reference to the same object
                    var copiedEventObject = jQuery.extend({}, originalEventObject);

                    // assign it the date that was reported
                    copiedEventObject.start = date;

                    // render the event on the calendar
                    // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                    jQuery('.js-calendar').fullCalendar('renderEvent', copiedEventObject, true);

                    // remove the element from the "Draggable Events" list
                    jQuery(this).remove();
                },
                events: [
                    {
                        title: 'Free day',
                        start: new Date(y, m, 1),
                        allDay: true,
                        color: '#faeab9'
                    },
                    {
                        title: 'Skype Meeting',
                        start: new Date(y, m, 2)
                    },
                    {
                        title: 'Secret Project',
                        start: new Date(y, m, 5),
                        end: new Date(y, m, 8),
                        allDay: true,
                        color: '#fac5a5'
                    },
                    {
                        title: 'Work',
                        start: new Date(y, m, 9),
                        end: new Date(y, m, 11),
                        allDay: true,
                        color: '#fac5a5'
                    },
                    {
                        id: 999,
                        title: 'Biking (repeated)',
                        start: new Date(y, m, d - 3, 15, 0)
                    },
                    {
                        id: 999,
                        title: 'Biking (repeated)',
                        start: new Date(y, m, d + 2, 15, 0)
                    },
                    {
                        title: 'Landing Template',
                        start: new Date(y, m, d - 1),
                        end: new Date(y, m, d - 1),
                        allDay: true,
                        color: '#faeab9'
                    },
                    {
                        title: 'Lunch Meeting',
                        start: new Date(y, m, d + 5, 14, 00),
                        color: '#fac5a5'
                    },
                    {
                        title: 'Admin Template',
                        start: new Date(y, m, d, 9, 0),
                        end: new Date(y, m, d, 12, 0),
                        allDay: true,
                        color: '#faeab9'
                    },
                    {
                        title: 'Party',
                        start: new Date(y, m, 15),
                        end: new Date(y, m, 16),
                        allDay: true,
                        color: '#faeab9'
                    },
                    {
                        title: 'Reading',
                        start: new Date(y, m, d + 8, 21, 0),
                        end: new Date(y, m, d + 8, 23, 30),
                        allDay: true
                    },
                    {
                        title: 'Follow me on Twitter',
                        start: new Date(y, m, 23),
                        end: new Date(y, m, 25),
                        allDay: true,
                        url: 'http://twitter.com/pixelcave',
                        color: '#32ccfe'
                    }
                ]
            });
        };

        // Add Event functionality
        addEvent();

        // FullCalendar, for more examples you can check out http://fullcalendar.io/
        initEvents();
        initCalendar();
    }
])

// Components Syntax Highlighting Controller
.controller('CompSyntaxHighlightingCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Init HighlightJS
        hljs.initHighlighting();
    }
])

// Components Rating Controller
.controller('CompRatingCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // jQuery Raty, for more examples you can check out https://github.com/wbotelhos/raty

        // Init Rating
        var initRating = function () {
            // Set Default options
            jQuery.fn.raty.defaults.starType = 'i';
            jQuery.fn.raty.defaults.hints = ['Bad', 'Poor', 'Regular', 'Good', 'Gorgeous'];

            // Init Raty on .js-rating class
            jQuery('.js-rating').each(function () {
                var ratingEl = jQuery(this);

                ratingEl.raty({
                    score: ratingEl.data('score') || 0,
                    number: ratingEl.data('number') || 5,
                    cancel: ratingEl.data('cancel') || false,
                    target: ratingEl.data('target') || false,
                    targetScore: ratingEl.data('target-score') || false,
                    precision: ratingEl.data('precision') || false,
                    cancelOff: ratingEl.data('cancel-off') || 'fa fa-fw fa-times text-danger',
                    cancelOn: ratingEl.data('cancel-on') || 'fa fa-fw fa-times',
                    starHalf: ratingEl.data('star-half') || 'fa fa-fw fa-star-half-o text-warning',
                    starOff: ratingEl.data('star-off') || 'fa fa-fw fa-star text-gray',
                    starOn: ratingEl.data('star-on') || 'fa fa-fw fa-star text-warning',
                    click: function (score, evt) {
                        // Here you could add your logic on rating click
                        // console.log('ID: ' + this.id + "\nscore: " + score + "\nevent: " + evt);
                    }
                });
            });
        };

        // Init all Ratings
        initRating();
    }
])

// Components Treeview Controller
.controller('CompTreeviewCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Bootstrap Tree View, for more examples you can check out https://github.com/jonmiles/bootstrap-treeview

        // Init Tree Views
        var initTreeViews = function () {
            // Set default example tree data for all Tree Views
            var treeData = [
                {
                    text: 'Bootstrap',
                    href: '#parent1',
                    tags: ['4'],
                    nodes: [
                        {
                            text: 'eLearning',
                            href: '#child1',
                            tags: ['2'],
                            nodes: [
                                {
                                    text: 'Code',
                                    href: '#grandchild1'
                                },
                                {
                                    text: 'Tutorials',
                                    href: '#grandchild2'
                                }
                            ]
                        },
                        {
                            text: 'Templates',
                            href: '#child2'
                        },
                        {
                            text: 'CSS',
                            href: '#child3',
                            tags: ['2'],
                            nodes: [
                                {
                                    text: 'Less',
                                    href: '#grandchild3'
                                },
                                {
                                    text: 'SaSS',
                                    href: '#grandchild4'
                                }
                            ]
                        }
                    ]
                },
                {
                    text: 'Design',
                    href: '#parent3'
                },
                {
                    text: 'Coding',
                    href: '#parent4'
                },
                {
                    text: 'Marketing',
                    href: '#parent5'
                }
            ];

            // Init Simple Tree
            jQuery('.js-tree-simple').treeview({
                data: treeData,
                color: '#555',
                expandIcon: 'fa fa-plus',
                collapseIcon: 'fa fa-minus',
                onhoverColor: '#f9f9f9',
                selectedColor: '#555',
                selectedBackColor: '#f1f1f1',
                showBorder: false,
                levels: 3
            });

            // Init Icons Tree
            jQuery('.js-tree-icons').treeview({
                data: treeData,
                color: '#555',
                expandIcon: 'fa fa-plus',
                collapseIcon: 'fa fa-minus',
                nodeIcon: 'fa fa-folder text-primary',
                onhoverColor: '#f9f9f9',
                selectedColor: '#555',
                selectedBackColor: '#f1f1f1',
                showBorder: false,
                levels: 3
            });

            // Init Alternative Icons Tree
            jQuery('.js-tree-icons-alt').treeview({
                data: treeData,
                color: '#555',
                expandIcon: 'fa fa-angle-down',
                collapseIcon: 'fa fa-angle-up',
                nodeIcon: 'fa fa-file-o text-city',
                onhoverColor: '#f9f9f9',
                selectedColor: '#555',
                selectedBackColor: '#f1f1f1',
                showBorder: false,
                levels: 3
            });

            // Init Badges Tree
            jQuery('.js-tree-badges').treeview({
                data: treeData,
                color: '#555',
                expandIcon: 'fa fa-plus',
                collapseIcon: 'fa fa-minus',
                nodeIcon: 'fa fa-folder text-primary',
                onhoverColor: '#f9f9f9',
                selectedColor: '#555',
                selectedBackColor: '#f1f1f1',
                showTags: true,
                levels: 3
            });

            // Init Collapsed Tree
            jQuery('.js-tree-collapsed').treeview({
                data: treeData,
                color: '#555',
                expandIcon: 'fa fa-plus',
                collapseIcon: 'fa fa-minus',
                nodeIcon: 'fa fa-folder text-primary-light',
                onhoverColor: '#f9f9f9',
                selectedColor: '#555',
                selectedBackColor: '#f1f1f1',
                showTags: true,
                levels: 1
            });

            // Set example JSON data for JSON Tree View
            var treeDataJson = '[' +
                '{' +
                '"text": "Bootstrap",' +
                '"nodes": [' +
                '{' +
                '"text": "eLearning",' +
                '"nodes": [' +
                '{' +
                '"text": "Code"' +
                '},' +
                '{' +
                '"text": "Tutorials"' +
                '}' +
                ']' +
                '},' +
                '{' +
                '"text": "Templates"' +
                '},' +
                '{' +
                '"text": "CSS",' +
                '"nodes": [' +
                '{' +
                '"text": "Less"' +
                '},' +
                '{' +
                '"text": "SaSS"' +
                '}' +
                ']' +
                '}' +
                ']' +
                '},' +
                '{' +
                '"text": "Design"' +
                '},' +
                '{' +
                '"text": "Coding"' +
                '},' +
                '{' +
                '"text": "Marketing"' +
                '}' +
                ']';

            // Init Json Tree
            jQuery('.js-tree-json').treeview({
                data: treeDataJson,
                color: '#555',
                expandIcon: 'fa fa-arrow-down',
                collapseIcon: 'fa fa-arrow-up',
                nodeIcon: 'fa fa-file-code-o text-flat',
                onhoverColor: '#f9f9f9',
                selectedColor: '#555',
                selectedBackColor: '#f1f1f1',
                showTags: true,
                levels: 3
            });
        };

        // Init all Tree Views
        initTreeViews();
    }
])

// Components Maps Google Controller
.controller('CompMapsGoogleCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Gmaps.js, for more examples you can check out https://hpneo.github.io/gmaps/

        // Init Search Map
        var initMapSearch = function () {
            // Init Map
            var mapSearch = new GMaps({
                div: '#js-map-search',
                lat: 20,
                lng: 0,
                zoom: 2,
                scrollwheel: false
            });

            // When the search form is submitted
            jQuery('.js-form-search').on('submit', function () {
                GMaps.geocode({
                    address: jQuery('.js-search-address').val().trim(),
                    callback: function (results, status) {
                        if ((status === 'OK') && results) {
                            var latlng = results[0].geometry.location;

                            mapSearch.removeMarkers();
                            mapSearch.addMarker({lat: latlng.lat(), lng: latlng.lng()});
                            mapSearch.fitBounds(results[0].geometry.viewport);
                        } else {
                            alert('Address not found!');
                        }
                    }
                });

                return false;
            });
        };

        // Init Satellite Map
        var initMapSat = function () {
            new GMaps({
                div: '#js-map-sat',
                lat: 0,
                lng: 0,
                zoom: 1,
                scrollwheel: false
            }).setMapTypeId(google.maps.MapTypeId.SATELLITE);
        };

        // Init Terrain Map
        var initMapTer = function () {
            new GMaps({
                div: '#js-map-ter',
                lat: 0,
                lng: 0,
                zoom: 1,
                scrollwheel: false
            }).setMapTypeId(google.maps.MapTypeId.TERRAIN);
        };

        // Init Overlay Map
        var initMapOverlay = function () {
            new GMaps({
                div: '#js-map-overlay',
                lat: 37.7577,
                lng: -122.4376,
                zoom: 11,
                scrollwheel: false
            }).drawOverlay({
                lat: 37.7577,
                lng: -122.4376,
                content: '<div class="alert alert-danger alert-dismissable"><h4 class="push-15">Overlay Message</h4><p class="push-10">You can overlay messages on your maps!</p></div>'
            });
        };

        // Init Markers Map
        var initMapMarkers = function () {
            new GMaps({
                div: '#js-map-markers',
                lat: 37.7577,
                lng: -122.4376,
                zoom: 11,
                scrollwheel: false
            }).addMarkers([
                {
                    lat: 37.70,
                    lng: -122.49,
                    title: 'Marker #1',
                    animation: google.maps.Animation.DROP,
                    infoWindow: {content: '<strong>Marker #1</strong>'}
                },
                {
                    lat: 37.76,
                    lng: -122.46,
                    title: 'Marker #2',
                    animation: google.maps.Animation.DROP,
                    infoWindow: {content: '<strong>Marker #2</strong>'}
                },
                {
                    lat: 37.72,
                    lng: -122.41,
                    title: 'Marker #3',
                    animation: google.maps.Animation.DROP,
                    infoWindow: {content: '<strong>Marker #3</strong>'}
                },
                {
                    lat: 37.78,
                    lng: -122.39,
                    title: 'Marker #4',
                    animation: google.maps.Animation.DROP,
                    infoWindow: {content: '<strong>Marker #4</strong>'}
                },
                {
                    lat: 37.74,
                    lng: -122.46,
                    title: 'Marker #5',
                    animation: google.maps.Animation.DROP,
                    infoWindow: {content: '<strong>Marker #5</strong>'}
                }
            ]);
        };

        // Init Street Map
        var initMapStreet = function () {
            new GMaps.createPanorama({
                el: '#js-map-street',
                lat: 37.809345,
                lng: -122.475825,
                pov: {heading: 340.91, pitch: 4},
                scrollwheel: false
            });
        };

        // Init Geolocation Map
        var initMapGeo = function () {
            var gmapGeolocation = new GMaps({
                div: '#js-map-geo',
                lat: 0,
                lng: 0,
                scrollwheel: false
            });

            GMaps.geolocate({
                success: function (position) {
                    gmapGeolocation.setCenter(position.coords.latitude, position.coords.longitude);
                    gmapGeolocation.addMarker({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        animation: google.maps.Animation.DROP,
                        title: 'GeoLocation',
                        infoWindow: {
                            content: '<div class="text-success"><i class="fa fa-map-marker"></i> <strong>Your location!</strong></div>'
                        }
                    });
                },
                error: function (error) {
                    alert('Geolocation failed: ' + error.message);
                },
                not_supported: function () {
                    alert("Your browser does not support geolocation");
                },
                always: function () {
                    // Message when geolocation succeed
                }
            });
        };

        // Init Map with Search functionality
        initMapSearch();

        // Init Example Maps
        initMapSat();
        initMapTer();
        initMapOverlay();
        initMapMarkers();
        initMapStreet();
        initMapGeo();
    }
])

// Components Maps Google Full Controller
.controller('CompMapsGoogleFullCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Gmaps.js, for more examples you can check out https://hpneo.github.io/gmaps/

        // Init Full Map
        var initMapFull = function () {
            var mainCon = jQuery('#main-container');
            var mlat = 37.7577;
            var mlong = -122.4376;
            var rTimeout;

            // Set #main-container position to be relative
            mainCon.css('position', 'relative');

            // Adjust map container position
            jQuery('#js-map-full').css({
                'position': 'absolute',
                'top': mainCon.css('padding-top'),
                'right': '0',
                'bottom': '0',
                'left': '0',
                'height': '100%'
            });

            // Init map itself
            var mapFull = new GMaps({
                div: '#js-map-full',
                lat: mlat,
                lng: mlong,
                zoom: 11
            });

            // Set map type
            mapFull.setMapTypeId(google.maps.MapTypeId.TERRAIN);

            // Resize and center the map on browser window resize
            jQuery(window).on('resize orientationchange', function () {
                clearTimeout(rTimeout);

                rTimeout = setTimeout(function () {
                    mapFull.refresh();
                    mapFull.setCenter(mlat, mlong);
                }, 150);
            });

            // Trigger a resize to refresh the map (helps for proper rendering because we dynamically change the height of map's container)
            jQuery(window).resize();
        };

        // Init Full Map
        initMapFull();
    }
])

// Components Maps Vector Controller
.controller('CompMapsVectorCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // jVectorMap, for more examples you can check out http://jvectormap.com/documentation/

        // Set default options for all maps
        var mapOptions = {
            container: '',
            map: '',
            backgroundColor: '#ffffff',
            regionStyle: {
                initial: {
                    fill: '#5490d2',
                    'fill-opacity': 1,
                    stroke: 'none',
                    'stroke-width': 0,
                    'stroke-opacity': 1
                },
                hover: {
                    'fill-opacity': .8,
                    cursor: 'pointer'
                }
            }
        };

        // Maps variables
        var mapWorld, mapEurope, mapUsa, mapIndia, mapChina, mapAustralia, mapSouthAfrica, mapFrance, mapGermany;

        // Init World Map
        var initMapWorld = function () {
            // Set Active Map and Container
            mapOptions['map'] = 'world_mill_en';
            mapOptions['container'] = jQuery('.js-vector-map-world');

            // Init Map
            mapWorld = new jvm.Map(mapOptions);
        };

        // Init Europe Map
        var initMapEurope = function () {
            // Set Active Map and Container
            mapOptions['map'] = 'europe_mill_en';
            mapOptions['container'] = jQuery('.js-vector-map-europe');


            // Init Map
            mapEurope = new jvm.Map(mapOptions);
        };

        // Init USA Map
        var initMapUsa = function () {
            // Set Active Map and Container
            mapOptions['map'] = 'us_aea_en';
            mapOptions['container'] = jQuery('.js-vector-map-usa');

            // Init Map
            mapUsa = new jvm.Map(mapOptions);
        };

        // Init India Map
        var initMapIndia = function () {
            // Set Active Map and Container
            mapOptions['map'] = 'in_mill_en';
            mapOptions['container'] = jQuery('.js-vector-map-india');

            // Init Map
            mapIndia = new jvm.Map(mapOptions);
        };

        // Init China Map
        var initMapChina = function () {
            // Set Active Map and Container
            mapOptions['map'] = 'cn_mill_en';
            mapOptions['container'] = jQuery('.js-vector-map-china');

            // Init Map
            mapChina = new jvm.Map(mapOptions);
        };

        // Init Australia Map
        var initMapAustralia = function () {
            // Set Active Map and Container
            mapOptions['map'] = 'au_mill_en';
            mapOptions['container'] = jQuery('.js-vector-map-australia');

            // Init Map
            mapAustralia = new jvm.Map(mapOptions);
        };

        // Init South Africa Map
        var initMapSouthAfrica = function () {
            // Set Active Map and Container
            mapOptions['map'] = 'za_mill_en';
            mapOptions['container'] = jQuery('.js-vector-map-south-africa');

            // Init Map
            mapSouthAfrica = new jvm.Map(mapOptions);
        };

        // Init France Map
        var initMapFrance = function () {
            // Set Active Map and Container
            mapOptions['map'] = 'fr_mill_en';
            mapOptions['container'] = jQuery('.js-vector-map-france');

            // Init Map
            mapFrance = new jvm.Map(mapOptions);
        };

        // Init Germany Map
        var initMapGermany = function () {
            // Set Active Map and Container
            mapOptions['map'] = 'de_mill_en';
            mapOptions['container'] = jQuery('.js-vector-map-germany');

            // Init Map
            mapGermany = new jvm.Map(mapOptions);
        };

        // Init Example Maps
        initMapWorld();
        initMapEurope();
        initMapUsa();
        initMapIndia();
        initMapChina();
        initMapAustralia();
        initMapSouthAfrica();
        initMapFrance();
        initMapGermany();

        // When leaving the page remove maps resize event (causes JS errors in other pages)
        $scope.$on('$stateChangeStart', function (event) {
            jQuery(window).unbind('resize', mapWorld.onResize);
            jQuery(window).unbind('resize', mapEurope.onResize);
            jQuery(window).unbind('resize', mapUsa.onResize);
            jQuery(window).unbind('resize', mapIndia.onResize);
            jQuery(window).unbind('resize', mapChina.onResize);
            jQuery(window).unbind('resize', mapAustralia.onResize);
            jQuery(window).unbind('resize', mapSouthAfrica.onResize);
            jQuery(window).unbind('resize', mapFrance.onResize);
            jQuery(window).unbind('resize', mapGermany.onResize);
        });

        // When returning to the page re-enable maps resize functionality
        $scope.$on('$stateChangeSuccess', function (event) {
            jQuery(window).resize(mapWorld.onResize);
            jQuery(window).resize(mapEurope.onResize);
            jQuery(window).resize(mapUsa.onResize);
            jQuery(window).resize(mapIndia.onResize);
            jQuery(window).resize(mapChina.onResize);
            jQuery(window).resize(mapAustralia.onResize);
            jQuery(window).resize(mapSouthAfrica.onResize);
            jQuery(window).resize(mapFrance.onResize);
            jQuery(window).resize(mapGermany.onResize);
        });
    }
])

/**
 * DIRECTIVE
 */
/*
 *  Document   : directives.js
 *  Author     : pixelcave
 *  Description: Our custom directives
 *
 */

/*
 * Custom helper directives
 *
 */

// View loader functionality
// By adding the attribute 'data-js-view-loader'
.directive('jsViewLoader', function () {
    return {
        link: function (scope, element) {
            var el = jQuery(element);

            // Hide the view loader, populate it with content and style it
            el
                .hide()
                .html('<i class="fa-fw fa fa-refresh fa-spin text-primary"></i>')
                .css({
                    'position': 'fixed',
                    'top': '20px',
                    'left': '50%',
                    'height': '20px',
                    'width': '20px',
                    'margin-left': '-10px',
                    'z-index': 99999
                });

            // On state change start event, show the element
            scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                el.fadeIn(250);
            });

            // On state change success event, hide the element
            scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                el.fadeOut(250);
            });
        }
    };
})

// Main navigation functionality
// By adding the attribute 'data-js-main-nav'
.directive('jsMainNav', function () {
    return {
        link: function (scope, element) {
            // When a submenu link is clicked
            jQuery('[data-toggle="nav-submenu"]', element).on('click', function (e) {
                // Get link
                var link = jQuery(this);

                // Get link's parent
                var parentLi = link.parent('li');

                if (parentLi.hasClass('open')) { // If submenu is open, close it..
                    parentLi.removeClass('open');
                } else { // .. else if submenu is closed, close all other (same level) submenus first before open it
                    link
                        .closest('ul')
                        .find('> li')
                        .removeClass('open');

                    parentLi
                        .addClass('open');
                }

                return false;
            });

            // Remove focus when clicking on a link
            jQuery('a', element).on('click', function () {
                jQuery(this).blur();
            });

            // On state change success event, hide the sidebar in mobile devices
            scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                scope.oneui.settings.sidebarOpenXs = false;
            });
        }
    };
})

// Form helper functionality (placeholder support for IE9 which uses HTML5 Placeholder plugin + Material forms)
// Auto applied to all your form elements (<form>)
.directive('form', function () {
    return {
        restrict: 'E',
        link: function (scope, element) {
            // Init form placeholder (for IE9)
            jQuery('.form-control', element).placeholder();

            // Init material forms
            jQuery('.form-material.floating > .form-control', element).each(function () {
                var input = jQuery(this);
                var parent = input.parent('.form-material');

                setTimeout(function () {
                    if (input.val()) {
                        parent.addClass('open');
                    }
                }, 150);

                input.on('change', function () {
                    if (input.val()) {
                        parent.addClass('open');
                    } else {
                        parent.removeClass('open');
                    }
                });
            });
        }
    };
})

// Blocks options functionality
// By adding the attribute 'data-js-block-option'
.directive('jsBlockOption', function () {
    return {
        link: function (scope, element) {
            var el = jQuery(element);

            // Init Icons
            scope.helpers.uiBlocks(false, 'init', el);

            // Call blocks API on click
            el.on('click', function () {
                scope.helpers.uiBlocks(el.closest('.block'), el.data('action'));
            });
        }
    };
})

// Print page on click
// By adding the attribute 'data-js-print'
.directive('jsPrint', function () {
    return {
        link: function (scope, element) {
            jQuery(element).on('click', function () {
                // Store all #page-container classes
                var lPage = jQuery('#page-container');
                var pageCls = lPage.prop('class');

                // Remove all classes from #page-container
                lPage.prop('class', '');

                // Print the page
                window.print();

                // Restore all #page-container classes
                lPage.prop('class', pageCls);
            });
        }
    };
})

// Populate element's content with the correct copyright year
// By adding the attribute 'data-js-year-copy'
.directive('jsYearCopy', function () {
    return {
        link: function (scope, element) {
            var gdate = new Date();
            var copyright = '2015';

            if (gdate.getFullYear() !== 2015) {
                copyright = copyright + '-' + gdate.getFullYear().toString().substr(2, 2);
            }

            element.text(copyright);
        }
    };
})

// Animated scroll to an element
// By adding the attribute (with custom values) 'data-js-scroll-to="{target: '#target_element_id', speed: 'milliseconds'}"' to a button or a link
.directive('jsScrollTo', function () {
    return {
        link: function (scope, element, attrs) {
            var options = (typeof scope.$eval(attrs.jsScrollTo) !== 'undefined') ? scope.$eval(attrs.jsScrollTo) : new Object();
            var header = jQuery('#header-navbar');
            var headerHeight = (header.length && scope.oneui.settings.headerFixed) ? header.outerHeight() : 0;

            jQuery(element).on('click', function () {
                jQuery('html, body').animate({
                    scrollTop: jQuery(options.target).offset().top - headerHeight
                }, options.speed || 1000);
            });
        }
    };
})

// Toggle a class to a target element
// By adding the attribute (with custom values) 'data-js-toggle-class="{target: '#target_element_id', class: 'class_name_to_toggle'}'
.directive('jsToggleClass', function () {
    return {
        link: function (scope, element, attrs) {
            var options = (typeof scope.$eval(attrs.jsToggleClass) !== 'undefined') ? scope.$eval(attrs.jsToggleClass) : new Object();

            jQuery(element).on('click', function () {
                jQuery(options.target).toggleClass(options.class);
            });
        }
    };
})

// Removes focus from an element on click
// By adding the attribute 'data-js-blur'
.directive('jsBlur', function () {
    return {
        link: function (scope, element) {
            element.bind('click', function () {
                element.blur();
            });
        }
    };
})


/*
 * Third party jQuery plugin inits or custom ui helpers packed in Angular directives for easy
 *
 */

// Bootstrap Tabs (legacy init - if you like, you can use the native implementation from Angular UI Bootstrap)
// By adding the attribute 'data-js-tabs' to a ul with Bootstrap tabs markup
.directive('jsTabs', function () {
    return {
        link: function (scope, element) {
            jQuery('a', element).on('click', function (e) {
                e.preventDefault();
                jQuery(this).tab('show');
            });
        }
    };
})

// Custom Table functionality: Section toggling
// By adding the attribute 'data-js-table-sections' to your table
.directive('jsTableSections', function () {
    return {
        link: function (scope, element) {
            var table = jQuery(element);
            var tableRows = jQuery('.js-table-sections-header > tr', table);

            tableRows.on('click', function (e) {
                var row = jQuery(this);
                var tbody = row.parent('tbody');

                if (!tbody.hasClass('open')) {
                    jQuery('tbody', table).removeClass('open');
                }

                tbody.toggleClass('open');
            });
        }
    };
})

// Custom Table functionality: Checkable rows
// By adding the attribute 'data-js-table-checkable' to your table
.directive('jsTableCheckable', function () {
    return {
        link: function (scope, element) {
            var table = jQuery(element);

            // When a checkbox is clicked in thead
            jQuery('thead input:checkbox', table).click(function () {
                var checkedStatus = jQuery(this).prop('checked');

                // Check or uncheck all checkboxes in tbody
                jQuery('tbody input:checkbox', table).each(function () {
                    var checkbox = jQuery(this);

                    checkbox.prop('checked', checkedStatus);
                    uiCheckRow(checkbox, checkedStatus);
                });
            });

            // When a checkbox is clicked in tbody
            jQuery('tbody input:checkbox', table).click(function () {
                var checkbox = jQuery(this);

                uiCheckRow(checkbox, checkbox.prop('checked'));
            });

            // When a row is clicked in tbody
            jQuery('tbody > tr', table).click(function (e) {
                if (e.target.type !== 'checkbox'
                    && e.target.type !== 'button'
                    && e.target.tagName.toLowerCase() !== 'a'
                    && !jQuery(e.target).parent('label').length) {
                    var checkbox = jQuery('input:checkbox', this);
                    var checkedStatus = checkbox.prop('checked');

                    checkbox.prop('checked', !checkedStatus);
                    uiCheckRow(checkbox, !checkedStatus);
                }
            });

            // Checkable table functionality helper - Checks or unchecks table row
            var uiCheckRow = function (checkbox, checkedStatus) {
                if (checkedStatus) {
                    checkbox
                        .closest('tr')
                        .addClass('active');
                } else {
                    checkbox
                        .closest('tr')
                        .removeClass('active');
                }
            };
        }
    };
})

// jQuery Appear, for more examples you can check out https://github.com/bas2k/jquery.appear
// By adding the attribute (with custom values) 'data-js-appear="{speed: 1000, refreshInterval: 10, ...}'
.directive('jsAppear', function () {
    return {
        link: function (scope, element, attrs) {
            var options = (typeof scope.$eval(attrs.jsAppear) !== 'undefined') ? scope.$eval(attrs.jsAppear) : new Object();
            var el = jQuery(element);
            var windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            el.appear(function () {
                setTimeout(function () {
                    el.removeClass('visibility-hidden')
                        .addClass(options.class || 'animated fadeIn');
                }, (jQuery('html').hasClass('ie9') || windowW < 992) ? 0 : (options.timeout ? options.timeout : 0));
            }, {accY: options.offset || 0});
        }
    };
})

// jQuery Appear + jQuery countTo, for more examples you can check out https://github.com/bas2k/jquery.appear and https://github.com/mhuggins/jquery-countTo
// By adding the attribute (with custom values) 'data-js-count-to="{speed: 1000, refreshInterval: 10, ...}'
.directive('jsCountTo', function () {
    return {
        link: function (scope, element, attrs) {
            var options = (typeof scope.$eval(attrs.jsCountTo) !== 'undefined') ? scope.$eval(attrs.jsCountTo) : new Object();
            var el = jQuery(element);

            el.appear(function () {
                el.countTo({
                    speed: options.speed || 1500,
                    refreshInterval: options.refreshInterval || 15,
                    onComplete: function () {
                        if (options.after) {
                            el.html(el.html() + options.after);
                        } else if (options.before) {
                            el.html(options.before + el.html());
                        }
                    }
                });
            });
        }
    };
})

// SlimScroll, for more examples you can check out http://rocha.la/jQuery-slimScroll
// By adding the attribute (with custom values) 'data-js-slimscroll="{height: '100px', size: '3px', ...}'
.directive('jsSlimscroll', function () {
    return {
        link: function (scope, element, attrs) {
            var options = (typeof scope.$eval(attrs.jsSlimscroll) !== 'undefined') ? scope.$eval(attrs.jsSlimscroll) : new Object();

            jQuery(element).slimScroll({
                height: options.height || '200px',
                size: options.size || '5px',
                position: options.position || 'right',
                color: options.color || '#000',
                alwaysVisible: options.alwaysVisible ? true : false,
                railVisible: options.railVisible ? true : false,
                railColor: options.railColor || '#999',
                railOpacity: options.railOpacity || .3
            });
        }
    };
})

/*
 ********************************************************************************************
 *
 * All the following directives require each plugin's resources (JS, CSS) to be lazy loaded in
 * the page in order to work, so please make sure you've included them in your route configuration
 *
 ********************************************************************************************
 */

// Magnific Popup, for more examples you can check out http://dimsemenov.com/plugins/magnific-popup/
// By adding the attribute (with custom value) 'data-js-magnific="{advancedGallery: false}'
.directive('jsMagnific', function () {
    return {
        link: function (scope, element, attrs) {
            var options = (typeof scope.$eval(attrs.jsMagnific) !== 'undefined') ? scope.$eval(attrs.jsMagnific) : new Object();

            jQuery(element).magnificPopup({
                delegate: options.advancedGallery ? 'a.img-lightbox' : 'a.img-link',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }
    };
})

// Summernote, for more examples you can check out http://summernote.org/
// By adding the attribute (with custom value) 'data-js-summernote="{airMode: false}'
.directive('jsSummernote', function () {
    return {
        link: function (scope, element, attrs) {
            var options = (typeof scope.$eval(attrs.jsSummernote) !== 'undefined') ? scope.$eval(attrs.jsSummernote) : new Object();

            if (options.airMode) {
                jQuery(element).summernote({
                    airMode: true
                });
            } else {
                jQuery(element).summernote({
                    height: 350,
                    minHeight: null,
                    maxHeight: null
                });
            }
        }
    };
})

// Slick, for more examples you can check out http://kenwheeler.github.io/slick/
// By adding the attribute (with custom values) 'data-js-slider="{arrows: true, dots: true, ...}'
.directive('jsSlider', function () {
    return {
        link: function (scope, element, attrs) {
            var options = (typeof scope.$eval(attrs.jsSlider) !== 'undefined') ? scope.$eval(attrs.jsSlider) : new Object();

            jQuery(element).slick({
                arrows: options.arrows || false,
                dots: options.dots || false,
                slidesToShow: options.slidesToShow || 1,
                autoplay: options.autoplay || false,
                autoplaySpeed: options.autoplaySpeed || 3000
            });
        }
    };
})
// Bootstrap Datepicker, for more examples you can check out https://github.com/eternicode/bootstrap-datepicker
// By adding the attribute 'data-js-datepicker'
.directive('jsDatepicker', function () {
    return {
        link: function (scope, element, attrs) {
            var options = (typeof scope.$eval(attrs.jsDatepicker) !== 'undefined') ? scope.$eval(attrs.jsDatepicker) : new Object();

            jQuery(element).datepicker({
                weekStart: 1,
                autoclose: true,
                todayHighlight: true,
                orientation: options.orientation || 'auto'
            });
        }
    };
})

// Bootstrap Colorpicker, for more examples you can check out http://mjolnic.com/bootstrap-colorpicker/
// By adding the attribute (with custom value) 'data-js-colorpicker="{format: 'hex', inline: true}'
.directive('jsColorpicker', function () {
    return {
        link: function (scope, element, attrs) {
            var options = (typeof scope.$eval(attrs.jsColorpicker) !== 'undefined') ? scope.$eval(attrs.jsColorpicker) : new Object();

            jQuery(element).colorpicker({
                format: options.format || 'hex',
                inline: options.inline ? true : false
            });
        }
    };
})

// Masked Inputs, for more examples you can check out http://digitalbush.com/projects/masked-input-plugin/
// By adding the attribute (with custom value) 'data-js-masked-input="99/99/9999"'
.directive('jsMaskedInput', function () {
    return {
        link: function (scope, element, attrs) {
            jQuery(element).mask(attrs.jsMaskedInput);
        }
    };
})

// Tags Inputs, for more examples you can check out https://github.com/xoxco/jQuery-Tags-Input
// By adding the attribute 'data-js-tags-input'
.directive('jsTagsInput', function () {
    return {
        link: function (scope, element) {
            jQuery(element).tagsInput({
                height: '36px',
                width: '100%',
                defaultText: 'Add tag',
                removeWithBackspace: true,
                delimiter: [',']
            });
        }
    };
})

// Select2, for more examples you can check out https://github.com/select2/select2
// By adding the attribute 'data-js-select2'
.directive('jsSelect2', function ($timeout) {
    return {
        link: function (scope, element, attrs) {
            jQuery(element).select2();

            scope.$watch(attrs.ngModel, function () {
                $timeout(function () {
                    element.trigger('change.select2');
                }, 100);
            });
        }
    };
})

// Bootstrap Notify, for more examples you can check out http://bootstrap-growl.remabledesigns.com/
// By adding the attribute (with custom values) 'data-js-notify="{icon: 'fa fa-check', message: 'Your message!', ... }'
.directive('jsNotify', function () {
    return {
        link: function (scope, element, attrs) {
            var options = (typeof scope.$eval(attrs.jsNotify) !== 'undefined') ? scope.$eval(attrs.jsNotify) : new Object();

            jQuery(element).on('click', function () {
                jQuery.notify({
                        icon: options.icon || '',
                        message: options.message,
                        url: options.url || ''
                    },
                    {
                        element: 'body',
                        type: options.type || 'info',
                        allow_dismiss: true,
                        newest_on_top: true,
                        showProgressbar: false,
                        placement: {
                            from: options.from || 'top',
                            align: options.align || 'right'
                        },
                        offset: 20,
                        spacing: 10,
                        z_index: 1033,
                        delay: 5000,
                        timer: 1000,
                        animate: {
                            enter: 'animated fadeIn',
                            exit: 'animated fadeOutDown'
                        }
                    });
            });
        }
    };
})

// Draggable items with jQuery, for more examples you can check out https://jqueryui.com/sortable/
// By adding the attribute 'data-js-draggable-items'
.directive('jsDraggableItems', function () {
    return {
        link: function (scope, element) {
            jQuery('.draggable-column', element).sortable({
                connectWith: '.draggable-column',
                items: '.draggable-item',
                dropOnEmpty: true,
                opacity: .75,
                handle: '.draggable-handler',
                placeholder: 'draggable-placeholder',
                tolerance: 'pointer',
                start: function (e, ui) {
                    ui.placeholder.css({
                        'height': ui.item.outerHeight(),
                        'margin-bottom': ui.item.css('margin-bottom')
                    });
                }
            });
        }
    };
})

// Easy Pie Chart, for more examples you can check out http://rendro.github.io/easy-pie-chart/
// By adding the attribute (with custom values) 'data-js-pie-chart="{barColor: '#000', trackColor: '#eee', ... }'
.directive('jsPieChart', function () {
    return {
        link: function (scope, element, attrs) {
            var options = (typeof scope.$eval(attrs.jsPieChart) !== 'undefined') ? scope.$eval(attrs.jsPieChart) : new Object();

            jQuery(element).easyPieChart({
                barColor: options.barColor || '#777777',
                trackColor: options.trackColor || '#eeeeee',
                lineWidth: options.lineWidth || 3,
                size: options.size || '80',
                animate: options.animate || 750,
                scaleColor: options.scaleColor || false
            });
        }
    };
})

// Bootstrap Maxlength, for more examples you can check out https://github.com/mimo84/bootstrap-maxlength
// By adding the attribute (with custom values) 'data-js-maxlength="{alwaysShow: 'true', threshold: '10', ... }'
.directive('jsMaxlength', function () {
    return {
        link: function (scope, element, attrs) {
            var options = (typeof scope.$eval(attrs.jsMaxlength) !== 'undefined') ? scope.$eval(attrs.jsMaxlength) : new Object();

            jQuery(element).maxlength({
                alwaysShow: options.alwaysShow ? true : false,
                threshold: options.threshold || 10,
                warningClass: options.warningClass || 'label label-warning',
                limitReachedClass: options.limitReachedClass || 'label label-danger',
                placement: options.placement || 'bottom',
                preText: options.preText || '',
                separator: options.separator || '/',
                postText: options.postText || ''
            });
        }
    };
})

// Bootstrap Datetimepicker, for more examples you can check out https://github.com/Eonasdan/bootstrap-datetimepicker
// By adding the attribute (with custom values) 'data-js-datetimepicker="{format: 'false', useCurrent: 'false', ... }'
.directive('jsDatetimepicker', function () {
    return {
        link: function (scope, element, attrs) {
            var options = (typeof scope.$eval(attrs.jsDatetimepicker) !== 'undefined') ? scope.$eval(attrs.jsDatetimepicker) : new Object();

            jQuery(element).datetimepicker({
                format: options.format || false,
                useCurrent: options.useCurrent || false,
                locale: moment.locale('' + (options.locale || '') + ''),
                showTodayButton: options.showTodayButton || false,
                showClear: options.showClear || false,
                showClose: options.showClose || false,
                sideBySide: options.sideBySide || false,
                inline: options.inline || false,
                icons: {
                    time: 'si si-clock',
                    date: 'si si-calendar',
                    up: 'si si-arrow-up',
                    down: 'si si-arrow-down',
                    previous: 'si si-arrow-left',
                    next: 'si si-arrow-right',
                    today: 'si si-size-actual',
                    clear: 'si si-trash',
                    close: 'si si-close'
                }
            });
        }
    };
})

// Ion Range Slider, for more examples you can check out https://github.com/IonDen/ion.rangeSlider
// By adding the attribute 'data-js-range-slider'
.directive('jsRangeSlider', function () {
    return {
        link: function (scope, element) {
            jQuery(element).ionRangeSlider({
                input_values_separator: ';'
            });
        }
    };
})

// Dropzone, for more examples you can check out http://www.dropzonejs.com/#usage
// By adding the attribute 'data-js-dropzone' to your form
.directive('jsDropzone', function () {
    return {
        link: function (scope, element) {
            scope.dropzone = new Dropzone(element[0]);
        }
    };
})

// SimpleMDE, for more examples you can check out https://github.com/NextStepWebs/simplemde-markdown-editor
// By adding the attribute 'data-js-simplemde' to a textarea
.directive('jsSimplemde', function () {
    return {
        link: function (scope, element, attrs) {
            new SimpleMDE({element: jQuery(element)[0]});
        }
    };
});