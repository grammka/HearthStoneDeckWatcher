HSApp.controller('RootCtrl', function ($scope) {

	$scope.openLink = function (link) {
		window.location.hef = link;
	};

	$scope.data = {
		openedPopup: null
	};

});