bgm = document.getElementById('bgm');
fx = document.getElementById('fx');
theDog = document.getElementById('theDog');

offScreen = window.innerWidth;
onScreen = window.innerWidth;
bgm.play()
fx.play()

function walkTheDog(){
	onScreen = (onScreen - 4);
	theDog.style.left = onScreen + 'px';
	
	if (theDog.style.left < -300){
		theDog.style.left = offScreen;
		theDog.style.top = (Math.floor(Math.random() * 100)) + vh;
	}
	
}

setInterval(walkTheDog, 200);