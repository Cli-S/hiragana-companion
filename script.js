function playSound(e) {
	const allAudio = document.querySelectorAll('audio');
	allAudio.forEach(singleAudio => singleAudio.pause());
	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.classList.remove('playing'));
	const audio = document.querySelector(`.visible audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.visible .key[data-key="${e.keyCode}"]`);

	if(!audio) return;
 	audio.currentTime = 0;
 	audio.play();
 	key.classList.add('playing');
}


// function removeTransition(e) {
//    if(e.propertyName !== 'transform') return;
//    e.currentTarget.classList.remove('playing');
// }


function replace(hide, show ) {
  document.getElementById(hide).style.display="none";
  document.getElementById(hide).classList.remove("visible");
  document.getElementById(show).style.display="flex";
  document.getElementById(show).classList.add("visible");
  const allDivs = document.querySelectorAll('.keys');
}

window.addEventListener('keydown', playSound);
replace("div2", "div1");
