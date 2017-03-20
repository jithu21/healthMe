(function ()
{
    'use strict';

    angular
        .module('app.profile')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController($rootScope)
    {
        var vm = this;


        if($rootScope.name == "srivathsa"){
          vm.about ={
            general :{
              "gender":"Male",
              "birthday":new Date().toISOString().substring(0, 10),
              "locations":["Bangalore"],
              "about":"Born in Banglore"
            },
            work :{
              "occupation":"Software Engineer",
              "skills":"java",
              "jobs":[ {"company":"smartron","date":"1sth April,2016"}]
            },
            contact:{
              "address":"meenakshi 1st stage,Banaglore",
              "tel":"+91 9916109461",
              "email":"sri@gmail.com"
            }
          }

        }else{
          vm.about ={
            general :{
              "gender":"Male",
              "birthday":new Date().toISOString().substring(0, 10),
              "locations":["Bangalore"],
              "about":"Born in Vijayawada"
            },
            work :{
              "occupation":"Software Engineer",
              "skills":"C,C++",
              "jobs":[ {"company":"Kaybus","date":"21th August,2014"}]
            },
            contact:{
              "address":"BTM 1st stage,Banaglore",
              "tel":"+91 9066651549",
              "email":"guptaa.pavan@gmail.com"
            }
          }

        }

      // Methods

        //////////
    }

})();
