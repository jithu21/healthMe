(function ()
{
    'use strict';

    angular
        .module('app.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($rootScope, $mdSidenav, $translate, $mdToast)
    {
        var vm = this;

        // Data
        vm.bodyEl = angular.element('body');
        $rootScope.global = {
            search: ''
        };

        // Methods
        vm.toggleSidenav = toggleSidenav;
        vm.logout = logout;
        vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;

        //////////


        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }

        /**
         * Logout Function
         */
        function logout()
        {

        }

        /**
         * Toggle horizontal mobile menu
         */
        function toggleHorizontalMobileMenu()
        {
            vm.bodyEl.toggleClass('ms-navigation-horizontal-mobile-menu-active');
        }
    }

})();
