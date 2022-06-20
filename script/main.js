(() => {

const instrumentZones = document.querySelectorAll('.iconZone'), 
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
	}

	function setInstruments(event) {
		pieces.forEach((piece, index) => { 
		instruments[index].src = `images/${piece}.svg`;
		instruments[index].id =`${piece}`; 
	});
	}


	function allowDrop(event) {
		event.preventDefault();		
		if (this.children.length >= 1) { return;}
		let droppedElId = event.dataTransfer.getData('draggedEl');
		this.appendChild(document.querySelector(`#${droppedElId}`));
	}

	pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	});
})();