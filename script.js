function process(){

    var person=document.getElementById("name").value;
    var scenery=document.getElementById("scene").value;

    document.getElementById("result").innerHTML= `<h3>Your Natural Name Is: ${person} ${scenery}</h3>`;

}