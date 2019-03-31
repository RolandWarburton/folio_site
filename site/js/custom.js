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

function glitch() {

    var myFunction = function() {
          console.log("start")
          // select all lists
          var $all = $("li")

          // pick between random elements to glitch
           $(shuffle($all).slice(0,2)).toggleClass("glitch");
           // remove effect
           timer1 = Math.round(Math.random() * (1000)+800)
           // re-run the function
           timer2 = Math.abs(timer1 - Math.round(Math.random() * 2000)+1000)

           // wait a random time and then remove all glitch classes
           setTimeout(function(){$("li").removeClass("glitch");}, timer1);

           if ((Math.round(Math.random()*100))<50) {
                // TODO: random event
          }



           // repeat for a set duration
           setTimeout(myFunction, timer2);
 }
    myFunction();
}


glitch();







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
