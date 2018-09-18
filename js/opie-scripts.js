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

    $('#date-needed').datetimepicker({
        daysOfWeekDisabled:[0,6],
        // // daysOfWeekHighlighted: '12345',
        defaultDate: moment().add(2,'weeks'),
        format: 'L'
    });
	// $('#date-needed').on('click', function(event) {
	$('#date-needed').on('click', function(event) {
		event.preventDefault();
	});
	$('#date-needed').trigger("change.datetimepicker");
	// $('#date-needed').on("change.datetimepicker", function() {
	// 	console.log('clicked');
	// 	$('#hidden-date').val(
	// 		$('#date-needed').datetimepicker('getFormattedDate')
	// 		);
	// });

	$('#One__uTime__bor__bRecurring__Q').on('change', function(event) {
		// if "recurring" is selected
		if (event.target.selectedIndex === 2){
			$('#recurring-schedule').removeClass('default-hidden');
		} else {
			$('#recurring-schedule').addClass('default-hidden');
		}
	});

	$('#Recurring__bSchedule').on('change', function(event) {
		console.log(event.target.selectedIndex );
		if (event.target.selectedIndex === 3){
			$('#explain-other').removeClass('default-hidden');
		} else {
			$('#explain-other').addClass('default-hidden');
		}
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

	// submit click
	$('button').on('click', function(event) {
		event.preventDefault();

	    // break datepicker down into individual date parts and 
	    // put into hidden fields :(

    	var dateMilli = Date.parse($('#date-needed').val());
    	var d = new Date(dateMilli);
    	var month = d.getMonth() + 1;
    	var day = d.getDate();
    	var year = d.getFullYear();

	    $('input[name="Month_Date__bNeeded"]').val(month);
	    $('input[name="Day_Date__bNeeded"]').val(day);
	    $('input[name="Year_Date__bNeeded"]').val(year);


		var emailField = 'Email__bAddress';
		var userPriv = 4;

		var errorMsg = "";

		// if (!(document.HTML_FORM.TITLE.value))
		// 	errorMsg += "The field TITLE is mandatory and has been left blank\n";

		// if (!(document.HTML_FORM.Last__bName.value))
		// 	errorMsg += "The field Last Name is mandatory and has been left blank\n";

		// if (!(document.HTML_FORM.First__bName.value))
		// 	errorMsg += "The field First Name is mandatory and has been left blank\n";

		// if (!(document.HTML_FORM.Email__bAddress.value))
		// 	errorMsg += "The field Email Address is mandatory and has been left blank\n";

		if (errorMsg)
		{
			//alert(errorMsg);
			console.error(errorMsg);
		}
		else
		{
			// console.log($('HTML_FORM'))
			// $('#HTML_FORM')[0].submit();
            $('#HTML_FORM').submit(function( event ) {
            console.log( $( this ).serializeArray() );
            event.preventDefault();
        });
        }

    });
	
	var $fields = $('#subject, #Last__bName,#First__bName,#Email__bAddress');
	$fields.on('focusout', function(event) {
		$fields.each(function(index, el) {
			
		});
		//console.log($(this));
		//if($(this).val()==="")
	});
});


