var modal1 = document.getElementById('portfolio-modal1');
var modal2 = document.getElementById('portfolio-modal2');
var modal3 = document.getElementById('portfolio-modal3');
var modal4 = document.getElementById('portfolio-modal4');
var modal5 = document.getElementById('portfolio-modal5');
var btn1 = document.getElementById("portfolio1");
var btn2 = document.getElementById("portfolio2");
var btn3 = document.getElementById("portfolio3");
var btn4 = document.getElementById("portfolio4");
var btn5 = document.getElementById("portfolio5");
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];

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

btn2.onclick = function() {
	modal2.style.display = "block";
}
span2.onclick = function() {
	modal2.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == modal2) {
		modal2.style.display = "none";
	}
}

btn3.onclick = function() {
	modal3.style.display = "block";
}
span3.onclick = function() {
	modal3.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == modal3) {
		modal3.style.display = "none";
	}
}

btn4.onclick = function() {
	modal4.style.display = "block";
}
span4.onclick = function() {
	modal4.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == modal4) {
		modal4.style.display = "none";
	}
}

btn5.onclick = function() {
	modal5.style.display = "block";
}
span5.onclick = function() {
	modal5.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == modal5) {
		modal5.style.display = "none";
	}
}
