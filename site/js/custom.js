//START DOC LOAD
$( document ).ready(function() {
  if (typeof jQuery == 'undefined') {alert("jQuery IS NOT loaded")}
  else {
    // alert("Jquery Loaded")
  }

if (jQuery.ui) {
      // console.log("JQUI loaded")
}

  document.documentElement.setAttribute("data-browser", navigator.userAgent);


function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // console.log(i)

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
}

return array;
}

$running = false
$i = 0
$counter = 0

// glitch effect
function glitch($all, remove, reset, slice_start, slice_end) {
      $running = true
      // pick random elements to glitch
       // $(shuffle($all).slice(1,2)).toggleClass("glitch");
       $(shuffle($all).slice(slice_start, slice_end)).toggleClass("glitch");
       // remove effect
       timer1 = Math.round(Math.random() * (1500)+remove)
       // re-run the function
       timer2 = Math.abs(timer1 - Math.round(Math.random() * 2500)+reset)

       // wait a random time and then remove all glitch classes
       setTimeout(function(){
             $(".title ul li,h5").removeClass("glitch");
             $running = false
      }, timer1);
}

function glitch_init() {

var myFunction = function() {

    // select all lists
    var $all = $(".title ul li,h5")

    // case 0 = glitch
    // case 1 = skip
    // case 2 = skip
    $chance = Math.round(Math.random() * (3))

    switch($chance)
    {
          case 0:
          if ($i == 0 && !$running)
          {
                glitch($all, 350, 5000, 0, 1)
                // console.log("short glitch")
                $i = 0
          }
          $counter+=Math.round(Math.random() * (5))
          break;

          // default case hits 2/3 of the time
          default:
          $counter+=Math.round(Math.random() * (3))
          if ($counter > 20 && !$running)
          {
                glitch($all, 250, 5000, 0, 2)
                // console.log("long glitch")
                $counter = 0
          }
          else
          {
                // console.log("skip")
          }
          break;
    }
     // repeat function after 1s
     setTimeout(myFunction, 1000);
}
myFunction();
}

// init glitch effect loop
glitch_init();


function animation(b) {
	anime({
		targets: b,
		// left: block,
		easing: 'easeInOutQuad',
		complete: function(anim) {
			console.log("test")
		}
	})
}


// expand the list v2
$(".more_button ").click(function() {
	var all = $(".content").find(".list")
	var element = $(this).parent()

	$(all.not(element)).slideToggle(500);
	$(element).toggleClass("sticky", 500).promise().done(function(){

		console.log("test promise");

	});

});

function randomValues(element) {
  anime({
    targets: '.container',
    translateX: anime.random(100, 570)

  });
}





// var animation = anime(b)({
// 	targets: b,
// 	height: 0,
// 	easing: 'easeInOutQuad',
// 	complete: function(anim) {
// 		console.log("test")
// 	}
// })

// expand the list
// $(".list").click(function()
// {
//       var all = $('.content > .list');
//       var list = $(this)
//
//       button = list.find(".list_more > a");
//       button.html(button.html() == 'more' ? 'less' : 'more');
//
//       item = list.find("ul").slideToggle("slow");
//       not_item = all.not(item)
//       all.not(list).each(function(index, not_item){
//             console.log(not_item)
//             $(not_item).find("ul").slideUp("slow");
//       });
//
// });






}); //CLOSE
