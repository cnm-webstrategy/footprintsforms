jQuery(document).ready(function ($) {
	
	// collect all of the fields that are required
	var $required = $('input,textarea,select').filter('[required]');
	
	// isEmpty function
	var isEmpty = function ($fields) {
		//  for each required item check to see if it's empty
		$fields.each(function (index, el) {
			//  if it's empty return true
			if ($(el).val() === "") {
				return true;
			}
			
		});
		//      if not return false
		//return false;
	};
	
	// find email input
	var findEmail = function ($fields) {
		var $emailField;
		$fields.each(function (index, el) {
			
			if ($(el).attr('type') === 'email') {
				$emailField = el;
			}
		});
		return $emailField;
	}
	
	//  isValidEmail function
	var isValidEmail = function (emailField) {
		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		var email = $(emailField).val();
		return pattern.test(email);
	}
	
	
	// check each keystroke in required fields to see if
	// the error style should be removed.
	$required.bind('input', function (event) {
		$target = $(event.target);
		$parent = $target.parent();
		
		if ($target.val() !== "") {
			if ($parent.hasClass('has-error')) {
				$parent.removeClass('has-error');
			}
			;
		} else {
			console.log('empty');
		}
	});
	
	var theEmail = findEmail($required);
	
	//  when a required field loses focus
	// $required.on('blur', function(event) {
	//     var $target = $(event.target);
	//     //  get email field
	//     var emailField = findEmail($required);
	//
	//     //  if any required fields are empty, or if email is malformed,
	//     if (isEmpty($required) != undefined || isValidEmail(emailField)) {
	//         //make submit button inactive
	//         $submitButton.prop('disabled', true);
	//
	//         // change style of input to reflect bootstrap valid state
	//
	//         // var errorTag = "<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>"
	//         // $target.parent()
	//         //     .addClass('has-error has-feedback')
	//         //     .append(errorTag);
	//
	//     } else {
	//         $submitButton.prop('disabled', false);
	//     }
	//
	// //  when submit button is clicked, submit form
	// });
	(function () {
		'use strict';
		window.addEventListener('load', function () {
			
			// modal markup
			var div = document.createElement('div');
			div.innerHTML = '  \
				<div class="modal fade" id="errorModal" tabindex="-1" role="dialog" aria-labelledby="errorModal" aria-hidden="true"> \
				    <div class="modal-dialog modal-dialog-centered" role="document"> \
				        <div class="modal-content"> \
				            <div class="modal-header"> \
				                <h5 class="modal-title" id="errorModalLongTitle">Please correct errors</h5> \
				                <button type="button" class="close" data-dismiss="modal" aria-label="Close"> \
				                    <span aria-hidden="true">&times;</span>  \
				                </button>  \
				            </div>  \
				            <div class="modal-body"> \
				                Please scroll up and fix the errors \
				            </div> \
				            <div class="modal-footer"> \
				                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button> \
				            </div> \
				        </div> \
				    </div> \
				</div> \
			'
			var form = document.getElementById('HTML_FORM');
			var container = document.getElementsByClassName('container')[0];
			
			container.insertBefore(div, form);
			// document.body.appendChild(div);
			
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var forms = document.getElementsByClassName('needs-validation');
			var modal = document.getElementById('errorModal');
			// Loop over them and prevent submission
			var validation = Array.prototype.filter.call(forms, function (form) {
				form.addEventListener('submit', function (event) {
					if (form.checkValidity() === false) {
						event.preventDefault();
						event.stopPropagation();
						$('#errorModal').modal();
					}
					form.classList.add('was-validated');
				}, false);
			});
		}, false);
	})();
});

