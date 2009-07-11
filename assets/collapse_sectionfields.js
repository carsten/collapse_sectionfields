$(document).ready(function() {
	// Insert anchor that will act as toggle to collapse/uncollapse the sectionfields
	$('div.subsection h3').append('\
		(<a title="Toggle collapse" class="togglecollapse">Collapse</a>)\
	');
	
	$("a.togglecollapse").toggle(
		function () {
			// Collapse fields that are just added
			$('ol.orderable li').css({'height' : 'auto'});
			
			// Hide all children
			$('ol.orderable li').children().hide();
			
			// Except the header of the field
			$('ol.orderable li h4').show();
			
			// Add a label with the title of the field to the header
			$('ol.orderable li h4').each(
				function (index) {
					var fieldtitle = $("[name=\"fields["+ index +"][label]\"]").val();
					$(this).after('<label class="meta fieldtitle">'+ fieldtitle + '</label>');
				}
			);
			
			// Change the link text to represent the collapsed state
			$('a.togglecollapse').text('Uncollapse');
		}
		,
		function () {
			// Show all fields
			$('ol.orderable li').children().show();
			
			// Hide the label with the title of the field
			$('ol.orderable li label.fieldtitle').hide();
			
			// Change the link text to represent the uncollapsed state
			$('a.togglecollapse').text('Collapse');
		}
	);

});