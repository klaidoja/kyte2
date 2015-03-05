// function testFun() {
// 	document.getElementById("pealkiri").innerHTML = "testime JS-i";
// }

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#pealkiri").fadeOut("slow");
//         $("img").fadeIn("slow");
//     });
// });

// $(document).ready(function(){
// $("input").focus(function(){
//     $(this).css("background-color", "#cccccc");
// });
// });

// $(document).ready(function(){
// $("input").blur(function(){
//     $(this).css("background-color", "#ffffff");
// });
// });

   $( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

      var $target = $( event.currentTarget );

      $target.closest( '.btn-group' )
         .find( '[data-bind="label"]' ).text( $target.text() )
            .end()
         .children( '.dropdown-toggle' ).dropdown( 'toggle' );

      return false;

   });