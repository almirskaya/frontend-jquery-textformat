'use strict';

console.log($)

$(document).ready (function(){
	$(".message-form .message-field").keyup (function(e) {
		var textValue=$.trim(e.currentTarget.value).replace( /[\n\s]+/g, " ").toLowerCase();
	$(".message-formatted").text(textValue);
	});	
});