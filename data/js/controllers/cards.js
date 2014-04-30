HSApp.controller('CardsCtrl', function ($scope, $http, globData) {

	$scope.data = {
		globData: globData.getData(),
		cards: null
	};

	$http.get('data/js/json/allcards.json').then(function (res) {
		$scope.data.cards = res.data;
	});

});