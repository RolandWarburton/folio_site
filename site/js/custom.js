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


function init() {

    var myFunction = function() {

           $('.title').toggleClass('glitch');
           var $all = $("li").removeClass("glitch");
           console.log("test")
           $(shuffle($all).slice(0,3)).addClass("glitch");

        var rand = Math.round(Math.random() * (1000 - 500)) + 10; // generate new time (between 3sec and 500"s)
        setTimeout(myFunction, rand);
 }
    myFunction();
}


init();







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





console.log("loaded");

}); //CLOSE
