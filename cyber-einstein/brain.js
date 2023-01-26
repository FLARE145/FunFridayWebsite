let isListening = false;

let talkTime = 2000;

function listen() {
	if (isListening === false){
		document.getElementById("button").style.backgroundImage = "url(/squarepix.png)";
		document.getElementById("rec").style.backgroundImage = "url(/recpix.gif)";
		isListening = true;
	} else{
		document.getElementById("button").style.backgroundImage = "url(/circlepix.png)";
		document.getElementById("rec").style.backgroundImage = "";
		isListening = false;
	};
};

function talk() {
	document.getElementsByClassName("ein")[0].src = "/einstein_talk.gif";
	setTimeout(() => {
		document.getElementsByClassName("ein")[0].src = "/einstein.png";
		}, talkTime)
};

function think() {
	document.getElementsByClassName("ein")[0].src = "/einstein_closed.png";
}

function reset(){
	document.getElementsByClassName("ein")[0].src = "/einstein.png"
}

document.addEventListener("keypress", function(event) {
  if (event.key == 't') {
    think();
  }
  if (event.key == 's') {
    talk();
  }
  if (event.key == 'r') {
    reset();
  }
});



function readCookie(name) {
	if (document.cookie !== '') {
	    let allCookies = document.cookie.split('; ');
		let expected = name + '=true';
		if (allCookies.find(row => row.startsWith(name)) === expected) {
			let cookieValue = allCookies.find(row => row.startsWith(name)).split('=')[1];
	        return cookieValue;
		} else{
			return false;
	}}
}