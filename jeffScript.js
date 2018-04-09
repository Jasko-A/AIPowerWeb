//<!--Team member detail toggle-->
//<script>
function teamFunctionIn(ids){
	$(document.getElementById(ids)).slideDown("slow");	    	
}	
function teamFunctionOut(ids){
	$(document.getElementById(ids)).slideUp("fast");	    	
}
//</script>


// google chart
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Distribution', 'AIP (in biliions'],
        ['Pre-sale & ICO',     35],
        ['Mining',      20],
        ['Community',  10],
        ['Foundation', 15],
        ['Team',    20]
        ]);

    var options = {
    is3D:true,
        legend:{position:'top', alignment:'center'},
        backgroundColor:'transparent',
        legendTextStyle: {color:'#FFF'},
        titleTextStyle: { color: '#FFF' },
        hAxis: {
            textStyle:{color: '#FFF'}
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}





//	<!--Roadmap Animation-->
	//<script>
function mapFunction(){
	$ ('div#map1').animate (
    {
        left : '100px',
        opacity : 1,
        filter : "alpha(opacity=" + 100 + ")"
    }, 500);

    $ ('div#map2').animate (
    {
        left : '100px',
        opacity : 1,
        filter : "alpha(opacity=" + 100 + ")"
    }, 700);

    $ ('div#map3').animate (
    {
        left : '100px',
        opacity : 1,
        filter : "alpha(opacity=" + 100 + ")"
    }, 900);

    $ ('div#map4').animate (
    {
        left : '100px',
        opacity : 1,
        filter : "alpha(opacity=" + 100 + ")"
    }, 1100);

    $ ('div#map5').animate (
    {
        left : '100px',
        opacity : 1,
        filter : "alpha(opacity=" + 100 + ")"
    }, 1300);

    $ ('div#map6').animate (
    {
        left : '100px',
        opacity : 1,
        filter : "alpha(opacity=" + 100 + ")"
    }, 1500);

    $ ('div#map7').animate (
    {
        left : '100px',
        opacity : 1,
        filter : "alpha(opacity=" + 100 + ")"
    }, 1799);

    $ ('div#map8').animate (
    {
        left : '100px',
        opacity : 1,
        filter : "alpha(opacity=" + 100 + ")"
    }, 2000);

    $ ('div#map9').animate (
    {
        left : '100px',
        opacity : 1,
        filter : "alpha(opacity=" + 100 + ")"
    }, 2300);

    $ ('div#map10').animate (
    {
        left : '100px',
        opacity : 1,
        filter : "alpha(opacity=" + 100 + ")"
    }, 2500);

    $ ('div#map11').animate (
    {
        left : '100px',
        opacity : 1,
        filter : "alpha(opacity=" + 100 + ")"
    }, 2800);


}

//</script>

//<!--smoothscroll to id jump-->


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").not("#slideleft").not("#slideright").on('click touchstart', function(event) {

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


//background video rate
$( document ).ready(function() {
    document.getElementById("background").playbackRate = .72;
});

//<!--function for when video doesnt play on iPhone-->

function fallback(video)
{
  var img = video.querySelector('img');
  if (img)
    video.parentNode.replaceChild(img, video);
}
