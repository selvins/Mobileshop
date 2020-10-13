app.controller('homeController', ['$scope', '$http', '$log', '$location', 'mobDetail', 'newCart',
    function ($scope, $http, $log, $location, mobDetail, newCart) {
        $scope.mgs = "this is home";
        $scope.displayMode = 'none'; // default value

        $scope.$watch('displayMode', function (value) {
            switch (value) {
                case 'mobile':
                console.log("fdsgd")
                case 'tablet':
                // do stuff for tablet mode
                // and so on
            }
        });
    }
]);
app.controller('shopController', ['$scope', '$rootScope', '$http', '$log', '$filter', '$location', 'mobDetail', 'filterDetail', 'filterFilter', 'productDetail', 'newCart', 'newCompare', 'notifications',
    function ($scope, $rootScope, $http, $log, $location, $filter, mobDetail, filterDetail, filterFilter, productDetail, newCart, newCompare, notifications) {
        /*-----------------  conplet mobile json --------------------*/
        $scope.mobileDetails = [];
        $scope.filterMobile = [];
        mobDetail.all().then(function (resp) {
            $scope.mobileDetails = resp;
            $scope.filterMobile = resp;
        });

        /* conplet mobile json end */

        // $scope.cartFilter = [];
        // filterDetail.all().then(function (responce) {
        //     $scope.cartFilter = responce;
        // });

        /*----------------- add product to cart --------------------*/
        /* empty cart*/
        $scope.cart = [];
        /* cart qty count*/
        $scope.totalInCart = "";
        $scope.addmobile = function (mobileToAdd) {
            newCart.list.push(angular.copy(mobileToAdd));
            $scope.totalInCart = newCart.list.length;
        };
        /* //////////////////// cart end ///////////////////*/

        /*----------------- add product to compare --------------------*/
        // /* empty cart*/
        // $scope.mobileCompare = [];
        // /* cart qty count*/
        $scope.totalInComp = "0";
        $scope.toggleSelection = function toggleSelection(compareSelected) {
            var idx = newCompare.list.indexOf(compareSelected);
            // is currently selected
            if (idx > -1) {
                newCompare.list.splice(idx, 1);
            }
            // is newly selected
            else {
                newCompare.list.push(compareSelected);
            }
            // newCompare.list = $scope.mobileCompare;
            $scope.totalInComp = newCompare.list.length;
        };
        /* //////////////////// compare end ///////////////////*/

        /*----------------- view product detail --------------------*/
        /* empty detail*/
        $scope.detailView = [];
        /* push selected product in detail service*/
        $scope.moreDetail = function (mobileToView) {
            $scope.detailView.push(angular.copy(mobileToView));
            productDetail.list = $scope.detailView;
        };
        /* desable clicked add to cart button */
        $scope.added = function (index) {
            $scope.mobileDetails[index].disabled = true;
        }

        /* //////////////////// product detail end ///////////////////*/

        /*----------------- view notification --------------------*/

        $scope.notify = notifications;
        $scope.closeAlert = function (item) {
            notifications.pop(item);
        }

        // [0] for type of notification
        // [1] for type header
        // [2] for type body
        // [3] for type icon

        $scope.info = function () {
            notifications.add({ type: 'info', title: 'some content for header', body: 'some comment', icon: 'info' });
        }

        $scope.success = function () {
            notifications.add({ type: 'success', title: 'Added To Cart', body: '', icon: 'check' });
        }

        $scope.warning = function () {
            notifications.add({ type: 'warning', title: 'Ghost to Alfa', body: 'Negative', icon: 'exclamation' });
        }

        $scope.error = function () {
            notifications.add({ type: 'danger', title: 'Error Header', body: 'Error Body', icon: 'times' });
        }
        /* //////////////////// notification end ///////////////////*/

        /* sort by filter */
        $scope.sortBy = ["price", "-price", "brand", "camera", "-rateing"];
        /* sort by filter */

        /* screen width count */

        $scope.resizeIt = function () {
            $scope.screenSize = $rootScope.widthNew;
            if ($scope.screenSize >= 1159) {
                $scope.mainShopDiv = "col-lg-10 col-xl-10 col-sm-12";
            }
            else {
                $scope.mainShopDiv = "col-lg-12 col-xl-12 col-sm-12";
            }


            if ($scope.screenSize >= 1500) {
                $scope.prodClassImg = "col-1 col-xl-2 col-lg-2 col-md-2 "
            }
            else if ($scope.screenSize >= 1278) {
                $scope.prodClassImg = "col-2 col-xl-1 col-lg-2 col-md-2 productCardWrapper"
            }
            else {
                $scope.prodClassImg = "col-2 col-xl-2 col-lg-2 col-md-2"
            }
            if ($scope.screenSize >= 965) {
            }

            if ($scope.screenSize >= 991) {
                // $scope.productDiv = "col-12 padding05";
                $scope.btnAdd = "paddingLeft35 paddingTop5"
                $scope.btnBuy = "paddingLeft35"
                $scope.btnBlock = "btn"
                $scope.mainPrice = "col-12 paddingTop10pr";
            }
            else if ($scope.screenSize < 991) {
                // $scope.productDiv = "col-6 padding05";
                $scope.btnAdd = "";
                $scope.btnBuy = "";
                $scope.btnBlock = "btn-block btn btn-sm";
                $scope.mainPrice = "col-12";
            }
            if ($scope.screenSize <= 770) {
                $scope.prodClassDetail = "col-10 col-xl-8 col-lg-8 col-md-10"
            }
            else {
                $scope.prodClassDetail = "col-8 col-xl-8 col-lg-8 col-md-8"
            }
        }
        $(window).resize(function () {
            $scope.screenSize = $rootScope.widthNew;
            if ($scope.screenSize >= 1159) {
                $scope.mainShopDiv = "col-lg-10 col-xl-10 col-sm-12";

            }
            else {
                $scope.mainShopDiv = "col-lg-12 col-xl-12 col-sm-12";

            }
            if ($scope.screenSize >= 1700) {
                $scope.prodClassImg = "col-1 col-xl-1 col-lg-2 col-md-2 "
            }
            else if ($scope.screenSize >= 1278) {
                $scope.prodClassImg = "col-2 col-xl-2 col-lg-2 col-md-2 paddingLeft4"
            }
            else if ($scope.screenSize >= 829) {
                $scope.prodClassImg = "col-2 col-xl-2 col-lg-2 col-md-2"
            }
            else {

            }

            if ($scope.screenSize >= 991) {
                // $scope.productDiv = "col-12 padding05";
                $scope.btnAdd = "paddingLeft35 paddingTop5"
                $scope.btnBuy = "paddingLeft35"
                $scope.btnBlock = "btn";
                $scope.mainPrice = "col-12 paddingTop10pr";
            }
            else if ($scope.screenSize < 991) {
                // $scope.productDiv = "col-6 padding05";
                $scope.btnAdd = "";
                $scope.btnBuy = "";
                $scope.btnBlock = "btn-block btn btn-sm";
                $scope.mainPrice = "col-12";
            }
            if ($scope.screenSize <= 770) {
                $scope.prodClassDetail = "col-10 col-xl-8 col-lg-8 col-md-10"
            }
            else {
                $scope.prodClassDetail = "col-8 col-xl-8 col-lg-8 col-md-8"
            }
        });


        /* screen width count */

        window.mobilecheck = function () {
            var check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };
        console.log(mobilecheck());

        // filter new
        $scope.selectedFilters = [];
        $scope.brandFilter = [];
        $scope.cameraFilter = [];
        $scope.ramFilter = [];
        var countB = 0;
        var countC = 0;
        var countR = 0;
        $scope.brandCount = 0;
        $scope.cameraCount = 0;
        $scope.ramCount = 0;
        $scope.lastFilter = function (valueSelected, selected, typeOfFilter) {

            if (selected === false) {

                $scope.selectedFilters.push(valueSelected);

                switch (typeOfFilter) {
                    case 'brand':
                        countB++;
                        for (var i = 0; i < $scope.filterMobile.length; i++) {
                            if ($scope.filterMobile[i].brand === valueSelected) {
                                $scope.brandFilter.push($scope.filterMobile[i]);
                            }
                        }
                        break;
                    case 'camera':
                        countC++;
                        for (var i = 0; i < $scope.filterMobile.length; i++) {
                            if ($scope.filterMobile[i].camera === valueSelected) {
                                $scope.cameraFilter.push($scope.filterMobile[i]);
                            }
                        }
                        break;
                    case 'ram':
                        countR++;
                        for (var i = 0; i < $scope.filterMobile.length; i++) {
                            if ($scope.filterMobile[i].ram === valueSelected) {
                                $scope.ramFilter.push($scope.filterMobile[i]);
                            }
                        }
                        break;
                }

                $scope.brandCount = countB;
                $scope.cameraCount = countC;
                $scope.ramCount = countR;

            }
            else {

                for (var i = $scope.selectedFilters.length - 1; i >= 0; i--) {
                    if ($scope.selectedFilters[i] === valueSelected) {
                        $scope.selectedFilters.splice(i, 1);
                    }
                }

                switch (typeOfFilter) {
                    case 'brand':
                        countB--;
                        for (var i = $scope.brandFilter.length - 1; i >= 0; i--) {
                            if ($scope.brandFilter[i].brand === valueSelected) {
                                $scope.brandFilter.splice(i, 1);
                            }
                        }
                        break;
                    case 'camera':
                        countC--;
                        for (var i = $scope.cameraFilter.length - 1; i >= 0; i--) {
                            if ($scope.cameraFilter[i].camera === valueSelected) {
                                $scope.cameraFilter.splice(i, 1);
                            }
                        }
                        break;
                    case 'ram':
                        countR--;
                        for (var i = $scope.ramFilter.length - 1; i >= 0; i--) {
                            if ($scope.ramFilter[i].ram === valueSelected) {
                                $scope.ramFilter.splice(i, 1);
                            }
                        }
                        break;
                }


                $scope.brandCount = countB;
                $scope.cameraCount = countC;
                $scope.ramCount = countR;

            }
            if (countB === 0 && countC === 0 && countR === 0) {
                $scope.mobileDetails = [];
                for (var i = 0; i < $scope.filterMobile.length; i++) {
                    $scope.mobileDetails.push($scope.filterMobile[i]);
                }

            }
            else if (countB > 0 && countC === 0 && countR === 0 || countB === 0 && countC > 0 && countR === 0 || countB === 0 && countC === 0 && countR > 0) {
                console.log("one property selected")
                /* filter brand */
                if (countB > 0) {
                    $scope.mobileDetails = [];
                    for (var i = 0; i < $scope.brandFilter.length; i++) {
                        $scope.mobileDetails.push($scope.brandFilter[i]);
                    }
                }
                /* filter camera */
                else if (countC > 0) {
                    $scope.mobileDetails = [];
                    for (var i = 0; i < $scope.cameraFilter.length; i++) {
                        $scope.mobileDetails.push($scope.cameraFilter[i]);
                    }
                }
                /* filter ram */
                else if (countR > 0) {
                    $scope.mobileDetails = [];
                    for (var i = 0; i < $scope.ramFilter.length; i++) {
                        $scope.mobileDetails.push($scope.ramFilter[i]);
                    }
                }
            }
            else if (countB > 0 && countC > 0 && countR === 0 || countB === 0 && countC > 0 && countR > 0 || countB > 0 && countC === 0 && countR > 0) {
                console.log("two property selected")
                /* filter brand and camera */
                if (countB > 0 && countC > 0) {
                    $scope.mobileDetails = [];
                    $scope.tempBrandCamera = $scope.brandFilter.filter(o1 => $scope.cameraFilter.some(o2 => o1.id === o2.id));

                    for (var i = 0; i < $scope.tempBrandCamera.length; i++) {
                        $scope.mobileDetails.push($scope.tempBrandCamera[i]);
                    }
                }
                /* filter camera and ram */
                if (countC > 0 && countR > 0) {
                    $scope.mobileDetails = [];
                    $scope.tempCameraRam = $scope.cameraFilter.filter(o1 => $scope.ramFilter.some(o2 => o1.id === o2.id));

                    for (var i = 0; i < $scope.tempCameraRam.length; i++) {
                        $scope.mobileDetails.push($scope.tempCameraRam[i]);
                    }
                }
                /* filter brand and ram */
                if (countB > 0 && countR > 0) {
                    $scope.mobileDetails = [];
                    $scope.tempBrandRam = $scope.brandFilter.filter(o1 => $scope.ramFilter.some(o2 => o1.id === o2.id));

                    for (var i = 0; i < $scope.tempBrandRam.length; i++) {
                        $scope.mobileDetails.push($scope.tempBrandRam[i]);
                    }
                }
            }
            else if (countB > 0 && countC > 0 && countR > 0) {
                console.log("three property selected")
                $scope.mobileDetails = [];
                $scope.tempBrandCamera = $scope.brandFilter.filter(o1 => $scope.cameraFilter.some(o2 => o1.id === o2.id));
                $scope.tempCameraRam = $scope.cameraFilter.filter(o1 => $scope.ramFilter.some(o2 => o1.id === o2.id));
                $scope.tempBrandRam = $scope.brandFilter.filter(o1 => $scope.ramFilter.some(o2 => o1.id === o2.id));

                $scope.brandCameraRam = $scope.tempBrandCamera.filter(o1 => $scope.tempCameraRam.some(o2 => o1.id === o2.id));
                $scope.RamBrandcamera = $scope.tempBrandRam.filter(o1 => $scope.tempBrandCamera.some(o2 => o1.id === o2.id));

                $scope.allSelected = $scope.brandCameraRam.filter(o1 => $scope.RamBrandcamera.some(o2 => o1.id === o2.id));

                for (var i = 0; i < $scope.allSelected.length; i++) {
                    $scope.mobileDetails.push($scope.allSelected[i]);
                }
            }

        }
    }
]);
app.controller('cartController', ['$scope', '$http', '$log', '$location', 'newCart','$filter','filterDetail', 'pinCode',
    function ($scope, $http, $log, $location, newCart,$filter,filterDetail, pinCode) {
        // debugger;
        $scope.cartShow = newCart.list;

        $scope.RemoveCart = function (item) {
            var index = $scope.cartShow.indexOf(item)
            $scope.cartShow.splice(index, 1);
        }

        // $scope.getTotal = function () {
        //     var total = reduce($scope.cart, function (sum, mobile) {
        //         return sum + $scope.getCost(mobile);
        //     }, 0);
        //     console.log('total: ' + total);
        //     return total;
        // };

        var findmobileById = function (cartShow, id) {
            return find(cartShow, function (carts) {
                return carts.id === id;
            });
        };
        $scope.tempScope = function (mobileAdd) {
            var found = findmobileById($scope.cart, mobileAdd.id);
            if (found) {
                found.qty += mobileAdd.qty;
            }
        }
        $scope.costByQty = '';
        $scope.getCost = function (carts) {
            $scope.costByQty = carts.qty * carts.price;
        };

        $scope.clearCart = function () {
            $scope.cartShow.length = 0;
        };

        $scope.addQty = function (carts) {
            return carts.qty + 1;
        }

        $scope.area = [];
        // Chapters  json data
        pinCode.all().then(function (response) {
            $scope.area = response;
            console.log($scope.area);
        });
       
        $scope.checkPin = "check";
        // for (var i = 0; i < $scope.dataBase.length; i++)
        $scope.pinCheck = function () {
        //    debugger;
            for (var j = 0; j < $scope.area.length; j++) {
                if ($scope.givePin == $scope.area[j]) {
                    $scope.checkPin = "avalable";
                    break;
                }
                $scope.checkPin = "Not avalable";
            }
            
        }
         
        $scope.totalPriceOfCart = function(){
            var total = 0;
            for(var i = 0; i < $scope.cartShow.length; i++){
                var carts = $scope.cartShow[i];
                total += (carts.price * carts.qty);
            }
            return total;
        }
    }

]);
app.controller('compareController', ['$scope', '$http', '$log', '$location', 'newCompare', '$filter',
    function ($scope, $http, $log, $location, newCompare, $filter) {
        // debugger;
        $scope.compareShow = newCompare.list;
    }]);
	app.controller('detailController', ['$scope', '$http', '$log', '$location', 'mobDetail', 'productDetail', 'newCart',
    function ($scope, $http, $log, $location, $filter, mobDetail, filterDetail, productDetail, newCart) {

        $scope.detailShow = mobDetail.list;
        console.log($scope.detailShow);
    }
]);
app.controller('navbarController', ['$scope', '$http', '$log', '$filter', '$location', 'mobDetail', 'productDetail',
    function ($scope, $http, $log, $location, $filter, mobDetail, productDetail) {
        $scope.detailView = [];
        $scope.moreDetail = function (mobileToView) {
            $scope.detailView.push(angular.copy(mobileToView));
            productDetail.list = $scope.detailView;
        };
        // create a message to display in view
        $scope.home = 'home';
        $scope.selected = '';
        $scope.created = false;

        $scope.mobileSearch = [];
        mobDetail.all().then(function (resp) {
            $scope.mobileSearch = resp;
        });
        $scope.currentTimeIs = "";
        $scope.init = function () {
            $scope.currentTimeIs = new Date().getHours();
            if ($scope.currentTimeIs >= 6 && $scope.currentTimeIs <= 20) {
                $scope.sunShine = "block";
                $scope.moonLight = "none";
                $scope.navbarDarkLight = "bg-purpal";
                $scope.navbarBrandDarkLight = "text-light";
                $scope.bgDarkLight = "bg-white";
                $scope.shopDarkLight = "text-dark bg-white";
                $scope.filterDarkLight = "bg-light text-dark";
                $scope.mobileDarklight = "alart-pad";
                $scope.addToCart = "btn-info";
                $scope.addedDayNight = "btn-success";
                
            }
            else {
                $scope.moonLight = "block";
                $scope.sunShine = "none";
                $scope.navbarDarkLight = "bg-dark";
                $scope.navbarBrandDarkLight = "text-light";
                $scope.bgDarkLight = "bg-black";
                $scope.searchDarkLight = "bg-dark";
                $scope.shopDarkLight = "text-light bg-lightenGray";
                $scope.filterDarkLight = "bg-dark text-light";
                $scope.mobileDarklight = "alart-pad-dark";
                $scope.addToCart = "btn-outline-info";
                $scope.addedDayNight = "btn-outline-success";

            }
        };
        $scope.dark = function () {
            $scope.moonLight = "block";
            $scope.sunShine = "none";
            $scope.navbarDarkLight = "bg-dark";
            $scope.navbarBrandDarkLight = "text-light";
            $scope.bgDarkLight = "bg-black";
            $scope.searchDarkLight = "bg-dark";
            $scope.shopDarkLight = "text-light bg-lightenGray";
            $scope.filterDarkLight = "bg-dark text-light";
            $scope.mobileDarklight = "alart-pad-dark";
            $scope.addToCart = "btn-outline-info";
            $scope.addedDayNight = "btn-outline-success";
        }
        $scope.light = function () {
            $scope.sunShine = "block";
            $scope.moonLight = "none";
            $scope.navbarDarkLight = "bg-purpal";
            $scope.navbarBrandDarkLight = "text-light";
            $scope.bgDarkLight = "bg-white";
            $scope.searchDarkLight = "bg-light";
            $scope.shopDarkLight = "text-dark bg-white";
            $scope.filterDarkLight = "bg-light text-dark";
            $scope.mobileDarklight = "alart-pad";
            $scope.addToCart = "btn-info";
            $scope.addedDayNight = "btn-success";
        }

        $scope.state = closed;
        $scope.change = function () {
            var filtered;
            filtered = $filter('filter')($scope.mobileSearch, $scope.query);
            return $scope.state = filtered.length > 0 ? opened : 'closed';
        };
        $scope.select = function (items) {
            $scope.selected = items;
            return $scope.state = closed;
        };
        return $scope.clear = function () {
            $scope.query = '';
            $scope.selected = '';
            return $scope.cleared = true;
        };
    }
]);

// app.directive('xngFocus', function () {
//     return function (scope, element, attrs) {
//         return scope.$watch(attrs.xngFocus, function (newValue) {
//             console.log(newValue);
//             return newValue && element[0].focus();
//         });
//     };
// });
/**
 * TODO: delay, animation function, placement function, inside, tooltip or title,
 * remove standard tooltip from title (break bindings), multiple triggers, html
 * tooltips, selector delegate,
 */
angular.module( 'ui.bootstrap.tooltip', [] )
.directive( 'tooltipPopup', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/directive/view/toolTip.html'
  };
})
.directive( 'tooltip', function ( $compile, $timeout ) {
  
  var template = 
    '<tooltip-popup></tooltip-popup>';
  
  return {
    scope: { tooltipTitle: '@tooltip', placement: '@tooltipPlacement', animation: '&tooltipAnimation' },
    link: function ( scope, element, attr ) {
      var tooltip = $compile( template )( scope ), 
          transitionTimeout;
      
      // Calculate the current position and size of the directive element.
      function getPosition() {
        return {
          width: element.prop( 'offsetWidth' ),
          height: element.prop( 'offsetHeight' ),
          top: element.prop( 'offsetTop' ),
          left: element.prop( 'offsetLeft' )
        };
      }
      
      // Show the tooltip popup element.
      function show() {
        var position,
            ttWidth,
            ttHeight,
            ttPosition;
          
        // If no placement was provided, default to 'top'.
        scope.placement = scope.placement || 'top';
        
        // If there is a pending remove transition, we must cancel it, lest the
        // toolip be mysteriously removed.
        if ( transitionTimeout ) $timeout.cancel( transitionTimeout );
        
        // Lazy compile the tooltip element
        // FIXME: For some reason, this does *not* always work correctly on the 
        // *first* run, but does so on all subsequent runs.
        //tooltip = tooltip ||  $compile( template )( scope );
        
        // Set the initial positioning.
        tooltip.css({ top: 0, left: 0, display: 'block' });
        
        // Now we add it to the DOM because need some info about it. But it's not 
        // visible yet anyway.
        element.after( tooltip );
        
        // Get the position of the directive element.
        position = getPosition();
        
        // Get the height and width of the tooltip so we can center it.
        ttWidth = tooltip.prop( 'offsetWidth' );
        ttHeight = tooltip.prop( 'offsetHeight' );
        
        // Calculate the tooltip's top and left coordinates to center it with
        // this directive.
        switch ( scope.placement ) {
          case 'right':
            ttPosition = {
              top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
              left: (position.left + position.width) + 'px'
            };
            break;
          case 'bottom':
            ttPosition = {
              top: (position.top + position.height) + 'px',
              left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
            };
            break;
          case 'left':
            ttPosition = {
              top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
              left: (position.left - ttWidth) + 'px'
            };
            break;
          default:
            ttPosition = {
              top: (position.top - ttHeight) + 'px',
              left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
            };
            break;
        }
        
        // Now set the calculated positioning.
        tooltip.css( ttPosition );
          
        // And show the tooltip.
        scope.isOpen = true;
      }
      
      // Hide the tooltip popup element.
      function hide() {
        // First things first: we don't show it anymore.
        //tooltip.removeClass( 'in' );
        scope.isOpen = false;
        
        // And now we remove it from the DOM. However, if we have animation, we 
        // need to wait for it to expire beforehand.
        // FIXME: this is a placeholder for a port of the transitions library.
        if ( angular.isDefined( scope.animation ) && scope.animation() ) {
          transitionTimeout = $timeout( function () { tooltip.remove(); }, 999 );
        } else {
          tooltip.remove();
        }
      }
      
      // Register the event listeners.
      element.bind( 'mouseenter', function() {
        scope.$apply( show );
      });
      element.bind( 'mouseleave', function() {
        scope.$apply( hide );
      });
    }
  };
});
app.directive('notifyMe', function(){
    return{
      restrict: 'E',
      scope:false,
      templateUrl:"app/directive/view/modelTmpl.html",
      link:function(scope, elem, attrs){
        
      }
    }
  });

app.factory('mobDetail', ['$http', function ($http) {
    var mobDetail = {};
    mobDetail.get = $http.get('app/modal/mobile.json').then(function (resp) {
        return resp.data;
    });
    mobDetail.all = function () {
        return mobDetail.get;
    };
    return mobDetail;
}]);

app.factory('filterDetail', ['$http', function ($http) {
    var filterDetail = {};
    filterDetail.get = $http.get('app/modal/productFilters.json').then(function (response) {
        return response.data;
    });
    filterDetail.all = function () {
        return filterDetail.get;
    };
    return filterDetail;
}]);

app.factory('pinCode', ['$http', function ($http) {
    var pinCode = {};
    pinCode.get = $http.get('http://localhost:3020/thane').then(function (response) {
        return response.data;
    });
    pinCode.all = function () {
        return pinCode.get;
    };
    return pinCode;
}]);
app.service('notifications', ['$rootScope', function ($rootScope) {
    var queue = [];
    return {
        queue: queue,
        add: function (item) {
            var index = -1;
            for (var i = 0; i < this.queue.length; i++) {
                if (queue[i].body == item.body) {
                    index = i;
                    break;
                }
            }
            if (index != -1)
                return;
            queue.push(item);
            setTimeout(function () {
                $('.alerts .alert').eq(0).remove();
                queue.shift();
            }, 90000);
        },
        pop: function (item) {
            var index = -1;
            for (var i = 0; i < this.queue.length; i++) {
                if (queue[i].body == item) {
                    index = i;
                    break;
                }
            }
            if (index != -1)
                queue.splice(index, 1);
            return this.queue;
        }
    };
}
]);
app.factory('newCart', function(){
  // debugger;
    var newCart = {
      'list':[],
      'modalArr':[],
      'compare':[],
    };
    newCart.add = function(){
      // debugger;
      // newCart.list.push($scope.cart);
    };
  
    return newCart;
  });
  app.factory('newCompare', function(){
    // debugger;
      var newCompare = {
        'list':[],
        
      };
      newCompare.add = function(){
        // debugger;
        // newCart.list.push($scope.cart);
      };
      return newCompare;
    });
	app.factory('productDetail', function(){
    var productDetail = {
      'listTwo':[]
    };
    productDetail.add = function(){
      productDetail.listTwo.push($scope.detailView);
    };
  
    return productDetail;
  });
  app.directive('modalDialog', function(){
    return{
      restrict: 'E',
      scope:{
       show: '=',
        type:'=',
        msg:'=',
      },
      templateUrl:"app/directive/view/modelTmpl.html",
      transclude: false,
      link:function(scope, elem, attrs){
        
        scope.hideModal = function(){
          scope.show = false;
        };
        }
    }
  });
  app.controller('navbarController', ['$scope', '$http', '$log', '$filter', '$location', 'mobDetail', 'productDetail',
    function ($scope, $http, $log, $location, $filter, mobDetail, productDetail) {
        $scope.detailView = [];
        $scope.moreDetail = function (mobileToView) {
            $scope.detailView.push(angular.copy(mobileToView));
            productDetail.list = $scope.detailView;
        };
        // create a message to display in view
        $scope.home = 'home';
        $scope.selected = '';
        $scope.created = false;

        $scope.mobileSearch = [];
        mobDetail.all().then(function (resp) {
            $scope.mobileSearch = resp;
        });
        $scope.currentTimeIs = "";
        $scope.init = function () {
            $scope.currentTimeIs = new Date().getHours();
            if ($scope.currentTimeIs >= 6 && $scope.currentTimeIs <= 20) {
                $scope.sunShine = "block";
                $scope.moonLight = "none";
                $scope.navbarDarkLight = "bg-purpal";
                $scope.navbarBrandDarkLight = "text-light";
                $scope.bgDarkLight = "bg-white";
                $scope.shopDarkLight = "text-dark bg-white";
                $scope.filterDarkLight = "bg-light text-dark";
                $scope.mobileDarklight = "alart-pad";
                $scope.addToCart = "btn-info";
                $scope.addedDayNight = "btn-success";
                
            }
            else {
                $scope.moonLight = "block";
                $scope.sunShine = "none";
                $scope.navbarDarkLight = "bg-dark";
                $scope.navbarBrandDarkLight = "text-light";
                $scope.bgDarkLight = "bg-black";
                $scope.searchDarkLight = "bg-dark";
                $scope.shopDarkLight = "text-light bg-lightenGray";
                $scope.filterDarkLight = "bg-dark text-light";
                $scope.mobileDarklight = "alart-pad-dark";
                $scope.addToCart = "btn-outline-info";
                $scope.addedDayNight = "btn-outline-success";

            }
        };
        $scope.dark = function () {
            $scope.moonLight = "block";
            $scope.sunShine = "none";
            $scope.navbarDarkLight = "bg-dark";
            $scope.navbarBrandDarkLight = "text-light";
            $scope.bgDarkLight = "bg-black";
            $scope.searchDarkLight = "bg-dark";
            $scope.shopDarkLight = "text-light bg-lightenGray";
            $scope.filterDarkLight = "bg-dark text-light";
            $scope.mobileDarklight = "alart-pad-dark";
            $scope.addToCart = "btn-outline-info";
            $scope.addedDayNight = "btn-outline-success";
        }
        $scope.light = function () {
            $scope.sunShine = "block";
            $scope.moonLight = "none";
            $scope.navbarDarkLight = "bg-purpal";
            $scope.navbarBrandDarkLight = "text-light";
            $scope.bgDarkLight = "bg-white";
            $scope.searchDarkLight = "bg-light";
            $scope.shopDarkLight = "text-dark bg-white";
            $scope.filterDarkLight = "bg-light text-dark";
            $scope.mobileDarklight = "alart-pad";
            $scope.addToCart = "btn-info";
            $scope.addedDayNight = "btn-success";
        }

        $scope.state = closed;
        $scope.change = function () {
            var filtered;
            filtered = $filter('filter')($scope.mobileSearch, $scope.query);
            return $scope.state = filtered.length > 0 ? opened : 'closed';
        };
        $scope.select = function (items) {
            $scope.selected = items;
            return $scope.state = closed;
        };
        return $scope.clear = function () {
            $scope.query = '';
            $scope.selected = '';
            return $scope.cleared = true;
        };
    }
]);

// app.directive('xngFocus', function () {
//     return function (scope, element, attrs) {
//         return scope.$watch(attrs.xngFocus, function (newValue) {
//             console.log(newValue);
//             return newValue && element[0].focus();
//         });
//     };
// });

app.directive('notifyMe', function(){
    return{
      restrict: 'E',
      scope:false,
      templateUrl:"app/directive/view/modelTmpl.html",
      link:function(scope, elem, attrs){
        
      }
    }
  });

/**
 * TODO: delay, animation function, placement function, inside, tooltip or title,
 * remove standard tooltip from title (break bindings), multiple triggers, html
 * tooltips, selector delegate,
 */
angular.module( 'ui.bootstrap.tooltip', [] )
.directive( 'tooltipPopup', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/directive/view/toolTip.html'
  };
})
.directive( 'tooltip', function ( $compile, $timeout ) {
  
  var template = 
    '<tooltip-popup></tooltip-popup>';
  
  return {
    scope: { tooltipTitle: '@tooltip', placement: '@tooltipPlacement', animation: '&tooltipAnimation' },
    link: function ( scope, element, attr ) {
      var tooltip = $compile( template )( scope ), 
          transitionTimeout;
      
      // Calculate the current position and size of the directive element.
      function getPosition() {
        return {
          width: element.prop( 'offsetWidth' ),
          height: element.prop( 'offsetHeight' ),
          top: element.prop( 'offsetTop' ),
          left: element.prop( 'offsetLeft' )
        };
      }
      
      // Show the tooltip popup element.
      function show() {
        var position,
            ttWidth,
            ttHeight,
            ttPosition;
          
        // If no placement was provided, default to 'top'.
        scope.placement = scope.placement || 'top';
        
        // If there is a pending remove transition, we must cancel it, lest the
        // toolip be mysteriously removed.
        if ( transitionTimeout ) $timeout.cancel( transitionTimeout );
        
        // Lazy compile the tooltip element
        // FIXME: For some reason, this does *not* always work correctly on the 
        // *first* run, but does so on all subsequent runs.
        //tooltip = tooltip ||  $compile( template )( scope );
        
        // Set the initial positioning.
        tooltip.css({ top: 0, left: 0, display: 'block' });
        
        // Now we add it to the DOM because need some info about it. But it's not 
        // visible yet anyway.
        element.after( tooltip );
        
        // Get the position of the directive element.
        position = getPosition();
        
        // Get the height and width of the tooltip so we can center it.
        ttWidth = tooltip.prop( 'offsetWidth' );
        ttHeight = tooltip.prop( 'offsetHeight' );
        
        // Calculate the tooltip's top and left coordinates to center it with
        // this directive.
        switch ( scope.placement ) {
          case 'right':
            ttPosition = {
              top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
              left: (position.left + position.width) + 'px'
            };
            break;
          case 'bottom':
            ttPosition = {
              top: (position.top + position.height) + 'px',
              left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
            };
            break;
          case 'left':
            ttPosition = {
              top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
              left: (position.left - ttWidth) + 'px'
            };
            break;
          default:
            ttPosition = {
              top: (position.top - ttHeight) + 'px',
              left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
            };
            break;
        }
        
        // Now set the calculated positioning.
        tooltip.css( ttPosition );
          
        // And show the tooltip.
        scope.isOpen = true;
      }
      
      // Hide the tooltip popup element.
      function hide() {
        // First things first: we don't show it anymore.
        //tooltip.removeClass( 'in' );
        scope.isOpen = false;
        
        // And now we remove it from the DOM. However, if we have animation, we 
        // need to wait for it to expire beforehand.
        // FIXME: this is a placeholder for a port of the transitions library.
        if ( angular.isDefined( scope.animation ) && scope.animation() ) {
          transitionTimeout = $timeout( function () { tooltip.remove(); }, 999 );
        } else {
          tooltip.remove();
        }
      }
      
      // Register the event listeners.
      element.bind( 'mouseenter', function() {
        scope.$apply( show );
      });
      element.bind( 'mouseleave', function() {
        scope.$apply( hide );
      });
    }
  };
});