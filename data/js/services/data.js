HSApp.service('globData', function () {
	var data = {
		chosenHeroName: null,
		cards: null
	};

	return {
		getData: function () {
			return data;
		},

		setData: function (key, value) {
			data[key] = value;
		}
	}
});