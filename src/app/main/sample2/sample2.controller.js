(function ()
{
    'use strict';

    angular
        .module('app.sample2')
        .controller('prescriptionController', prescriptionController);

    /** @ngInject */
    function prescriptionController()
    {
        var vm = this;

      vm.prescriptions=[
        {"hospitalName":"Apollo",
        "doctorName":"Lakshmi", "visitDate":"21/01/2016", "sicknessReason":"High Fever"},
        {"hospitalName":"Manipal",
          "doctorName":"Jithendra", "visitDate":"21/02/2016","sicknessReason":"Cough & Cold"},
        {"hospitalName":"KIMS",
          "doctorName":"Kirthi", "visitDate":"21/03/2016","sicknessReason":"Gasteric"},
        {"hospitalName":"SAKRA",
          "doctorName":"Vipin", "visitDate":"21/04/2016", "sicknessReason":"Vomtings"},
        {"hospitalName":"Nagarjuna",
          "doctorName":"Prasath", "visitDate":"21/05/2016", "sicknessReason":""},
        {"hospitalName":"King Jorge",
          "doctorName":"Vijay", "visitDate":"21/06/2016", "sicknessReason":""}
      ];

      vm.states =[
        "Karnataka",
        "Andhra Pradesh",
        "Telangana",
        "Gujarat"
      ]


      vm.orders_food= function(time,user_id,event, event_type, product_id, price, phrase, order_id) {
        $http({
          method: 'GET',
          url: '',
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description'
          }
        }).success(function (data) {
          if (data) {

          }
        }).error(function (data, status, headers, config) {

        });
      };

      vm.orders_location= function(time,user_id,event, event_type, product_id, price, phrase, order_id) {
        $http({
          method: 'GET',
          url: '',
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description'
          }
        }).success(function (data) {
          if (data) {

          }
        }).error(function (data, status, headers, config) {

        });
      };



      vm.promotions_food= function(time,user_id,event, event_type, product_id, price, phrase, order_id) {
        $http({
          method: 'GET',
          url: '',
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description'
          }
        }).success(function (data) {
          if (data) {

          }
        }).error(function (data, status, headers, config) {

        });
      };


      vm.promotions_location= function(time,user_id,event, event_type, product_id, price, phrase, order_id) {
        $http({
          method: 'GET',
          url: '',
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description'
          }
        }).success(function (data) {
          if (data) {

          }
        }).error(function (data, status, headers, config) {

        });
      };


      // Data
        vm.users = [ { name:"Jithendra", "role":"Admin", "createdBy":"Jithendra", "createdAt":"2015/12/21"},
          { name:"Prasath", "role":"Admin", "createdBy":"Jithendra", "createdAt":"2015/12/22"},
          { name:"Vivek", "role":"User", "createdBy":"Jithendra", "createdAt":"2015/12/22"},
          { name:"Ganesh", "role":"User", "createdBy":"Prasath", "createdAt":"2015/12/22"},
          { name:"Ram", "role":"User", "createdBy":"Jithendra", "createdAt":"2015/12/23"},
          { name:"Gerard", "role":"User", "createdBy":"Prasath", "createdAt":"2015/12/24"},
          { name:"Rahul", "role":"Admin", "createdBy":"Prasath", "createdAt":"2015/12/21"},
          { name:"Rakesh", "role":"User", "createdBy":"Jithendra", "createdAt":"2015/12/24"},
          { name:"Rajeev", "role":"User", "createdBy":"Jithendra", "createdAt":"2015/12/26"},
          { name:"Sneha", "role":"User", "createdBy":"Jithendra", "createdAt":"2015/12/27"},
          { name:"Jithendra", "role":"Admin", "createdBy":"Jithendra", "createdAt":"2015/12/21"}];

        vm.dtOptions = {
            dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            pagingType: 'simple',
            autoWidth : false,
            responsive: true
        };
      vm.pieChart = {
        options: {
          chart: {
            type              : 'pieChart',
            height            : 500,
            x                 : function (d)
            {
              return d.key;
            },
            y                 : function (d)
            {
              return d.y;
            },
            showLabels        : true,
            transitionDuration: 500,
            labelThreshold    : 0.01,
            legend            : {
              margin: {
                top   : 5,
                right : 35,
                bottom: 5,
                left  : 0
              }
            }
          }
        },
        data   : [
          {
            key: 'North',
            y  : 20
          },
          {
            key: 'South',
            y  : 30
          },
          {
            key: 'Italian',
            y  : 10
          },
          {
            key: 'Chineese',
            y  : 5
          },
          {
            key: 'American',
            y  : 20
          }
        ]
      };
      vm.pieChart1 = {
        options: {
          chart: {
            type              : 'pieChart',
            height            : 500,
            x                 : function (d)
            {
              return d.key;
            },
            y                 : function (d)
            {
              return d.y;
            },
            showLabels        : true,
            transitionDuration: 500,
            labelThreshold    : 0.01,
            legend            : {
              margin: {
                top   : 5,
                right : 35,
                bottom: 5,
                left  : 0
              }
            }
          }
        },
        data   : [
          {
            key: 'Karnataka',
            y  : 20
          },
          {
            key: 'Tamil Nadu',
            y  : 30
          },
          {
            key: 'Kerala',
            y  : 10
          },
          {
            key: 'Delhi',
            y  : 5
          },
          {
            key: 'Maharastra',
            y  : 20
          }
        ]
      };

      vm.widget11 = {
        title    : "Schools",
        table    :   {
        "columns": [
          {
            "title": ""
          },
          {
            "title": "Name"
          },
          {
            "title": "Position"
          },
          {
            "title": "Office"
          },
          {
            "title": "E-Mail"
          },
          {
            "title": "Phone"
          }
        ],
          "rows": [
          [
            "james.jpg",
            "Jack Gilbert",
            "Design Manager",
            "Johor Bahru",
            "jgilbert48@mail.com",
            "+16 298 032 7774"
          ],
          [
            "katherine.jpg",
            "Kathy Anderson",
            "Recruiting Manager",
            "Solţānābād",
            "kanderson49@mail.com.br",
            "+23 572 311 1136"
          ],
          [
            "andrew.jpg",
            "Mark Turner",
            "Recruiting Manager",
            "Neftegorsk",
            "mturner4a@mail.com",
            "+01 139 803 9263"
          ],
          [
            "jane.jpg",
            "Kathryn Martinez",
            "Director of Sales",
            "Palekastro",
            "kmartinez4b@mail.com",
            "+25 467 022 5393"
          ],
          [
            "alice.jpg",
            "Annie Gonzales",
            "Actuary",
            "Candon",
            "agonzales4c@mail.edu",
            "+99 891 619 7138"
          ],
          [
            "vincent.jpg",
            "Howard King",
            "Human Resources",
            "Bergen op Zoom",
            "hking4d@mail.gov",
            "+46 984 348 1409"
          ]
        ]
    },
        dtOptions: {
          dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
          pagingType: 'simple',
          autoWidth : false,
          responsive: true,
          order     : [1, 'asc'],
          columnDefs: [
            {
              width    : '40',
              orderable: false,
              targets  : [0]
            },
            {
              width  : '20%',
              targets: [1, 2, 3, 4, 5]
            }
          ]
        }
      };



      // Methods

        //////////
    }

})();
