require('./modules/theme')
require('./modules/wallet')

// Create our angular module
angular.module('app', [
    'ngStorage',
    'ngMessages',
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad',
    'ajoslin.promise-tracker', 'restangular', //REST Angular
    'satellizer',
    'ngValidate',
    'dez-theme',
    'dez-wallet'
]).run(function ($rootScope, uiHelpers) {
        // Access uiHelpers easily from all controllers
        $rootScope.helpers = uiHelpers;

        // On window resize or orientation change resize #main-container & Handle scrolling
        var resizeTimeout;

        jQuery(window).on('resize orientationchange', function () {
            clearTimeout(resizeTimeout);

            resizeTimeout = setTimeout(function () {
                $rootScope.helpers.uiHandleScroll();
                $rootScope.helpers.uiHandleMain();
            }, 150);
        });
    })
    .controller('AppCtrl',
        ['$scope', '$rootScope', '$sce', '$localStorage', '$window',
            '$auth', '$location', '$state', 'UserService', 'Debuger',
            function ($scope, $rootScope, $sce, $localStorage, $window,
                      $auth, $location, $state, UserService, Debuger) {
                $auth.setStorageType('sessionStorage');

                $rootScope.enviroment = enviroment;
                $rootScope.copyright = $sce.trustAsHtml('NatCoin v1.0 &copy; 2017');
                $rootScope.profileData = {
                    firstname: '',
                    lastname: ''
                }

                // Template Settings
                $scope.oneui = {
                    version: '3.2', // Template version
                    localStorage: false, // Enable/Disable local storage
                    settings: {
                        activeColorTheme: false, // Set a color theme of your choice, available: 'amethyst', 'city, 'flat', 'modern' and 'smooth'
                        sidebarLeft: true, // true: Left Sidebar and right Side Overlay, false: Right Sidebar and left Side Overlay
                        sidebarOpen: true, // Visible Sidebar by default (> 991px)
                        sidebarOpenXs: false, // Visible Sidebar by default (< 992px)
                        sidebarMini: false, // Mini hoverable Sidebar (> 991px)
                        sideOverlayOpen: false, // Visible Side Overlay by default (> 991px)
                        sideOverlayHover: false, // Hoverable Side Overlay (> 991px)
                        sideScroll: true, // Enables custom scrolling on Sidebar and Side Overlay instead of native scrolling (> 991px)
                        headerFixed: true // Enables fixed header
                    }
                };

                // If local storage setting is enabled
                if ($scope.oneui.localStorage) {
                    // Save/Restore local storage settings
                    if ($scope.oneui.localStorage) {
                        if (angular.isDefined($localStorage.oneuiSettings)) {
                            $scope.oneui.settings = $localStorage.oneuiSettings;
                        } else {
                            $localStorage.oneuiSettings = $scope.oneui.settings;
                        }
                    }

                    // Watch for settings changes
                    $scope.$watch('oneui.settings', function () {
                        // If settings are changed then save them to localstorage
                        $localStorage.oneuiSettings = $scope.oneui.settings;
                    }, true);
                }

                // Watch for activeColorTheme variable update
                $scope.$watch('oneui.settings.activeColorTheme', function () {
                    // Handle Color Theme
                    $scope.helpers.uiHandleColorTheme($scope.oneui.settings.activeColorTheme);
                }, true);

                // Watch for sideScroll variable update
                $scope.$watch('oneui.settings.sideScroll', function () {
                    // Handle Scrolling
                    setTimeout(function () {
                        $scope.helpers.uiHandleScroll();
                    }, 150);
                }, true);

                // When view content is loaded
                $scope.$on('$viewContentLoaded', function () {
                    // Hide page loader
                    $scope.helpers.uiLoader('hide');

                    // Resize #main-container
                    $scope.helpers.uiHandleMain();
                });


                $rootScope.$on('checkLogin', function () {
                    $rootScope.isAuthenticated = $auth.isAuthenticated();
                    $rootScope.userName = null;

                    if ($auth.isAuthenticated()) $rootScope.loginText = 'Logout'
                    else $rootScope.loginText = 'Login'

                    Debuger.info('Authenticate?', $auth.isAuthenticated())
                })

                $scope.$broadcast('checkLogin')
                $scope.$emit('checkLogin')

                var payload = $auth.getPayload();
                Debuger.info('username', $auth.getToken())

                if (payload && payload.name) {
                    $rootScope.userName = payload.name;
                }
                $rootScope.$on('refreshToken', function (event, data) {
                    Debuger.info('refreshToken Fired!')
                    $rootScope.isAuthenticated = false;
                    $rootScope.loginText = 'Login';
                    $state.go('login');
                    $auth.logout();
                })

                $scope.loginAction = function () {
                    if (!$auth.isAuthenticated()) {
                        $auth.authenticate('fusio').then(function (response) {
                            $rootScope.isAuthenticated = $auth.isAuthenticated();
                            $rootScope.userName = null;
                            var payload = $auth.getPayload();
                            if (payload && payload.name) {
                                $rootScope.userName = payload.name;
                            }
                            $scope.loginText = 'Logout'
                            $state.reload();
                            $location.path('/');
                        })
                    } else {
                        $scope.logoutAction()
                    }
                }

                $scope.logoutAction = function () {
                    $rootScope.isAuthenticated = false;
                    $rootScope.loginText = 'Login';
                    $state.go('login');
                    $auth.logout();
                }


            }
        ])
angular.bootstrap(document, ['app']);