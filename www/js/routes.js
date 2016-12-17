angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('menu.beranda', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/beranda.html',
        controller: 'berandaCtrl'
      }
    }
  })

  .state('menu.terdekat', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/terdekat.html',
        controller: 'terdekatCtrl'
      }
    }
  })

  .state('menu.menuKategori', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/menuKategori.html',
        controller: 'menuKategoriCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.jasa', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jasa.html',
        controller: 'jasaCtrl'
      }
    }
  })

  .state('menu.kuliner', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kuliner.html',
        controller: 'kulinerCtrl'
      }
    }
  })

  .state('menu.gayaHidup', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gayaHidup.html',
        controller: 'gayaHidupCtrl'
      }
    }
  })

  .state('menu.belanja', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/belanja.html',
        controller: 'belanjaCtrl'
      }
    }
  })

  .state('menu.olahraga', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/olahraga.html',
        controller: 'olahragaCtrl'
      }
    }
  })

  .state('menu.wisataHiburan', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wisataHiburan.html',
        controller: 'wisataHiburanCtrl'
      }
    }
  })

  .state('menu.detailMerchant', {
    url: '/page5',
    params: {
        'id': null
    },
    views: {
      'side-menu21': {
        templateUrl: 'templates/detailMerchant.html',
        controller: 'detailMerchantCtrl'
      }
    }
  })


  .state('favorite', {
    url: '/page13',
    templateUrl: 'templates/favorite.html',
    controller: 'favoriteCtrl'
  })

  .state('menu.pendidikan', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pendidikan.html',
        controller: 'pendidikanCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')



});
