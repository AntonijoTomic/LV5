var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
$(document).ready(function(){
    $('.myimgdivshowhide').hide();
	$('.myimgdivshowhide2').hide();
    $('#target').click(function(){
        $('.myimgdivshowhide').show();
        $('.myimgdivshowhide2').hide();
 });
	$('#target2').dblclick(function(){
        $('.myimgdivshowhide').hide();
   		$('.myimgdivshowhide2').show();
	});
    

    
});