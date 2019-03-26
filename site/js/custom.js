

function resize() {
var width = $(document).width();

return width;
}


//START DOC LOAD
$( document ).ready(function() {
  if (typeof jQuery == 'undefined') {alert("jQuery IS NOT loaded")}
  else {
    //alert("Jquery Loaded")
  }

  document.documentElement.setAttribute("data-browser", navigator.userAgent);

  //on window resize
  window.onresize = resize;





  // jQuery(this).prev("body").attr("id","title-content");

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




// delayedAlert();

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
