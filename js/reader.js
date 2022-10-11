var sound = new Audio("sounds/barcode.wav");
	// $(document).ready(function() {
	// document.getElementById('btn-scan').addEventListener('click', ()=> {
		document.getElementById('scan-section').hidden = false;
		barcode.config.start = 0.1;
		barcode.config.end = 0.9;
		barcode.config.video = '#barcodevideo';
		barcode.config.canvas = '#barcodecanvas';
		barcode.config.canvasg = '#barcodecanvasg';

		barcode.setHandler(function(barcode) {
			fetch(`resources/new_code.php?code=${barcode}`)
			.then(res => res.text())
			.then(data => {
				if(data == 'success' || data == 'same code'){
					// document.getElementById('scan-section').hidden = true;
					// document.getElementById('result').innerHTML = barcode;
					sound.play();
					window.location.href = 'templates/result_scan.php?code='+barcode;
					// barcode.stop();
					// return true;
				}else{
					console.log(data);
				}
			})
		});

		barcode.init();
		// return console.log('readed');
		// $('#result').bind('DOMSubtreeModified', function(e) {
			// sound.play();	
		// });
	// });