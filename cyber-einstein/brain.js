let isListening = false;

let speakTime = 2000;

function listen() {
	if (isListening === false){
		document.getElementById("button").style.backgroundImage = "url(/cyber-einstein/squarepix.png)";
		document.getElementById("rec").style.backgroundImage = "url(/cyber-einstein/recpix.gif)";
		isListening = true;
	} else{
		document.getElementById("button").style.backgroundImage = "url(/cyber-einstein/circlepix.png)";
		document.getElementById("rec").style.backgroundImage = "";
		isListening = false;
	};
};

function speak() {
	document.getElementsByClassName("ein")[0].src = "/cyber-einstein/einstein_talk.gif";
	setTimeout(() => {
		document.getElementsByClassName("ein")[0].src = "/cyber-einstein/einstein.png";
		}, speakTime)
};

function think() {
	document.getElementsByClassName("ein")[0].src = "/cyber-einstein/einstein_closed.png";
}

function reset(){
	document.getElementsByClassName("ein")[0].src = "/cyber-einstein/einstein.png"
}

function setSpeakTime(){
	speakTime = document.getElementById("speakTimeInput").value;
}

function hideControls(){
	document.getElementById("controls").style.display = "none";
}

function unhideControls(){
	document.getElementById("controls").style.display = "block";
}

document.addEventListener("keypress", function(event) {
  if (event.key == 't') {
    think();
  }
  if (event.key == 's') {
    speak();
  }
  if (event.key == 'r') {
    reset();
  }
  if (event.key == 'h') {
    hideControls();
  }
  if (event.key == 'u') {
    unhideControls();
  }
});


//cursor

const cursorRounded = document.querySelector('.rounded');


const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor)