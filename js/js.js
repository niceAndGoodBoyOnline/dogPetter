// html references
let theBody = document.getElementById('theBody');
let theScore = document.getElementById('theScore');
let resetButton = document.getElementById('resetButton');
let changeMode = document.getElementById('changeMode');
let emotionalState = document.getElementById('emotionalState');
let missBox = document.getElementById('missBox');
let bgm = document.getElementById('bgm');
let bgmSource = document.getElementById('bgmSource');
let fx = document.getElementById('fx');
let fxSource = document.getElementById('fxSource');
let fxDogs = document.getElementById('fxDogs');
let fxDogsSource = document.getElementById('fxDogsSource');

// initializing js variables
let scoreRecord = 0;
let attemptRecord = 0;
let dogOne = document.getElementById('dogOne');
	dogOne.src = "./img/dog.gif";
let dogTwo = document.getElementById('dogTwo');
	dogTwo.src = "./img/dog.gif";
let dogPic = dogOne.src;
let jumpOne = 0;
let jumpTwo = 0;
let modeFlag = 2000;
let scoredRecent = false;
moveDog(dogTwo);
let bgmOn = false;

bgm.volume = 0.3;
fxvolume = 0.4;



prepareNextDog(dogOne);
prepareNextDog(dogTwo);


function random10(){
	rollNum = Math.floor(Math.random() * 10)
	return rollNum
}

//switches between Amir Mode and Story Mode
function modeToggle(){
	clearJump(dogOne);
	clearJump(dogTwo);
	theScore.innerHTML = 0;
	scoreRecord = 0;
	attemptRecord = 0;
	
	if (modeFlag == 2000){
		bgm.src = "./media/gamer_mode.mp3";
		bgm.load();
		bgm.play();
		modeFlag = 1200;
		emotionalState.style = 'visibility: visible';
		changeMode.innerHTML = "Change to Amir Mode"
	}
	
	else{
		modeFlag = 2000;
		bgm.src = './media/amir_mode.mp3';
		bgm.load();
		bgm.play();
		emotionalState.style = 'visibility: hidden';
		changeMode.innerHTML = "Change to Gamer Mode"
	}
	
	jumpOne = setInterval(function() {moveDog(dogOne);}, modeFlag);
	jumpTwo = setInterval(function() {moveDog(dogTwo);}, modeFlag);
	
}


function gameManager(thisDog){
	
	checkBGM();
	
	if (thisDog.src == dogPic){
		dogHandle(thisDog);
		gameState();
		modeState();
		scorePoints(thisDog);
	}
	
}


function checkBGM(){
	
	if (bgmOn == false){
		bgmOn = true;
		bgm.play();
	}	
}


function soundManager(thisSound){
	rollSound = random10()
	
	if (thisSound == 'life5'){
		fxSource.src = "./media/sad1.mp3";
		fx.load();
		fx.play();	
	}
	if (thisSound == 'life10'){
		fxSource.src = "./media/sad2.mp3";
		fx.load();
		fx.play();	
	}
	if (thisSound == 'life15'){
		fxSource.src = "./media/sad3.mp3";
		fx.load();
		fx.play();	
	}
	if (thisSound == 'life20'){
		fxSource.src = "./media/sad5.mp3";
		fx.load();
		fx.play();	
	}
	
	
	if (thisSound == 'pet'){
		
		if (rollSound < 3){
		fxSource.src = "./media/whooLikesPets.mp3";
		fx.load();
		fx.play();	
		}
		else if (rollSound < 5){
		fxSource.src = "./media/whosaGoodBot.mp3";
		fx.load();
		fx.play();	
		}
		else if (rollSound < 7){
		fxSource.src = "./media/lilQT.mp3";
		fx.load();
		fx.play();	
		}
		else if (rollSound < 9){
		fxSource.src = "./media/handsomelilGuy.mp3";
		fx.load();
		fx.play();	
		}
		else{
		fxSource.src = "./media/gibberish.mp3";
		fx.load();
		fx.play();	
		}
	}
	
	if (thisSound == 'miss'){
		
		if (rollSound < 2){
		fxSource.src = "./media/miss1.mp3";
		fx.load();
		fx.play();
		}
		else if (rollSound < 5){
		fxSource.src = "./media/miss2.mp3";
		fx.load();
		fx.play();	
			
		}
		else if (rollSound < 7){
		fxSource.src = "./media/miss3.mp3";
		fx.load();
		fx.play();	
			
		}
		else if (rollSound < 9){
		fxSource.src = "./media/miss4.mp3";
		fx.load();
		fx.play();	
			
		}
		else{
		fxSource.src = "./media/bigmiss.mp3";
		fx.load();
		fx.play();	
			
		}
	}
	
	
	
}


function dogHandle(thisDog){
	clearJump(thisDog);	
	soundManager('pet');
	dogSounds(thisDog);
	emotionalState.innerHTML = "❤️";
	thisDog.src = "./img/petDog.gif";
}


function dogSounds(thisDog){
		
		if (thisDog.height == 100){
			fxDogsSource.src = './media/medium dog.mp3';
			fxDogs.load();
			fxDogs.play();
		}
		else if (thisDog.height == 200){
			fxDogsSource.src = './media/big dog.mp3';
			fxDogs.load();
			fxDogs.play();
		}
		else{
			fxDogsSource.src = './media/small dog.mp3';
			fxDogs.load();
			fxDogs.play();			
		}
	console.log(fxDogsSource);
	
}


function twoDogPlease(){
	dogTwo.style = "visibility: visible";	
}


function gameState(){
	
	if (scoreRecord >= 25){
		window.location.href = "./html/vacation.html";
	}
	
	else {
		resetButton.style = "visibility: visible;";
		changeMode.style = "visibility: visible;"
	}
	
}


function modeState(){
	
	if (modeFlag < 200){
		
	}
	
	else if (modeFlag < 2000){
		modeFlag -= 50;
	}
	
}

// score handling
function scorePoints(thisDog){
	theScore.innerHTML = (scoreRecord += 1);
	attemptRecord = 0;
	scoredRecent = true;
	setTimeout(function() {prepareNextDog(thisDog); }, 1600);
}


function clearJump(thisDog){
	
	if (thisDog == dogOne){
		clearInterval(jumpOne);
	}
	
	else{
		clearInterval(jumpTwo);
	}
	
}


// changes dog to original sprite
function resetDog(thisDog){
	thisDog.src = "./img/dog.gif";
}


function setJump(thisDog){
	
	if (thisDog == dogOne){
		console.log(thisDog);
		jumpOne = setInterval(function() {moveDog(thisDog);}, modeFlag);
	}	
	else{
		console.log(thisDog);
		jumpTwo = setInterval(function() {moveDog(thisDog);}, modeFlag);
		
	}
}


// randomizes dog, handles media, sets interval again
function prepareNextDog(thisDog){

	rollDog = random10();
	
	resetDog(thisDog);
	
	if (rollDog <= 3){
		thisDog.style = "width: 75px; height: 50px";	
	}
	
	else if (rollDog >= 7){
		thisDog.style = "width: 125; height: 100px;";
	}
	
	else{
		thisDog.style = "width: 250px; height: 200px;";
	}
	
	setJump(thisDog);
}


function moveDog(thisDog){
	
	let w = window.innerWidth;
	let h = window.innerHeight;
	
	let pictureWidth = thisDog.clientWidth;
	let pictureHeight = thisDog.clientHeight;
	
	let ranLeft = Math.floor((Math.random() * (w - (pictureWidth + 20) )))
	let ranTop = Math.floor((Math.random() * (h - (pictureHeight + 20) )))
	
	thisDog.style.left = (ranLeft + 'px' );
	thisDog.style.top = (ranTop + 'px');
	
}


function setupMissBox(){
	let w = window.innerWidth;
	let h = window.innerHeight;
	
	missBox.style = ("width:" + w*.9 + "; height:" + h*.7);
	
}
setupMissBox();


// checks for misses
function attempt(){
	setupMissBox();
	checkBGM();
	attemptRecord += 1;
	
	if (dogOne.src ==  dogPic)
	{
		dogOne.src = "./img/missDog.png";
		setTimeout(function() {resetDog(dogOne);},350);
	}
	if (dogTwo.src ==  dogPic)
	{
		dogTwo.src = "./img/missDog.png";
		setTimeout(function() {resetDog(dogTwo);},350);
	}
	console.log('miss ' + attemptRecord);
	soundManager('miss');
	lifeState();
}


function lifeState(){
	
	if (modeFlag < 2000){
		
		if (attemptRecord == 5){
			soundManager('life5');
			emotionalState.innerHTML = "💔";
		}
		else if (attemptRecord == 10){
			soundManager('life10');
			emotionalState.innerHTML = "😵";
		}
		else if (attemptRecord == 15){
			soundManager('life15');
			emotionalState.innerHTML = "💀";
		}
		else if (attemptRecord >= 20){
				window.location.href = "./html/gameover.html";
		}
		
	}

}

