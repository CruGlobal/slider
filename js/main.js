$(document).ready(function(){
	
  	var interval = setInterval(slideForward, 5000);
	var sliding = false;
	

	/*
	 * Forward movement
	 */
	function slideForward() {
		$('.slider').removeClass('slider__reverse');
		//if(!sliding){
			//sliding = true;
			$('.js-last-up').addClass('js-off-left').removeClass('js-last-up');
			$('.js-at-bat').addClass('js-last-up').removeClass('js-at-bat');
			$('.js-on-deck').addClass('js-at-bat').removeClass('js-on-deck');
			$('.js-in-the-hole').addClass('js-on-deck').removeClass('js-in-the-hole');	
				
			$('.js-off-left').addClass('js-off-right').removeClass('js-off-left');
			$('.js-off-right').addClass('js-in-the-hole').removeClass('js-off-right');
			//sliding = false;
			//}
	}
	
	/*
	 * Reverse movement
	 */
	function slideReverse() { 
		$('.js-in-the-hole').addClass('js-off-right').removeClass('js-in-the-hole');
		$('.js-on-deck').addClass('js-in-the-hole').removeClass('js-on-deck');
		$('.js-at-bat').addClass('js-on-deck').removeClass('js-at-bat');
		$('.js-last-up').addClass('js-at-bat').removeClass('js-last-up');
		
		$('.js-off-right').addClass('js-off-left').removeClass('js-off-right');
		$('.js-off-left').addClass('js-last-up').removeClass('js-off-left');
	}



	/*
	 * Pause the slider on hover
	 */
    $('.slider__item').hover(function() {
        clearInterval(interval);
    }, function() {
        interval = setInterval(slideForward, 5000);	
    });
	
    $('.slider-control').hover(function() {
        clearInterval(interval);
    }, function() {
        interval = setInterval(slideForward, 5000);	
    });
	
	
	
	/*
	 * Move the slide forward when the user clicks the next button
	 */
	 $('.slider-control__next').click(function(e) {
		 e.preventDefault();
		 
		 $('.slider').removeClass('slider__reverse');
		 slideForward();
	 });
	
	
	
	/*
	 * Reverse the slider when the user clicks the previous button
	 */
	 $('.slider-control__prev').click(function(e) {
		 e.preventDefault();
		 
		 $('.slider').addClass('slider__reverse');
 		  slideReverse();
	 });
	
	
});

