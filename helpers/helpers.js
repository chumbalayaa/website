var helpers = {
	mapJSON : function(one, two) {
		for (var key in one) {
			if (two[key]) {
				one[key] = two[key];
			}
		}
		return key;
	}
};

module.export = helpers;