(() => {

	let pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
		dropZones = document.querySelectorAll('.drop-zone');
	


	function allowDrag(event) {
		console.log('started draggin me');
		event.dataTransfer.setData('draggedEl', this.id);
	}

	function allowDragOver(event) {
		event.preventDefault();
		console.log('started draggin over me');
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