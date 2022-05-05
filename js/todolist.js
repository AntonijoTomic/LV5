$(document).ready(function(){
            
       
    $("button").click(function(){
        var str = $("#myInput").val();
        $("#menu").append('<li><i class="fa fa-trash ml-2" onclick="Obrisi(this)"></i><input type="checkbox">'+str+'</li>');
    });
    
    
});
function Obrisi(id){
    $(id).parent().remove();
}
