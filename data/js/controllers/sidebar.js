HSApp.controller('SidebarCtrl', function ($rootScope, $scope, $http, globData) {

	$scope.toggleGamesList = function (num) {
		$scope.data.gamesListVisible = typeof num !== 'undefined' ? num : !$scope.data.gamesListVisible;
	};

	$scope.changeGame = function (id) {
		$scope.data.gameChosen = $scope.data.games[id];
		globData.setData('gameChosen', $scope.data.gameChosen);
		$scope.toggleGamesList(0);
	};

	$scope.data = {
		gamesListVisible: 0,
		games: null,
		gameChosen: null
	};

	$http.get('/api/games.json').then(function(res){
		$scope.data.games = res.data.games;

		$scope.changeGame(0); // TODO переделать когда будет запрос по ID игры
	});

});
