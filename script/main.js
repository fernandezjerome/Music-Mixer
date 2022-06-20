(() => {

	const resetButton = document.querySelector('.resetButton'), 
		restartButton = document.querySelector('.restartButton'),
		instrumentZones = document.querySelectorAll('.iconZone'), 
		instruments = document.querySelectorAll('.instruments img'), 
		dropZones = document.querySelectorAll('.drop-zone');
	const pieces = ["instrument1", "instrument2", "instrument3", "instrument4", "instrument5", "instrument6", "instrument7", "instrument8"];


	


	function dragStart(event) {
		let zone = event.target.parentNode;
		event.dataTransfer.setData("text/plain", this.id);
		if (zone.classList.contains("hasPiece")) {
		    zone.classList.remove("hasPiece");
		}
		if (zone.classList.contains("playing")) {
			zone.classList.remove("playing");
		}
	}
	
	function allowDragOver(event) {
		event.preventDefault();
	}



	function setInstruments(event) {
		pieces.forEach((piece, index) => { 
		instruments[index].src = `images/${piece}.svg`;
		instruments[index].id =`${piece}`; 
	});
	}


	function playSound(event) {
		let zone = event.target;
		let currentPiece = event.dataTransfer.getData("text/plain", this.id);
   		let audioElement = document.querySelector(`audio[data-instrument="${currentPiece}"]`);
   		let currentInstrument = document.querySelector(`#${currentPiece}`);
  
  		if (!audioElement) { return }
  		if (zone.classList.contains("playing")) { return }
  	 	
  	 	audioElement.currentTime = 0;
  	 	audioElement.play(); 
  	 	zone.classList.add("playing");
  	 	currentInstrument.classList.add("playing");
  	 	audioElement.loop = true;

  	 	return audioElement;
  	} 

	function allowDrop(event) {
		let zone = event.target;
		if (zone.classList.contains("hasPiece")) { return false }
		let currentPiece = event.dataTransfer.getData("text/plain", this.id);
		let currentInstrument = document.querySelector(`#${currentPiece}`);
		zone.appendChild(document.querySelector(`#${currentPiece}`));
		zone.classList.add('hasPiece');
	    currentInstrument.classList.add('hasPiece');
	}

	window.addEventListener('load', setInstruments);

	resetButton.addEventListener('click', reset);
	restartButton.addEventListener('click', restart);

	dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));
	dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));
	dropZones.forEach(zone => zone.addEventListener('drop', playSound));
	instrumentZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));
	instrumentZones.forEach(zone => zone.addEventListener('drop', allowDrop));
	instrumentZones.forEach(zone => zone.addEventListener('drop', stopSound));
})();