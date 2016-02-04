jQuery(document).ready(function($) {

	$('input[name="submit_button"').prop('disabled', true);

	function isValidEmailAddress(emailAddress) {
	    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	    return pattern.test(emailAddress);
	};
	
	var errorTag = '<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>\n<span class="sr-only">(error)</span>';
	//find all form fields that contain `required` attribute
	var $required = $('input,textarea,select').filter('[required]');
	$required.on('blur', function(event) {
		$target = $(event.target);
		
		//if field is empty, set the styles to bootstrap error
		if ($target.val() === "") {
			$target.parent()
				.addClass('has-error has-feedback')
				.append(errorTag);
		} else {
			$target.parent().removeClass('has-error has-feedback')
		}
		

	});

	$required.on('change', function(event) {
		$target = $(event.target);
		console.log($target.val());
		if ($target.val() !== "") {
			$target.parent().removeClass('has-error has-feedback');
		}

		var empties = $required.each(function(index, el) {
			if ($(this).val() === ""){
				return true;
			} else {
				return false;
			}
		});

		if ($target.prop({ type: 'email' })

		if (empties === false && ) {
			$('input[name="submit_button"').prop('disabled', false);
		}
	});



	$('input[name="submit_button"').on('click', function(event) {
		event.preventDefault();
		console.log('howdy'); 
	});
	
});

// '<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
//   <span class="sr-only">(error)</span>'