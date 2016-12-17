angular.module('app.controllers', ['ionic','ionic.native','ui.router','ngMap'])

.controller('berandaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('terdekatCtrl', function ($scope, $http, $stateParams,NgMap) {
  $http.get("http://ec2-52-77-232-143.ap-southeast-1.compute.amazonaws.com/tdiskon/m.php?req=FASHION").then(function (response) {
    console.log(response.data);
      $scope.myData = response.data;
  });
  NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });

})

.controller('menuKategoriCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('jasaCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams) {
  $http.get("http://ec2-52-77-232-143.ap-southeast-1.compute.amazonaws.com/tdiskon/m.php?req=FASHION").then(function (response) {
    console.log(response.data);
      $scope.myData = response.data;
  });
})


.controller('kulinerCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams) {
  $http.get("http://ec2-52-77-232-143.ap-southeast-1.compute.amazonaws.com/tdiskon/m.php?req=Kuliner").then(function (response) {
    console.log(response.data);
      $scope.myData = response.data;
  });
})
.controller('gayaHidupCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams) {
  $http.get("http://ec2-52-77-232-143.ap-southeast-1.compute.amazonaws.com/tdiskon/m.php?req=ENTERTAINMENT").then(function (response) {
    console.log(response.data);
      $scope.myData = response.data;
  });
})

.controller('belanjaCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams) {
  $http.get("http://ec2-52-77-232-143.ap-southeast-1.compute.amazonaws.com/tdiskon/m.php?req=Shopping").then(function (response) {
    console.log(response.data);
      $scope.myData = response.data;
  });
})
.controller('olahragaCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams) {
  $http.get("http://ec2-52-77-232-143.ap-southeast-1.compute.amazonaws.com/tdiskon/m.php?req=TRAVEL").then(function (response) {
    console.log(response.data);
      $scope.myData = response.data;
  });
})
.controller('wisataHiburanCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams) {
  $http.get("http://ec2-52-77-232-143.ap-southeast-1.compute.amazonaws.com/tdiskon/m.php?req=Kesehatan").then(function (response) {
    console.log(response.data);
      $scope.myData = response.data;
  });
})

.controller('detailMerchantCtrl', function ($scope, $state, $http, $stateParams) {
  var id = $stateParams.id;
  console.log(id);
  $http.get("http://ec2-52-77-232-143.ap-southeast-1.compute.amazonaws.com/tdiskon/m.php?id="+id).then(function (response) {
    console.log(response.data);
      $scope.myData = response.data;
  });

})

.controller('favoriteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('pendidikanCtrl', function ($scope, $http, $cordovaGeolocation, $ionicPlatform, $state, $stateParams) {
  $http.get("http://ec2-52-77-232-143.ap-southeast-1.compute.amazonaws.com/tdiskon/m.php?req=EDUCATION").then(function (response) {
    console.log(response.data);
      $scope.myData = response.data;
  });
  $scope.Link = function(id){
    $state.go("menu.detailMerchant",{'id':id});
  }
})
