function rotateScenes(){
  var scroll = window.pageYOffset,
      relPos = scroll / height,
      angle = 90 * relPos;
  
  if(scroll >= height){
    section1.style.transform = "rotateX(90deg)";
    section2.style.transform = "rotateX(0deg)";
    section3.style.transform = "rotateX(0deg)";  
    section4.style.transform = "rotateX(0deg)"; 
  }
  
  section1.style.transform = "rotateX(" + (angle) + "deg)";
  section2.style.transform = "rotateX(-" + (90 - angle) + "deg)";
  section3.style.transform = "rotateX(-" + (145  - angle) + "deg)";
  section4.style.transform = "rotateX(-" + (225- angle) + "deg)";  
}

var section1 = document.querySelector("#top"),
    section2 = document.querySelector("#cont"),
    section3 = document.querySelector("#content"),
    section4 = document.querySelector("#port"),
    height = window.innerHeight;
window.addEventListener("scroll", rotateScenes);

//string//
var myString = "Hola. "+"Me llamo Pablo trabajo como front-end y diseñador gráfico."+" Apasionado por los detalles, con algunos años de experiencia,"+"trabajo en Buenos Aires y en Quito, actualmente vivo en Argentina. " +"Podés encontrarme en Linkedin o por pablojaramunoz@gmail.com "+"Saludos.";


var	myArray = myString.split(""),
		loopTimer, 
		setToday;

setToday = document.getElementById('newTime').outerHTML = "(" + getFormattedDate() + ")";

function frameLooper() {
	if (myArray.length > 0) {
		document.getElementById('myTypingText').innerHTML += myArray.shift();
	} else {
		clearTimeout(loopTimer);
	}
	loopTimer = setTimeout('frameLooper()', 70);
}

frameLooper();

function getFormattedDate() {
  var date = new Date();

  var str = date.getFullYear() + "-" + 
		  (date.getMonth() + 1) + "-" + 
		  date.getDate() + " " +  
		  date.getHours() + ":" + 
		  date.getMinutes() + ":" + 
		  date.getSeconds();

  return str;
}