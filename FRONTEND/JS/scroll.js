(function ( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
			forceHeight: false
		});
		s.refresh($('.homeSlide'));
		function loadTeams(){    
            var url = `http://localhost:5000/stats/` + document.getElementById("teams").value;
            console.log(url);
            $.ajax({url:url, dataType:"json"}).then(function(data) {
                    
                    document.getElementById("name").innerHTML = (data.name).toLocaleString();
            })
        }
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    
	    
	}
		
})(jQuery);