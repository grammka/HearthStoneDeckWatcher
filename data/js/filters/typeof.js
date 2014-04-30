HSFilters.filter('typeofIsObject', function () {
	return function (value, type) {
		return typeof value === type;
	};
});
