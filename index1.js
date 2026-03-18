// Page open alert

window.onload = function(){
alert("बुलढाणा जिल्हा पोलीस वेबसाइट मध्ये स्वागत आहे");
}

document.getElementById("adminBtn").addEventListener("click", showPopup);

function showPopup(){
alert("Admin Login Open होत आहे");
}


document.getElementById("dateInput").addEventListener("change", showDate);

function showDate(){

alert("तुम्ही तारीख निवडली आहे");

}

let buttons = document.querySelectorAll(".alertBtn");

buttons.forEach(function(btn){

btn.addEventListener("click", function(){

let name = btn.innerText;

alert(name + " open होत आहे");

});

});

