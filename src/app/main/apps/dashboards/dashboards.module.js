(function ()
{
  'use strict';

  angular
    .module('app.dashboards', [
      'app.dashboards.project',
      'app.dashboards.server',
      'app.dashboards.analytics'
    ])
    .config(config);

  /** @ngInject */
  function config(msNavigationServiceProvider,$translatePartialLoaderProvider)
  {

    msNavigationServiceProvider.saveItem('fuse', {
      title : 'ANALYTICS',
      group : true,
      weight: 1
    });

    msNavigationServiceProvider.saveItem('fuse.server', {
      title: 'Health Insights',
      icon  : 'icon-chart-areaspline',
      state: 'app.dashboards_project'
    });

    $translatePartialLoaderProvider.addPart('app/main/apps/dashboards/project/i18n');

  }

})();
