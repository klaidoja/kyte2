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

// $("#seade-dropdown li a").selected(function(){
//   var selText = $(this).text();
//   alert("tkktk");
//   $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
// });

// $(document).ready(function(){
// 	$("#seade-dropdown li a").click(function(){
// 		//alert("hei");
// 		alert($("#test").html());
// 	});
// });
$(document).ready(function(){
	$('#seade').change(function(){
		$('#fireplace').src = this.value;
		$('#fireplace').attr('src', $(this).val());
	});
});

// $(function(){
// 	$('#theSelect').on('change', function(){
// 		$('#theImage').attr('src', $(this).val() + '.png');
// 	});
// });