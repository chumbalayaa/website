$(document).ready(function() {
	multiSelect();
});

// set up multiselect feature
var multiSelect = function() {
  	$('#custom-headers').multiSelect({
  		selectableHeader: "<div class='text-center'><h5 class='myStocks'>My Stocks</h5></div>",
  		selectionHeader: "<div class='text-center'><h5 class='lineupStocks'>My Lineup</h5></div>"
  	});
}

// submit lineup changes
$(document).on('click', '#submitLineup', function (e){
	e.preventDefault();
	var selectable = $('.ms-elem-selectable'),
		allStocks = [];
	var selected = $('.ms-selection .ms-selected'),
		lineup = [],
		data = {};
	// grab all the stock selections and push them to the stocks array
	selected.each( function() {
		var text = $(this).text();
		lineup.push(text);
	});
	// grab all stocks the user has in his portfolio
	selectable.each( function() {
		var text = $(this).text();
		allStocks.push(text);
	});
	var length = lineup.length;
	// ensure you submit the proper number of stocks
	if (length != 7) {
		loadError('portfolioError', { message : 'Lineup must contain extactly 7 stocks.' })
	}
	else {
		data.stocks = lineup;
		data.league = $('#form').find("input[name='league']").val();
		data.allStocks = allStocks;
		$.ajax({
			type : 'POST',
			url : '/league/lineup',
			data : data,
			success : function (data) {
				loadSuccess('portfolioSuccess', { message : 'Lineup was successfully changed.' });
			}
		});
	}
});

// load error message
var loadError = function(template, data) {
  data = data || {};
  $('#message').html(Handlebars.templates[template](data));
};

var loadSuccess = function(template, data) {
	data = data || {};
	$('#message').html(Handlebars.templates[template](data));
}







