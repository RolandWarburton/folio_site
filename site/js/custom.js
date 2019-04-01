//START DOC LOAD
$( document ).ready(function() {
  if (typeof jQuery == 'undefined') {alert("jQuery IS NOT loaded")}
  else {
    //alert("Jquery Loaded")
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

// var $all = $("li")
// $(shuffle($all).slice(0, $all.length-4)).toggleClass("glitch");
// setTimeout(function(){$("li").removeClass("glitch");}, 1000);
// console.log($all.length)

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

// function a() {
//     var deferred = new $.Deferred();
//     $all = $("li")
//     glitch($all, 1000, 2000)
//     console.log("test")
//     // stuff -- resolve deferred once async method is complete
//     setTimeout(function () {
//         deferred.resolve();
//     }, 2000)
//
//     return deferred.promise();
// }
//
// function b() {
//     console.log('b')
//     $all = $("li")
//     glitch($all, 1000, 2000)
// }
//
//
// a().then(b);

$running = false
$i = 0
$counter = 0

function glitch_init() {

var myFunction = function() {

    // select all lists
    var $all = $(".title ul li,h5")

    $chance = Math.round(Math.random() * (2))

    switch($chance) {
      case 0:
            if ($i == 0 && !$running) {
                  glitch($all, 350, 5000, 0, 1)
                  console.log("short glitch")
                  $i = 0
            }
            $counter+=Math.round(Math.random() * (5))
      break;
      default:
            $counter+=Math.round(Math.random() * (3))
            if ($counter > 20 && !$running) {
                  glitch($all, 250, 5000, 0, 2)
                  console.log("long glitch")
                  $counter = 0
      } else {
            console.log("skip")
      }
      break;
    }

     // repeat for a set duration
     setTimeout(myFunction, 1000);
}
myFunction();
}


glitch_init();







  // jQuery(this).prev("body").attr("id","title-content");
//
// setTimeout(function(){  });
//
// var counter = 0;
// (function addGlitch() {
//
//   setTimeout(function() {
//     if (counter<=10) {
//          var r = Math.floor((Math.random() * 4)+1);
//           var a = $( ".content ul:nth-child("+r+")")
//
//
//           console.log(r);
//
//         $(a).attr("class","glitchy");
//
//       addGlitch();
//     }
// }, 1000);
//
// })();

//
// setTimeout(function(){  });
//
// var counter = 0;
// (function addGlitch() {
//
//   setTimeout(function() {
//     if (counter<=10) {
//          var r = Math.floor((Math.random() * 4)+1);
//           var a = $( ".content ul:nth-child("+r+")")
//
//
//           console.log(r);
//
//          //  $("a").addClass("glitchy").delay(1000).queue(function(){
//          //     $(this).removeClass("glitchy").dequeue();
//          //     console.log("test");
//          // });
//
//
//
//       addGlitch();
//     }
// }, 1000);
//
// })();
//



// delayedAlert();
//
// function delayedAlert() {
// timeoutID = window.setTimeout(2000);
// $('.title').addClass("glitchy")
//                        .delay(500)
//                        .queue(function() {
//                            $(this).removeClass("glitchy");
//                            $(this).dequeue();
//                        });
// }
//





// console.log("loaded");

}); //CLOSE
