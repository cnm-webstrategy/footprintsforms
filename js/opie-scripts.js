$(document).ready(function() {
	
	//option A
	$("#HTML_FORM").submit(function(e){
		// e.preventDefault();
		
		console.log($(this).closest('form').serialize())
	});

    $('#date-needed').datetimepicker({
        daysOfWeekDisabled:[0,6],
        // // daysOfWeekHighlighted: '12345',
        defaultDate: moment().add(2,'weeks'),
        format: 'L'
    });
    
    var setMonthDayYear = function(date) {
	    // break datepicker down into individual date parts and
	    // put into hidden fields :(
	    var mDate = moment(date, "MM/DD/YYYY");
	    var month = mDate.month()+1;
	    var day = mDate.date();
	    var year = mDate.year();
	
	    $('input[name="Month_Date__bNeeded"]').val(month);
	    $('input[name="Day_Date__bNeeded"]').val(day);
	    $('input[name="Year_Date__bNeeded"]').val(year);
    }

	// $('#date-needed').trigger("change.datetimepicker");
	$('#date-needed').on("change.datetimepicker", function (e) {

		setMonthDayYear($('.datetimepicker-input').val());

	});

	$('#One__uTime__bor__bRecurring__Q').on('change', function(event) {
		// if "recurring" is selected
		if (event.target.selectedIndex === 2){
			$('#recurring-schedule').removeClass('default-hidden');
		} else {
			$('#recurring-schedule').addClass('default-hidden');
		}
	});

	$('#Recurring__bSchedule').on('change', function(event) {

		console.log(event.target.selectedIndex)
		if (event.target.selectedIndex === 4){
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
	
	$('#Strategic__bgoal__bto__bwhich__bthis__brelates').on('change', function (event) {
		if (event.target.value === 'Student__bSuccess') {
			$('#student-success-strategic-initiative').removeClass('default-hidden');
		} else {
			$('#student-success-strategic-initiative').addClass('default-hidden');
		}
		if (event.target.value === 'Community__bSuccess') {
			$('#community-success-strategic-initiative').removeClass('default-hidden');
		} else {
			$('#community-success-strategic-initiative').addClass('default-hidden');
		}
		if (event.target.value === 'Organization__bExcellence__band__bInnovation') {
			$('#organization-strategic-initiative').removeClass('default-hidden');
		} else {
			$('#organization-strategic-initiative').addClass('default-hidden');
		}
	})

	// make subject line 100% width
	$('#subject').parents('.input-group').width('100%');
	
	// the datetime picker input needs to be parsed into MM/DD/YYYY so that the hidden inputs for the respective
	// date parts can be populated on $(document).ready
	setMonthDayYear($('.datetimepicker-input').val())
});


