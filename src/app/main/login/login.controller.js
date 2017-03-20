(function ()
{
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginV2Controller);

    /** @ngInject */
    function LoginV2Controller($scope,Auth,$location,$rootScope)
    {
        // Data

        // Methods

      var vm = this;
       vm.signIn=signIn;
        function signIn(formDetail) {
        var email, password="";
         email=formDetail.email;
         password= formDetail.password;
        if (email && email.length > 0 && password && password.length > 0 && email == "sri@meduworks.com") {
          Auth.login({'email': email, 'password': password}).then(function (user) {
            $scope.currentUser = user;
            $rootScope.name = "Suhasini M";
            $rootScope.age = 2;
            $rootScope.petname = "suhasini";
            $location.path('/dashboard-project');
          }, function (error) {
            $rootScope.name = "Suhasini M";
            $rootScope.age = 2;
            $rootScope.petname = "suhasini";
            $location.path('/dashboard-project');
          });
        }else if (email && email.length > 0 && password && password.length > 0 &&  email == "jithu@meduworks.com") {
            Auth.login({'email': email, 'password': password}).then(function (user) {
              $scope.currentUser = user;
              $rootScope.name = "Jithendranath Gupta";
              $rootScope.age = 55;
              $rootScope.petname = "jithu";
              $location.path('/dashboard-project');
            }, function (error) {
              $rootScope.name = "Jithendranath Gupta";
              $rootScope.age = 55;
              $rootScope.petname = "jithu";
              $location.path('/dashboard-project');
            });
          }
        else {
          console.log('Length of email or password is not greater than 0');
          console.log($location);
        }
      };
    }
})();
