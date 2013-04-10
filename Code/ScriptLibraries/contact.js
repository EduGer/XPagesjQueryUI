$(document).ready( function() {
	var theme = getDemoTheme();

	$( ".companyfield" ).autocomplete({
		source: function( request, response ) {
				$.ajax({
					url: "companies?readviewentries",
					dataType: "xml",
					success: function( xmlResponse ) {
					var data = $( "entrydata", xmlResponse ).map(function() {
						return {
							value: $( "text", this ).text(), 
							id: $( "text", this ).text()
						};
					}).get();
					$( ".companyfield" ).autocomplete({
						source: data,
						minLength: 0,
						select: function( event, ui ) {
						}
					});
				}
			})
		}
	});

	$('.submitbutton').jqxButton( {
		width : 60,
		height : 25,
		theme : theme
	});
	$(".telephone").jqxMaskedInput( {
		mask : '(###)###-####',
		width : 150,
		height : 22,
		theme : theme
	});
	$('.text-input').addClass('jqx-input');
	$('.text-input').addClass('jqx-rc-all');
	if (theme.length > 0) {
		$('.text-input').addClass('jqx-input-' + theme);
		$('.text-input').addClass('jqx-widget-content-' + theme);
		$('.text-input').addClass('jqx-rc-all-' + theme);
	}

	var date = new Date();
	date.setFullYear(2000, 0, 1);
	$('#dateofbirth').jqxDateTimeInput({ 
		theme: theme, 
		height: 22, 
		value: $.jqx._jqxDateTimeInput.getDateTime(date)
	});

	$('#dateofbirth').on('textchanged', function (event) {
		var date = $("#dateofbirth").jqxDateTimeInput('getText');
		$(".dateofbirth").val(date);
	});

	// initialize validator.
	$('#contactform').jqxValidator(
			{
				rules : [
				         {
				        	 input : '.firstname',
				        	 message : 'First name is required!',
				        	 action : 'keyup, blur',
				        	 rule : 'required'
				         },
				         {
				        	 input : '.lastname',
				        	 message : 'Last name is required!',
				        	 action : 'keyup, blur',
				        	 rule : 'required'
				         },
				         {
				        	 input : '.dateofbirth',
				        	 message : 'Your birth date must be between 1/1/1900 and 1/1/2012.',
				        	 action : 'valuechanged',
				        	 rule : function(input, commit) {
				        	 var date = $('#dateofbirth').jqxDateTimeInput('value');
				        	 var result = date.getFullYear() >= 1900 && date.getFullYear() <= 2012;
				        	 return result;
				         }
				         },
				         {
				        	 input : '.email',
				        	 message : 'Invalid e-mail!',
				        	 action : 'keyup',
				        	 rule : 'email'
				         }
				         ],
				         theme : theme
			});
}
);