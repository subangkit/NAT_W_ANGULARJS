angular.module('dez-services', [
    'ngStorage',
    'ngMessages',
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad',
    'ajoslin.promise-tracker', 'restangular', //REST Angular
    'satellizer',
])
.factory('crowdsale', function ($http) {
        var promise;
        var jsondata = {
            get: function () {
                if (!promise) {
                    var promise = $http.get('assets/js/NatCoinCrowdsale.json').success(function (response) {
                        return response.data;
                    });
                    return promise;
                }
            }
        };
        return jsondata;
    })
.factory('ContractService', function ($http) {
    function getTokenContract() {
        return $http.get('assets/js/NatCoin.json').then(function (response) {
            return angular.fromJson(response.data);
        })
    }

    function getCrowdsaleContract() {
        return $http.get('assets/js/NatCoinCrowdsale.json').then(function (response) {
            return angular.fromJson(response.data);
        })
    }

    return {
        getTokenContract: getTokenContract,
        getCrowdsaleContract: getCrowdsaleContract
    }
})
.factory('Debuger', function ($rootScope) {
    return {
        log: function (name, variable) {
            if ($rootScope.enviroment == 'development') console.log(name, variable)
        },
        info: function (name, variable) {
            if ($rootScope.enviroment == 'development') console.info(name, variable)
        }
    }
})
.factory('UserService', function ($rootScope, $http, $q, $location, Restangular, $auth, $sessionStorage, $timeout) {
    var urlBase = api_host + '/public/index.php';
    var userData = {};

    var getCurrentUser = function () {
        var deferred = $q.defer();

        if (!$auth.isAuthenticated()) $sessionStorage.$reset()
        var token = $auth.getToken();
        if (token) {
            $http.get(urlBase + '/authorization/whoami', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': '*',
                    'Authorization': 'Bearer ' + token
                }
            }).then(function (response) {
                $sessionStorage.userData = response.data;
                $rootScope.userData = response.data;
                return deferred.resolve(response.data);
            }, function (response) {
                if (typeof response.data.message != 'undefined') {
                    if (response.data.message.indexOf('Invalid access token') !== -1 || response.data.message.indexOf('Expired token') !== -1)
                        $rootScope.$emit('refreshToken', '');
                    return deferred.reject(response.data.message);
                } else {
                    return deferred.reject("Data Loading Error");
                }
            });
        } else {
            $timeout(function () {
                $rootScope.$emit('refreshToken', '')
                return deferred.reject("Invalid Token");
            }, 0)
        }
        return deferred.promise;
    };
    return {
        login: function (u, p, rememberMe) {
            var deferred = $q.defer();

            var data = {
                username: u,
                password: p,
                client_id: '5fb0e4bd-eb15-4bd8-b115-504f82856dde',
                client_secret: '96c907fb169f9ceaafb2f01c7b12f137ea7f16fc24cca8dfd9fb52832c5d0c57',
                grant_type: 'password',
                scope: 'authorization,wallet',
            }

            var str = '';
            var counter = 0;
            angular.forEach(data, function (value, key) {
                str += key + '=' + value + '&'
                counter++;
            });
            str = str.substring(0, str.length - 1);

            $http({
                method: 'POST',
                'url': api_host + '/public/index.php/authorization/token',
                data: str
            }).then(function (response) {
                $auth.setToken(response.data.access_token);
                getCurrentUser().then(function (r) {
                    return deferred.resolve(response.data);
                }, function (response) {
                    return deferred.reject("Failed to retrieve current user");
                });

            }, function (response) {
                return deferred.reject(response.data);
            })

            return deferred.promise;
        },
        getCurrentUser: getCurrentUser,
        getUser: function (u) {

        },
        setProfile: function (firstname, lastname) {

            var deferred = $q.defer();
            var token = $auth.getToken();

            if (!$auth.isAuthenticated()) {
                $sessionStorage.$reset()
                return false;
            }
            var $userData = [];
            if (typeof $sessionStorage.userData != 'undefined') {
                userData = $sessionStorage.userData;
            }

            if (token) {
                var data = {
                    'user_code': ''+userData.id,
                    'firstname': firstname,
                    'lastname': lastname
                }

                $http.post(urlBase + '/profile', data, {
                    params: {},
                    headers: {'Authorization': 'Bearer ' + token}
                }).then(function (response) {
                    return deferred.resolve(response.data);
                }, function (response) {
                    if (typeof response.data.message != 'undefined') {
                        if (response.data.message.indexOf('Invalid access token') !== -1 || response.data.message.indexOf('Expired token') !== -1)
                            $rootScope.$emit('refreshToken', '');
                        return deferred.reject(response.data.message);
                    } else {
                        return deferred.reject("Data Loading Error");
                    }
                });
            }

            return deferred.promise;
        },
        getProfile: function () {
            if (!$auth.isAuthenticated()) $sessionStorage.$reset()
            var deferred = $q.defer();
            var token = $auth.getToken();

            getCurrentUser().then(function (userData) {
                if (token) {
                    $http.get(urlBase + '/profile/' + userData.id, {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': 'Bearer ' + token}
                    }).then(function (response) {
                        $sessionStorage.profileData = response.data;
                        $rootScope.profileData = response.data;
                        return deferred.resolve(response.data);
                    }, function (response) {
                        if (typeof response.data.message != 'undefined') {
                            if (response.data.message.indexOf('Invalid access token') !== -1 || response.data.message.indexOf('Expired token') !== -1)
                                $rootScope.$emit('refreshToken', '');
                            return deferred.reject(response.data.message);
                        } else {
                            return deferred.reject("Data Loading Error");
                        }
                    });
                } else {
                    $timeout(function () {
                        $rootScope.$emit('refreshToken', '')
                        return deferred.reject("Invalid Token");
                    }, 0)
                }
            })
            return deferred.promise;
        },
        registerUser: function (u, e, p) {
            var deferred = $q.defer();

            var date1 = new Date();
            var date2 = new Date("8/6/2017");
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

            if (date2.getTime() - date1.getTime() > 0) {
                swal({
                    title: 'Sign Up disabled',
                    text: 'Sign up will be available after 10 August 2017',
                    type: 'warning',
                    confirmButtonText: 'OK',
                    html: false,
                    preConfirm: function () {
                        return new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve();
                            }, 50);
                        });
                    }
                }).then(
                    $timeout(function () {
                        return deferred.reject('Register disabled until 10 August 2017');
                    }, 0)
                );
            } else {

                var data = {
                    'name': u,
                    'email': e,
                    'password': p,
                    'captcha': 'ALTBIT'
                }

                $http.post(urlBase + '/consumer/register', data, {}).then(function (response) {
                    return deferred.resolve(response.data.message);
                }, function (response) {
                    if (typeof response.data.message != 'undefined') {
                        return deferred.reject(response.data.message);
                    } else {
                        return deferred.reject("Data Loading Error");
                    }
                });
            }

            return deferred.promise;
        },
        resendEmail: function (e) {
            var deferred = $q.defer();

            var data = {
                'email': e,
            }

            $http.post(urlBase + '/consumer/resend', data, {}).then(function (response) {
                return deferred.resolve(response.data.message);
            }, function (response) {
                if (typeof response.data.message != 'undefined') {
                    if (response.data.message.indexOf('Invalid access token') !== -1 || response.data.message.indexOf('Expired token') !== -1)
                        $rootScope.$emit('refreshToken', '');
                    return deferred.reject(response.data.message);
                } else {
                    return deferred.reject("Data Loading Error");
                }
            });

            return deferred.promise;
        },
        rememberPassword: function (e) {
            var deferred = $q.defer();
            var data = {
                'email': u,
            }

            $http.post(urlBase + '/remember', data, {}).then(function (response) {
                return deferred.resolve(response.data.message);
            }, function (response) {
                if (typeof response.data.message != 'undefined') {
                    if (response.data.message.indexOf('Invalid access token') !== -1 || response.data.message.indexOf('Expired token') !== -1)
                        $rootScope.$emit('refreshToken', '');
                    return deferred.reject(response.data.message);
                } else {
                    return deferred.reject("Data Loading Error");
                }
            });

            return deferred.promise;
        },
        setWallet: function (a, p) {

            var deferred = $q.defer();
            var token = $auth.getToken();

            if (!$auth.isAuthenticated()) {
                $sessionStorage.$reset()
                return false;
            }
            var $userData = [];
            if (typeof $sessionStorage.userData != 'undefined') {
                userData = $sessionStorage.userData;
            }

            if (token) {
                var data = {
                    'user_code': userData.id,
                    'a': a,
                    'p': p
                }

                $http.post(urlBase + '/ethaccount', data, {
                    params: {},
                    headers: {'Authorization': 'Bearer ' + token}
                }).then(function (response) {
                    return deferred.resolve(response.data);
                }, function (response) {
                    if (typeof response.data.message != 'undefined') {
                        if (response.data.message.indexOf('Invalid access token') !== -1 || response.data.message.indexOf('Expired token') !== -1)
                            $rootScope.$emit('refreshToken', '');
                        return deferred.reject(response.data.message);
                    } else {
                        return deferred.reject("Data Loading Error");
                    }
                });
            }

            return deferred.promise;
        },
        getWallet: function () {
            if (!$auth.isAuthenticated()) $sessionStorage.$reset()
            var deferred = $q.defer();
            var token = $auth.getToken();

            getCurrentUser().then(function (userData) {
                if (token) {
                    $http.get(urlBase + '/ethaccount/' + userData.id, {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': 'Bearer ' + token
                        }
                    }).then(function (response) {
                        $sessionStorage.profileData = response.data;
                        $rootScope.profileData = response.data;
                        return deferred.resolve(response.data);
                    }, function (response) {
                        if (typeof response.data.message != 'undefined') {
                            if (response.data.message.indexOf('Invalid access token') !== -1 || response.data.message.indexOf('Expired token') !== -1)
                                $rootScope.$emit('refreshToken', '');
                            return deferred.reject(response.data.message);
                        } else {
                            return deferred.reject("Data Loading Error");
                        }
                    });
                } else {
                    $timeout(function () {
                        $rootScope.$emit('refreshToken', '')
                        return deferred.reject("Invalid Token");
                    }, 0)
                }
            })
            return deferred.promise;
        },
        activateUser : function (code) {
            var deferred = $q.defer();

            delete $http.defaults.headers.common['Authorization'];

            var data = {
                token: code,
            }

            $http.post(urlBase + '/consumer/activate', data, {}).then(function (response) {
                return deferred.resolve(response.data.message);
            }, function (response) {
                if (typeof response.data.message != 'undefined') {
                    if (response.data.message.indexOf('Invalid access token') !== -1 || response.data.message.indexOf('Expired token') !== -1)
                    //$rootScope.$emit('refreshToken', '');
                        return deferred.reject(response.data.message);
                } else {
                    return deferred.reject("Data Loading Error");
                }
            });

            return deferred.promise;
        },
        requestReferalCode : function () {
            var deferred = $q.defer();
            var token = $auth.getToken();

            if (!$auth.isAuthenticated()) {
                $sessionStorage.$reset()
                return false;
            }
            var $userData = [];
            if (typeof $sessionStorage.userData != 'undefined') {
                userData = $sessionStorage.userData;
            }

            if (token) {
                var data = {
                    'user_code': ''+userData.id
                }

                $http.post(urlBase + '/user/referal', data, {
                    params: {},
                    headers: {'Authorization': 'Bearer ' + token}
                }).then(function (response) {
                    return deferred.resolve(response.data);
                }, function (response) {
                    if (typeof response.data.message != 'undefined') {
                        if (response.data.message.indexOf('Invalid access token') !== -1 || response.data.message.indexOf('Expired token') !== -1)
                            $rootScope.$emit('refreshToken', '');
                        return deferred.reject(response.data.message);
                    } else {
                        return deferred.reject("Data Loading Error");
                    }
                });
            }

            return deferred.promise;
        },
        getReferalCode: function () {
            if (!$auth.isAuthenticated()) $sessionStorage.$reset()
            var deferred = $q.defer();
            var token = $auth.getToken();
            getCurrentUser().then(function (userData) {
                console.log('getUserData')
                if (token) {
                    $http.get(urlBase + '/user/referal/' + userData.id, {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded','Authorization': 'Bearer ' + token}
                    }).then(function (response) {
                        return deferred.resolve(response.data);
                    }, function (response) {
                        if (typeof response.data.message != 'undefined') {
                            if (response.data.message.indexOf('Invalid access token') !== -1 || response.data.message.indexOf('Expired token') !== -1)
                                $rootScope.$emit('refreshToken', '');
                            return deferred.reject(response.data.message);
                        } else {
                            return deferred.reject("Data Loading Error");
                        }
                    });
                } else {
                    $timeout(function () {
                        $rootScope.$emit('refreshToken', '')
                        return deferred.reject("Invalid Token");
                    }, 0)
                }
            })
            return deferred.promise;
        },
        setReferal: function (e, token, shortName) {

            var deferred = $q.defer();

            var data = {
                'email': e,
                'token': token,
                'shortName' : shortName,
            }

            $http.post(urlBase + '/referal', data, {
                params: {},
                headers: {}
            }).then(function (response) {
                return deferred.resolve(response.data);
            }, function (response) {
                if (typeof response.data.message != 'undefined') {
                    if (response.data.message.indexOf('Invalid access token') !== -1 || response.data.message.indexOf('Expired token') !== -1)
                        $rootScope.$emit('refreshToken', '');
                    return deferred.reject(response.data.message);
                } else {
                    return deferred.reject("Data Loading Error");
                }
            });

            return deferred.promise;
        },
        getReferal: function () {
            if (!$auth.isAuthenticated()) $sessionStorage.$reset()
            var deferred = $q.defer();
            var token = $auth.getToken();

            getCurrentUser().then(function (userData) {
                if (token) {

                    $http.get(urlBase + '/referal/' + userData.id, {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded','Authorization': 'Bearer ' + token}
                    }).then(function (response) {
                        return deferred.resolve(response.data);
                    }, function (response) {
                        if (typeof response.data.message != 'undefined') {
                            if (response.data.message.indexOf('Invalid access token') !== -1 || response.data.message.indexOf('Expired token') !== -1)
                                $rootScope.$emit('refreshToken', '');
                            return deferred.reject(response.data.message);
                        } else {
                            return deferred.reject("Data Loading Error");
                        }
                    });
                } else {
                    $timeout(function () {
                        $rootScope.$emit('refreshToken', '')
                        return deferred.reject("Invalid Token");
                    }, 0)
                }
            })
            return deferred.promise;
        },
    };
})
.factory('ClaimService', function ($rootScope, $http, $q, $location, Restangular, $auth, $sessionStorage, $timeout) {
    var urlBase = api_host + '/public/index.php';
    var userData = {};

    return {
        setClaim: function (btcaddress, amount, currency, txhash, rate) {
            var deferred = $q.defer();
            var token = $auth.getToken();

            if (!$auth.isAuthenticated()) {
                $sessionStorage.$reset()
                return false;
            }
            var $userData = [];
            if (typeof $sessionStorage.userData != 'undefined') {
                userData = $sessionStorage.userData;
            }

            if (token) {
                var data = {
                    'btcaddress': btcaddress,
                    'amount': amount,
                    'currency': currency,
                    'txhash': txhash,
                    'rate': ''+rate,
                    'ntc' : ''+(amount*rate/0.8)
                }

                $http.post(urlBase + '/btctransfer', data, {
                    params: {},
                    headers: {'Authorization': 'Bearer ' + token}
                }).then(function (response) {
                    return deferred.resolve(response.data);
                }, function (response) {
                    if (typeof response.data.message != 'undefined') {
                        if (response.data.message.indexOf('Invalid access token') !== -1 || response.data.message.indexOf('Expired token') !== -1)
                            $rootScope.$emit('refreshToken', '');
                        return deferred.reject(response.data.message);
                    } else {
                        return deferred.reject("Data Loading Error");
                    }
                });
            }

            return deferred.promise;
        },
        getClaim: function (claimId) {
            if (!$auth.isAuthenticated()) $sessionStorage.$reset()
            var deferred = $q.defer();
            var token = $auth.getToken();

            if (token) {

                $http.get(urlBase + '/btctransfer/' + claimId, {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded','Authorization': 'Bearer ' + token}
                }).then(function (response) {
                    $sessionStorage.profileData = response.data;
                    $rootScope.profileData = response.data;
                    return deferred.resolve(response.data);
                }, function (response) {
                    if (typeof response.data.message != 'undefined') {
                        if (response.data.message.indexOf('Invalid access token') !== -1 || response.data.message.indexOf('Expired token') !== -1)
                            $rootScope.$emit('refreshToken', '');
                        return deferred.reject(response.data.message);
                    } else {
                        return deferred.reject("Data Loading Error");
                    }
                });
            } else {
                $timeout(function () {
                    $rootScope.$emit('refreshToken', '')
                    return deferred.reject("Invalid Token");
                }, 0)
            }
            return deferred.promise;
        },

    };
})
.factory('ActivityService', function () {
    return {
        /**
         *
         * @param $type warning, success, danger, default: info
         * @param $message
         * @param $url
         */
        notify: function ($type, $message, $url) {
            var icon = 'fa fa-info-circle';
            switch ($type) {
                case 'warning' :
                    icon = 'fa fa-warning';
                    break;
                case 'success' :
                    icon = 'fa fa-check';
                    break;
                case 'danger' :
                    icon = 'fa fa-times';
                    break;
                default :
                    '';
            }
            var $from = 'bottom';
            var $align = 'center';

            jQuery.notify({
                    icon: icon || '',
                    message: $message,
                    url: $url || ''
                },
                {
                    element: 'body',
                    type: $type || 'info',
                    allow_dismiss: true,
                    newest_on_top: true,
                    showProgressbar: false,
                    placement: {
                        from: $from || 'top',
                        align: $align || 'right'
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
        }
    }
})
//CryptoCompare Service
.factory('CurrencyService', function ($rootScope, $http, $q, $location, Restangular, $auth, $sessionStorage, $timeout) {
    var urlBase = api_host + '/public/index.php';
    var userData = {};
    return {
        getPrice: function (_from, _to) {
            var deferred = $q.defer();
            var token = $auth.getToken();

            $http.get(urlBase + '/external/currency', {
                headers : {
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                $sessionStorage.priceData = response.data;
                $rootScope.priceData = response.data;
                return deferred.resolve(response.data);
            }, function (response) {
            });

            return deferred.promise;
        }
    }
})