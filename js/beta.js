let bossDog = document.getElementById('bossDog');
let hpBar = document.getElementById('hpBar');
let mpBar = document.getElementById('mpBar');
let epBarSpan = document.getElementById('epBarSpan');
let mpBarSpan = document.getElementById('mpBarSpan');
let scoreZone = document.getElementById('scoreZone');

let offerBoneTimeout = 3000;
let offerBoneCooldownFlag = true;
let offerBoneFlag = false;
let defendFlag = false;
let petScore = 0;
let dogEpPercent, dogEp, dogMpPercent, dogMp, dogWildness, dogOffence, defenceUp;


randomizeDogStats()
dogOffence = setDogOffence();


function randomizeDogStats(){
	dogEp = Math.floor(Math.random() * 10000);
		
		if (dogEp < 3000){
			dogEp += normalizeAmount()
		}
		else if(dogEp >= 10000){
			dogEp -= normalizeAmount()
			
		}
	
	
	dogEpPercent = Math.floor(dogEp/100);
	dogMp = Math.floor(Math.random() * 10000);
	
	
		if (dogMp < 3000){
			dogMp += normalizeAmount()
		}
		else if (dogMp >= 10000){
			dogMp -= normalizeAmount()
			
		}
		
	dogMpPercent = Math.floor(dogMp/100);
	dogWildness = Math.floor(Math.random() * 100);
	console.log("wildness: " + dogWildness);
	meterManger()
}

function normalizeAmount(){
	return (3000 * (Math.floor(Math.random() * 10) + 1))
}

function offerBone(){
	
	let rightHand = document.getElementById('petHand');
	let rollNum = Math.random()*10;
	
	if (offerBoneCooldownFlag == true){
		offerBoneCooldownFlag = false;
		rightHand.style.height = "40%"
		rightHand.src = "../img/givebone.png";
		setTimeout(function() {offerBoneCooldownFlag = true}, offerBoneTimeout)
		setTimeout(function() {rightHand.style.top = "60%"; rightHand.style.zIndex = 2; }, 50);
		setTimeout(function() {resetRightHand(rightHand);},3000);
	
		bonusMood = (Math.floor(Math.random() * 10) * 0.1 + 1);
		
			if (rollNum > 5){
				dogEp += 30*bonusMood;
			
			}
			else if (rollNum >9){

				dogEp += 100*bonusMood;
			}
			else{
				console.log('CRIT')
				dogEp += 400*bonusMood;
			}
		meterManger()
	}
	else {
		resetRightHand(rightHand);
	}
	
}

function resetRightHand(thisHand){
	offerBoneFlag = false;
	thisHand.src = '../img/handpet.png';
	thisHand.style = 'position: absolute; left: 60%; top: 70%; z-index: 5;'
}

function defendYourself(){
	let leftHand = document.getElementById('defendHand');
	let rollNum = Math.random()*10;
	
	if (defendFlag == false){
		defenceUp = setInterval(function() {dogMp -= 100; meterManger()}, 500);
		defendFlag = true;
		leftHand.style.top = '40%';
		leftHand.style.left = '20%';
		leftHand.src = '../img/handdefend.png';
	}	
	
	else{
		resetLeftHand(leftHand);
		clearInterval(defenceUp);
	}
}

function resetLeftHand(thisHand){
	defendFlag = false;
	thisHand.src = "../img/handpetlo.png";
	thisHand.style = "position: absolute;left: -10%; top: 70%; z-index: 4;";
}


function petDog(){
	
	if (defendFlag == false && offerBoneFlag == false)
	{
		dogEp = (dogEp -= 30*Math.random());
		dogMp = (dogMp += 5*Math.random());
		petScore += 1;
		scoreZone.innerHTML = "Pets: " + petScore;
		meterManger()
	}
}

function dogBork(){
	
	clearInterval(dogOffence);
	
	bossDog.classList.add('bark')
	
	setTimeout(function() {bossDog.style = "filter: grayscale(100%) brightness(30%) sepia(100%) hue-rotate(-50deg) saturate(900%) contrast(0.8);"}, 200);
	
	setTimeout(function() {bossDog.style = "filter: ";},300)
	
	setTimeout(function() {bossDog.classList.remove('bark')},300)
	
	dogOffence = setDogOffence();
	
}


//
function setDogOffence(){
	
	clearInterval(dogOffence);
	offenceTimer = Math.floor(normalizeAmount() + dogMpPercent*50 - dogEpPercent*10 - dogWildness*10);
	console.log("in SDO")
	if (offenceTimer <= 3000){
		console.log('retry')
		dogOffence = setDogOffence();
	}
	else if (offenceTimer >= 10000){
		offenceTimer -= normalizeAmount()
		console.log(offenceTimer + " big time")
		newTimer = setInterval(function() {bigWOOF()}, offenceTimer)
	return newTimer
	}
	else{
	console.log(offenceTimer);
	newTimer = setInterval(function() {bigWOOF()}, offenceTimer)
	return newTimer
	}
	
}


//
function bigWOOF(){
	let redDog, whiteDog;
	
	console.log('woof coming' + Date());
	
	bossDog.classList.add('grumble')
	
	bossDog.style = "filter: grayscale(100%) brightness(30%) sepia(100%) hue-rotate(-50deg) saturate(700%) contrast(0.8);";
	
	setTimeout(function() {bossDog.classList.remove('grumble');},3000)
	
	whiteDog = setInterval(function() {bossDog.style = "filter: ";},400)
	
	setTimeout(function() {redDog = setInterval(function() {bossDog.style = "filter: grayscale(100%) brightness(30%) sepia(100%) hue-rotate(-50deg) saturate(700%) contrast(0.8);";},400)}, 200)
	
	setTimeout(function() {clearInterval(redDog); clearInterval(whiteDog); checkDefence(); meterManger();}, 2800)
	
	clearInterval(dogOffence);
}


//
function checkDefence(){
	
	clearInterval(dogOffence);
	
	if (defendFlag == true)
	{
		dogOffence = setDogOffence();
	}
	else
	{
		dogBork();
		dogEp -= Math.floor(Math.random() * 100 + 1337)
		bossDog.style = "filter: grayscale(100%) brightness(30%) sepia(100%) hue-rotate(100deg) saturate(700%) contrast(0.8);"
	}

}

function meterManger(){
	dogEpPercent = dogEp/100;
	dogMpPercent = dogMp/100;
	epBarSpan.style.width = dogEpPercent + '%';
	mpBarSpan.style.width = dogMpPercent + '%';
	
	if (dogEpPercent > 80){
		mpBarSpan.style.backgroundColor = "PaleGreen";
	}
	else if (dogEpPercent > 30){
		mpBarSpan.style.backgroundColor = "SlateBlue";
	}
	else{
		mpBarSpan.style.backgroundColor = "Brown";
		
	}
	
	if (dogEp < 2500){
		epBarSpan.style.backgroundColor = "red";
		
	}
	
	else if (dogEp < 5900){
		epBarSpan.style.backgroundColor = "orange";
	}
	else{
		epBarSpan.style.backgroundColor = "LimeGreen"
		
	}

}



