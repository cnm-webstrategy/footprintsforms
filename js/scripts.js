$(document).ready(function() {
	$('#email').on('click',  function(event) {
		event.preventDefault();
		/* Act on the event */
		console.log('x');
	});


	jQuery.validator.setDefaults({
		debug: true,
		success: "valid"
	});
	$( "#opie-form" ).validate({
		rules: {
			email: {
				required: true,
				email: true
			}
		}
	});	

	$('.input-group.date').datepicker();
	$('#date-needed').on('click', function(event) {
		event.preventDefault();
		console.log('hi');
	});
	$('#date-needed').on("changeDate", function() {
	    $('#hidden-date').val(
	        $('#date-needed').datepicker('getFormattedDate')
	    );
	});

	//show certain form elements based on user selection
	$('#request-type').on('change', function(event) {

		// handle "Performance Improvement" selection
		if (event.target.selectedIndex === 4) {
			$('#pi-category-container').removeClass('default-hidden');
		} else {
			$('#pi-category-container').addClass('default-hidden');
		};

		// handle "Unknown" selection
		if (event.target.selectedIndex === 5) {
			$('#request-type-unknown').removeClass('default-hidden');
		} else {
			$('#request-type-unknown').addClass('default-hidden');
		};

	});

	// make subject line 100% width
	$('#subject').parents('.input-group').width('100%');

});

	
