jQuery(document).ready(function($) {

    var $submitButton = $('input[name="submit_button"');
    // disable submit button by default
    $submitButton.prop('disabled', true);

    // collect all of the fields that are required
    var $required = $('input,textarea,select').filter('[required]');

    // isEmpty function
    var isEmpty = function ($fields) {
        //  for each required item check to see if it's empty
        $fields.each(function(index, el) {
            //  if it's empty return true
            if ($(el).val() === ""){
                return true;
            }
            
        });
        //      if not return false
        return false;
    };

    // find email input
    var findEmail = function ($fields){
        var $emailField;
        $fields.each(function(index, el) {

            if ($(el).attr('type') === 'email') {
                $emailField = el;
            }
        });
        return $emailField;
    }

    //  isValidEmail function
    var isValidEmail = function (email) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(email);
    }

var theEmail = findEmail($required);
console.log(theEmail);

    //  when a required field loses focus
    $required.on('blur', function(event) {

        var $target = $(event.target);
        //  get email field
        var emailField = findEmail($required);

        //  if any required fields are empty, or if email is malformed, 
        if (isEmpty($required) || isValidEmail(emailField)) {
            //make submit button inactive
            $submitButton.prop('disabled', true);
            
            // change style of input to reflect bootstrap valid state
            $target.parent()
                .addClass('has-error has-feedback')
                .append(errorTag);

        } else {
        }

    //  when submit button is clicked, submit form
    });
});