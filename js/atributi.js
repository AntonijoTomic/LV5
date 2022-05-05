function promjena(){
    var convert = document.getElementById('izbornik').value;
document.getElementById("input").type=convert; 
var skup = document.getElementById("input").value; 
const Student = {Tip:document.getElementById("input").type, Vrijednost:skup};
console.log(Student);
}