displayArea = document.getElementById("gameover");
bgm = document.getElementById('bgm');

bgm.play()

function randomDisplayArea(){
	rollNum = Math.floor(Math.random() * 10)
	console.log(rollNum);
	if (rollNum == 0){
		displayArea.src = "../img/gameover0.gif";
	}
	else if (rollNum == 1){
		displayArea.src = "../img/gameover1.gif";
	}
	else if (rollNum == 2){
		displayArea.src = "../img/gameover2.gif";
	}
	else if (rollNum == 3){
		displayArea.src = "../img/gameover3.gif";
	}
	else if (rollNum == 4){
		displayArea.src = "../img/gameover4.gif";
	}
	else if (rollNum == 5){
		displayArea.src = "../img/gameover5.gif";
	}
	else if (rollNum == 6){
		displayArea.src = "../img/gameover6.gif";
	}
	else if (rollNum == 7){
		displayArea.src = "../img/gameover7.gif";
	}
	else if (rollNum == 8){
		displayArea.src = "../img/gameover8.gif";
	}
	else if (rollNum == 9){
		displayArea.src = "../img/gameover9.gif";
	}
	else if (rollNum == 10){
		displayArea.src = "../img/gameover10.gif";
	}
	
}

setInterval(function() {randomDisplayArea();},3000)