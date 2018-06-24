var modal1 = document.getElementById('portfolio-modal1');
//var modal2 = document.getElementById('portfolio-testmodal2');
var btn1 = document.getElementById("portfolio1");
//var btn2 = document.getElementById("testmodal2");
var span1 = document.getElementsByClassName("close")[0];
//var span2 = document.getElementsByClassName("close")[1];

btn1.onclick = function() {
	modal1.style.display = "block";
}
span1.onclick = function() {
	modal1.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == modal1) {
		modal1.style.display = "none";
	}
}
