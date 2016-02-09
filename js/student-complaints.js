jQuery(document).ready(function($) {
	var $fp = $(".datetimepicker");
	var now = moment().subtract(1,"years");
    
    $fp.filthypillow({
    	minDateTime: function (){
    		return now;
    	}
    });

    $fp.on( "focus", function( ) {
		$fp.filthypillow( "show" );
	} );
	$fp.on( "fp:save", function( e, dateObj ) {
		$fp.val( dateObj.format( "MMM DD YYYY hh:mm A" ) );
		$fp.filthypillow( "hide" );

		// populate original date fields which are hidden inputs
		$('#Month_Date__bEvent__bOccured').val(dateObj.month() + 1);
		$('#Day_Date__bEvent__bOccured').val(dateObj.date());
		$('#Year_Date__bEvent__bOccured').val(dateObj.year());

	} );
});