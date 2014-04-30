HSApp.directive('chosen', function () {
	return {
		restrict: 'AE',
		scope: {
			showchosen: '@'
		},
		link: function ($scope, $element, $attrs) {

			var options = $attrs.chosenOptions ? JSON.parse($attrs.chosenOptions) : null;

			$attrs.$observe('showchosen', function (val) {
			    if (+val) {
				    setTimeout(function () {
					    $element.chosen(options);
				    }, 50);
			    }
			});

		}
	};
});
