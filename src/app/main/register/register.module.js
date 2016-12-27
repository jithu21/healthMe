(function ()
{
    'use strict';

    angular
        .module('app.register', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.register', {
            url      : '/health/register',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.register': {
                    templateUrl: 'app/main/register/register.html',
                    controller : 'RegisterV2Controller as vm'
                }
            },
            bodyClass: 'register-v2'
        });
        // Translate
        $translatePartialLoaderProvider.addPart('app/main/register');

        // Navigation
        //msNavigationServiceProvider.saveItem('pages.auth.register-v2', {
        //    title : 'Register v2',
        //    state : 'app.pages_auth_register-v2',
        //    weight: 4
        //});
    }

})();