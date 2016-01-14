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

});

	
