var HSApp      = angular.module('HSApp', ['filters', 'ngRoute']),
	HSFilters  = angular.module('filters', []);

HSApp.config([
	'$routeProvider',
	function ($routeProvider) {

		$routeProvider
			.when('/phones', {
				templateUrl: 'partials/phone-list.html',
				controller: 'PhoneListCtrl'
			})
			.when('/phones/:phoneId', {
				templateUrl: 'partials/phone-detail.html',
				controller: 'PhoneDetailCtrl'
			})
			.otherwise({
				redirectTo: '/phones'
			});

	}
]);
