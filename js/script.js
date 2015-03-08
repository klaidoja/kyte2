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

$(document).ready(function(){
   $('body').on('click','.option li',function(){
	var i = $(this).parents('.select').attr('id');
	var v = $(this).children().text();
	var o = $(this).attr('id');
	$('#'+i+' .selected').attr('id',o);
	$('#'+i+' .selected').text(v);
});
   });