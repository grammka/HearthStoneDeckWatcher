HSFilters.filter('range', function() {
	return function(input, start, end) {

		start   = +start;
		end     = +end;

		while (start - end != 0) {
			input.push(start);
			start < end ? start++ : start--;
		}

		return input;
	};
});