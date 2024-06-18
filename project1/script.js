 const canvas=document.getElementById('canvas1');
 const ctx =canvas.getContext('2d');
 const CANVAS_WIDTH=canvas.width=600;
 const CANVAS_HEIGHT=canvas.height=600;
 const playerImage= new Image();
//  let x=1;
 playerImage.src="./shadow_dog.png";
 function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    // ctx.fillRect(x,0,100,100);
    // x=x+1;
    ctx.drawImage(playerImage,0,0)
requestAnimationFrame(animate);
 }
 animate()