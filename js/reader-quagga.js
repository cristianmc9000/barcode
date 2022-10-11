var sound = new Audio("sounds/barcode.wav");

Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      constraints:{
        // width:'100%',
        // height:'100%',
        facingMode:'environment'
      },
      area:{
        top:"0%",
        right:'0%',
        left:'0%',
        bottom:'0%'
      },
      target: document.querySelector('#camera')    // Or '#yourElement' (optional)
    },
    // frequency: 2000,
    decoder : {
      readers : ["ean_reader"]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });

Quagga.onProcessed(function(result){
    var drawingCtx = Quagga.canvas.ctx.overlay,
    drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0,0,parseInt(drawingCanvas.getAttribute('width')),parseInt(drawingCanvas.getAttribute('height')));
        result.boxes.filter(function(box){
          return box !== result.box;
        }).forEach(function(box){
          Quagga.ImageDebug.drawPath(box,{
            x:0,
            y:1
          }, drawingCtx,{
            color:'green',
            lineWidth:2
          });
        });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, {
          x:0,
          y:1
        }, drawingCtx, {
          color:'#00F',
          lineWidth:2
        });
      }
      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(result.line, {
          x:'x',
          y:'y'
        }, drawingCtx,{
          color:'red',
          lineWidth:3
        });
      }
    }
})

Quagga.onDetected(function(data){
  console.log(data.codeResult.code);
  let barcode = data.codeResult.code;
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
})