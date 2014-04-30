HSApp.controller('HeroesCtrl', function ($scope, $http, globData) {

	$scope.data = {
		chosenHeroName: null,
		cards: null,
		heroes: null
	};

	$scope.changeHero = function (name) {
		$scope.data.chosenHeroName = name;
		globData.setData('chosenHeroName', name);
	};

	$http.get('data/js/json/heroes.json').then(function (res) {
	    $scope.data.heroes = res.data;
	});

	$scope.changeHero('Druid');

});