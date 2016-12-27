(function ()
{
    'use strict';

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController()
    {
        var vm = this;

      vm.about ={
        general :{
          "gender":"Male",
          "birthday":"21st September,1992",
          "locations":["Bangalore"],
          "about":"Born in Vijayawada, work in Bangalore"
        },
        work :{
          "occupation":"Software Engineer",
          "skills":"C,C++",
           "jobs":[ {"company":"Kaybus","date":"20th August,2014"}]
        },
        contact:{
          "address":"BTM 1st stage,Banaglore",
          "tel":["+91 9066651549"]
        }
      }
      // Methods

        //////////
    }

})();
