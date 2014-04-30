HSFilters.filter('percentToColor', function(){
	return function(value, min, max){

		var percent, g, minG = 180, maxG = 255;

		percent = (value - min) * 100 / (max - min);
		g = (maxG - minG) * percent / 100;

		return 'rgb(230, '+ Math.floor(minG - g) +', 0)';

	};
});