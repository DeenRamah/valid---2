let input = document.getElementById("input");
let search = document.getElementById("search");
onchange = "openpage";

function openpage(){
    var x = document.getElementById("serach").value;

    if(x === "Pusified"){
        window.open("/index.html");
    }
    if(x ==="Lambistias"){
        window.open("/simp.html");
    }
}