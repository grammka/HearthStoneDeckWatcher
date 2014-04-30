HSFilters.filter('numeral', function () {
	return function ($number, $ending1, $ending2, $ending3) {

		//"продукт", "продукта", "продуктов"
		$num100 = $number % 100;
		$num10 = $number % 10;

		if ($num100 >= 5 && $num100 <= 20 || $num10 == 0 || ($num10 >= 5 && $num10 <= 9)) {
			return $ending3;
		}else if ($num10 == 1){
			return $ending1;
		}else{
			return $ending2;
		}

	};
});
