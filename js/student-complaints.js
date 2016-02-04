jQuery(document).ready(function($) {
    $(".datetimepicker")
    	.datetimepicker({
	        format: "MM dd yyyy - hh:ii",
	        showMeridian: true,
	        autoclose: true,
	        todayBtn: true
	    })
	    .on('click',  function(event) {
	    	console.log(this);
	    });
});