$(document).ready(function() {

    var $submitButton = $('#submit_button');

    // collect all of the fields that are required
    var $required = $('input,textarea,select').filter('[required]');



    // isEmpty function
    var isEmpty = function ($fields) {

        this.empty = false;
        var self = this;
        //  for each required item check to see if it's empty
        $fields.each(function(index, el) {
            //  if it's empty return true
            if ($(el).val() === ""){
                self.empty = true;
            }
            
        });
        //      if not return false
        return this.empty;
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
    var isValidEmail = function (emailField) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        var email = $(emailField).val();
        return pattern.test(email);
    }

    
    // check each keystroke in required fields to see if 
    // the error style should be removed.
    $required.bind('input', function(event) {

        $target = $(event.target);
        $parent = $target.parent();


        if($target.val() !== "") {
            console.log($target.parent());
            $parent.removeClass('has-error')
                .addClass('has-success');

        } else {
            $parent.addClass('has-error')
                .removeClass('has-success')
            console.log('empty');
        }
        //$parent.addClass('has-success');
    });

    var theEmail = findEmail($required);

    //  when a required field loses focus
    $required.on('blur', function(event) {
        var $target = $(event.target);
        //  get email field
        var emailField = findEmail($required);


        //  if any required fields are empty, or if email is malformed, 
        if (isEmpty($required) === true || isValidEmail(emailField) === false ) {
            //make submit button inactive
            $submitButton.prop('disabled', true);
            
            // change style of input to reflect bootstrap valid state
   
            // var errorTag = "<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>"
            // $target.parent()
            //     .addClass('has-error has-feedback')
            //     .append(errorTag);

        } else {
            console.log($submitButton);
            $submitButton.prop('disabled', false);
        }

    //  when submit button is clicked, submit form
    });
});