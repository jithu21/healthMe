(function ()
{
    'use strict';

    angular
        .module('app.sample2', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider,msNavigationServiceProvider)
    {
        $stateProvider.state('app.sample2', {
            url    : '/health/nearme',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/sample2/sample2.html',
                    controller : 'prescriptionController as vm'
                }
            },
            resolve: {
                Employees: function (apiResolver)
                {
                    return [];
                }
            }
        });
      msNavigationServiceProvider.saveItem('fuse.sample2', {
        title : 'Near Me ',
        icon  : 'icon-google-maps',
        state : 'app.sample2'
      });
    }

})();
