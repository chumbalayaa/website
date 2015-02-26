$(document).ready(function() {
	$('#pre-selected-options').multiSelect({
		selectableHeader: "<div class='text-center'><h5 class='custom-header'>Market Stocks</h5></div>",
  		selectionHeader: "<div class='text-center'><h5 class='custom-header'>My Portfolio</h5></div>",
	});

	$(document).on("click","#submit",function() {
		var error = false
        var portfolioSize = 10;
		var valid = document.getElementById('valid');
		var message = document.getElementById('message');
	    if ($('#pre-selected-options').val().length === portfolioSize) {
	    	valid.style.display = 'none';
	    	$('#tradeStocks').submit();
	    	error = true;
	    }

	    else {
	    	valid.style.display = 'block';
	    	message.style.display = 'none';
	    }
	    return error;
    });
});