//<!--Team member detail toggle-->
	//<script>
		$(document).ready(function(){
    		$("#flip").mouseenter(function(){
        		$("#panel").slideDown("slow");
    		});
    		$("#flip").mouseleave(function(){
        		$("#panel").slideUp("slow");
    		});
		});	
	//</script>

//	<!--Roadmap Animation-->
	//<script>
		function mapFunction(){
			$ ('div#map1').animate (
	        {
	            left : '100px',
	            opacity : 1,
	            filter : "alpha(opacity=" + 100 + ")"
	        }, 1000);

	        $ ('div#map2').animate (
	        {
	            left : '100px',
	            opacity : 1,
	            filter : "alpha(opacity=" + 100 + ")"
	        }, 2000);

	        $ ('div#map3').animate (
	        {
	            left : '100px',
	            opacity : 1,
	            filter : "alpha(opacity=" + 100 + ")"
	        }, 3000);

	        $ ('div#map4').animate (
	        {
	            left : '100px',
	            opacity : 1,
	            filter : "alpha(opacity=" + 100 + ")"
	        }, 4000);

	        $ ('div#map5').animate (
	        {
	            left : '100px',
	            opacity : 1,
	            filter : "alpha(opacity=" + 100 + ")"
	        }, 5000);

	        $ ('div#map6').animate (
	        {
	            left : '100px',
	            opacity : 1,
	            filter : "alpha(opacity=" + 100 + ")"
	        }, 6000);

	        $ ('div#map7').animate (
	        {
	            left : '100px',
	            opacity : 1,
	            filter : "alpha(opacity=" + 100 + ")"
	        }, 7000);

	        $ ('div#map8').animate (
	        {
	            left : '100px',
	            opacity : 1,
	            filter : "alpha(opacity=" + 100 + ")"
	        }, 8000);

	        $ ('div#map9').animate (
	        {
	            left : '100px',
	            opacity : 1,
	            filter : "alpha(opacity=" + 100 + ")"
	        }, 9000);

	        $ ('div#map10').animate (
	        {
	            left : '100px',
	            opacity : 1,
	            filter : "alpha(opacity=" + 100 + ")"
	        }, 10000);

	        $ ('div#map11').animate (
	        {
	            left : '100px',
	            opacity : 1,
	            filter : "alpha(opacity=" + 100 + ")"
	        }, 11000);


		}

	//</script>

	//<!--smoothscroll to id jump-->
	//<script>
	$(document).ready(function(){
	  // Add smooth scrolling to all links
	  $("a").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if
	  });
	});
	//</script>