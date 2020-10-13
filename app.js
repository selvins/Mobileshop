// main app module
app = angular.module('shoping', ['ngRoute','ui.bootstrap.tooltip']);
app.controller('bodyController', ['$scope','$rootScope','$window',
	function ($scope,$rootScope,$window) {
		$scope.initNew = function () {
			$scope.currentTimeIs = new Date().getHours();
			if ($scope.currentTimeIs >= 6) {
				$scope.bodyDarkLight = "bg-white";
			}
			else {
				$scope.bodyDarkLight = "bg-darken-gray";
			}
		}
		$rootScope.widthNew = $window.innerWidth;
        function onResize() {
            // uncomment for only fire when $window.innerWidth change   
            if ($rootScope.widthNew !== $window.innerWidth) {
                $rootScope.widthNew = $window.innerWidth;
                $rootScope.$digest();
            }
        };
        // $scope.widthNew = $window.innerWidth
        angular.element($window).on('resize', onResize);
	}
]);

app.filter('safeHtml', function ($sce) {
	return function (val) {
		return $sce.trustAsHtml(val);
	};
});
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("serviceSort");
  // console.log(x);
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


app.directive('navBar', function () {
  return {
    templateUrl: 'app/directive/view/navbar.html',
    controller  : 'navbarController'
  }
});
app.controller('mainCtrl', ['$rootScope', '$route', '$routeParams', '$location','$window',
    function MainCtrl($rootScope, $route, $routeParams,$window, $location) {
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;
        $rootScope.showNav = true;
        
    }
]);
// (['$scope', '$routeProvider', '$locationProvider', function ($scope, $routeProvider, $locationProvider) 

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {

                templateUrl: 'app/component/view/home.html',
                controller: 'homeController'
            })
            .when('/shop', {

                templateUrl: 'app/component/view/shop.html',
                controller: 'shopController'
            })
            .when('/detail', {

                templateUrl: 'app/component/view/detail.html',
                controller: 'detailController'
            })
            .when('/cart', {

                templateUrl: 'app/component/view/cart.html',
                controller: 'cartController'
            })
            .when('/compare', {

                templateUrl: 'app/component/view/compare.html',
                controller: 'compareController'
            });

    }
]);
function clock() { // We create a new Date object and assign it to a variable called "time".
        var time = new Date(),

            // Access the "getHours" method on the Date object with the dot accessor.
            hours = time.getHours(),

            // Access the "getMinutes" method with the dot accessor.
            minutes = time.getMinutes(),


            seconds = time.getSeconds();

        document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
        // document.querySelectorAll('.clock2')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

        function harold(standIn) {
            if (standIn < 10) {
                standIn = '0' + standIn
            }
            return standIn;
        }
        $(window).ready(function () {
            /* if time is bitween 6am to 6pm text color will be dark */
            if (hours >= 6 && hours <= 18) {
                // console.log('its day ' + "and time is" + " " + hours + ":" + minutes);
                $('#showTime').addClass('text-white');
                $('#showTime').removeClass('text-success');
            }
            /* on other time text color will be green */
            else {
                console.log('its night');
                $('#showTime').addClass('text-success');
                $('#showTime').removeClass('text-white');
            };
        });
    };
    setInterval(clock, 1000);
	app.directive('navBar', function () {
  return {
    templateUrl: 'app/directive/view/navbar.html',
    controller  : 'navbarController'
  }
});
app.controller('mainCtrl', ['$rootScope', '$route', '$routeParams', '$location','$window',
    function MainCtrl($rootScope, $route, $routeParams,$window, $location) {
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;
        $rootScope.showNav = true;
        
    }
]);
// (['$scope', '$routeProvider', '$locationProvider', function ($scope, $routeProvider, $locationProvider) 

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {

                templateUrl: 'app/component/view/home.html',
                controller: 'homeController'
            })
            .when('/shop', {

                templateUrl: 'app/component/view/shop.html',
                controller: 'shopController'
            })
            .when('/detail', {

                templateUrl: 'app/component/view/detail.html',
                controller: 'detailController'
            })
            .when('/cart', {

                templateUrl: 'app/component/view/cart.html',
                controller: 'cartController'
            })
            .when('/compare', {

                templateUrl: 'app/component/view/compare.html',
                controller: 'compareController'
            });

    }
]);
// app.run(function ($rootScope, $location, mobDetail, newCart, newCompare) {
//     debugger;
//     // register listener to watch route changes
//     $rootScope.$on("$routeChangeStart", function (event, next, current) {
//         if (mobDetail.all.length === 0 || newCart.list.length === 0 || newCompare.list.length === 0 && $location.$$path === "/detail" || $location.$$path === "/cart" || $location.$$path === "/compare") {
//             // no logged user, we should be going to #login
//             // not going to #login, we should redirect now
//             // $location.$$path = "/";
//             $location.url("/");
//         }
//         break;
//     });
// });filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("serviceSort");
  // console.log(x);
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


app.filter('unique', function() {

    return function(arr, targetField) {
        var values = [],
            i,
            unique,
            l = arr.length,
            results = [],
            obj;
        for (i = 0; i < arr.length; i++) {

            obj = arr[i];
            unique = true;
            for (v = 0; v < values.length; v++) {
                if (obj[targetField] == values[v]) {
                    unique = false;
                }
            }
            if (unique) {
                values.push(obj[targetField]);
                results.push(obj);
            }

        }
        return results;
    };
})
app.controller('mainCtrl', ['$rootScope', '$route', '$routeParams', '$location','$window',
    function MainCtrl($rootScope, $route, $routeParams,$window, $location) {
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;
        $rootScope.showNav = true;
        
    }
]);
// (['$scope', '$routeProvider', '$locationProvider', function ($scope, $routeProvider, $locationProvider) 

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {

                templateUrl: 'app/component/view/home.html',
                controller: 'homeController'
            })
            .when('/shop', {

                templateUrl: 'app/component/view/shop.html',
                controller: 'shopController'
            })
            .when('/detail', {

                templateUrl: 'app/component/view/detail.html',
                controller: 'detailController'
            })
            .when('/cart', {

                templateUrl: 'app/component/view/cart.html',
                controller: 'cartController'
            })
            .when('/compare', {

                templateUrl: 'app/component/view/compare.html',
                controller: 'compareController'
            });

    }
]);
// app.run(function ($rootScope, $location, mobDetail, newCart, newCompare) {
//     debugger;
//     // register listener to watch route changes
//     $rootScope.$on("$routeChangeStart", function (event, next, current) {
//         if (mobDetail.all.length === 0 || newCart.list.length === 0 || newCompare.list.length === 0 && $location.$$path === "/detail" || $location.$$path === "/cart" || $location.$$path === "/compare") {
//             // no logged user, we should be going to #login
//             // not going to #login, we should redirect now
//             // $location.$$path = "/";
//             $location.url("/");
//         }
//         break;
//     });
// });
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("serviceSort");
  // console.log(x);
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



app.filter('unique', function() {

    return function(arr, targetField) {
        var values = [],
            i,
            unique,
            l = arr.length,
            results = [],
            obj;
        for (i = 0; i < arr.length; i++) {

            obj = arr[i];
            unique = true;
            for (v = 0; v < values.length; v++) {
                if (obj[targetField] == values[v]) {
                    unique = false;
                }
            }
            if (unique) {
                values.push(obj[targetField]);
                results.push(obj);
            }

        }
        return results;
    };
})
app.directive('navBar', function () {
  return {
    templateUrl: 'app/directive/view/navbar.html',
    controller  : 'navbarController'
  }
});