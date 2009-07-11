jQuery(document).ready(function() {
	// Insert anchor that will act as toggle to collapse/uncollapse the sectionfields
	jQuery('div.subsection h3').append('\
		(<a title="Toggle collapse" class="togglecollapse">Collapse</a>)\
	');
	
	jQuery("a.togglecollapse").toggle(
		function () {
			// Collapse fields that are just added
			jQuery('ol.orderable li').css({'height' : 'auto'});
			
			// Hide all children
			jQuery('ol.orderable li').children().hide();
			
			// Except the header of the field and remove bottom margin
			jQuery('ol.orderable li h4').show().css('margin-bottom', '0');
			
			// Add a label with the title of the field to the header
			jQuery('ol.orderable li h4').each(
				function (index) {
					var fieldtitle = jQuery("[name=\"fields["+ index +"][label]\"]").val();
					jQuery(this).after('<label class="meta fieldtitle">'+ fieldtitle + '</label>');
				}
			);
			
			// Change the link text to represent the collapsed state
			jQuery('a.togglecollapse').text('Uncollapse');
		}
		,
		function () {
			// Show all fields
			jQuery('ol.orderable li').children().show();
			
			// Hide the label with the title of the field
			jQuery('ol.orderable li label.fieldtitle').hide();
			
			// Change the link text to represent the uncollapsed state
			jQuery('a.togglecollapse').text('Collapse');
		}
	);

});