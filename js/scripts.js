$(document).ready(function() {

    var $submitButton = $('#submit_button');

    // collect all of the fields that are required
    var $required = $('input,textarea,select').filter('[required]');

    $("#submit_button").on("click",function(){
        //
    })

    var addAsterisks = function(){
        $required.each(function(i,el){
            $(el).siblings('label').append("*");
        })
    }

    addAsterisks();

    //  isValidEmail function
    var isValidEmail = function (str) {

        //var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        var pattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i

        return pattern.test(str);
    }

    var fieldIsValid = function(el) {

        switch (el.type) {
            case "text":
                if($(el).val() === "") {
                    return false;
                }
                break;
            case "email":
                if($(el).val() === "" || !isValidEmail($(el).val())) {
                    return false;
                }
                break;
            case "select-one":
                if($(el).val() === "Select Choice") {
                    return false;
                }
        }

        return true;
    }

    var formIsValid = function (evt) {
        this.isValid = false;
        var self = this;

        // check to see if ANY fields are empty, if they are, invalidate form
        $required.each(function(i, el){
            if(!fieldIsValid(el)){
                self.isValid = false;
                return false;
            } else {
                self.isValid = true;
            };

        });

        return this.isValid;

    }

    // check each keystroke in required fields to see if 
    // the error style should be removed.
    $required.bind('input', function(event) {
        if(formIsValid(event)){


            $submitButton.prop('disabled', false);
        } else {
            $submitButton.prop('disabled', true);
        };

        $target = $(event.target);
        $parent = $target.parent();

        if(fieldIsValid(event.target)){
            $parent.removeClass('has-error')
                .addClass('has-success');
            $target.after("<span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span> <span class=\"sr-only\">(success)</span>");
        } else {
            $parent.addClass('has-error')
                .removeClass('has-success');
            $target.after("<span class=\"glyphicon glyphicon-error form-control-feedback\" aria-hidden=\"true\"></span> <span class=\"sr-only\">(error)</span>");
        }
    });

});