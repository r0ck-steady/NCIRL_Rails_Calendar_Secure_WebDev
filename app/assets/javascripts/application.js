//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require bootstrap-datepicker
//= require_tree .

var todaysDate = new Date();

$(document).on("focus", "[data-behaviour~='datepicker']", function(e){
    $(this).datepicker({"format": "yyyy-mm-dd", "weekStart": 1, "autoclose": true})
    $(this).datepicker().on('changeDate', function(ev) {
    	{alert ('Changed')};

    })
    // $(this).datepicker.on('changeDate', functin(ev) {
    // 	// if (ev.date.valueOf() > todaysDate.valueOf()) {
    // 	// 	$('#alert').show().find('strong').text('Date of Birth must not be after today!');
    // 	// } else {
    //  //        $('#alert').hide();
    //  //        startDate = new Date(ev.date);
    //  //        $('#date-start-display').text($('#date-start').data('date'));    		
    // 	// }
    //     // $('#date_dob').datepicker('hide');    	
    // }) ;
});