if (typeof(AJS) === 'undefined') AJS = {};

AJS.PortfolioNavigation = function()
{
	var that = this;
	
	this.change = function(from, to)
	{				
		$(from).fadeOut();
		$(to).fadeIn();
	};
	
	this.listen = function()
	{
		$('ul.selector a').click(function()
		{
			var next = $(this);
			
			// As long as a non-current link was clicked
			if (!next.hasClass('current')) {
				var curr = next.parent().siblings().find('a.current');

				// Switch the images, the href is the respective
				// image's id
				that.change(curr.attr('href'), next.attr('href'));

				// Switch the class names, so the current image's
				// navigation dot is highlighted
				curr.removeClass('current');
				next.addClass('current');
			}
			
			return false;
		});
	};
};

var nav = new AJS.PortfolioNavigation();

$(document).ready(function() {
	nav.listen();
});