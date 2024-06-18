const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const playerImage = new Image();
//  let x=1;
playerImage.src = "./shadow_dog.png";
//  dimention of the sample picture is 6876px * 5230px devide equaly in 12 colums and 10 rows
let breath = 523;//total height divded by no of rows 
let length = 575; //total width devided ny no of colums +2 for margin error
let frameX = 0;
let frameY = 0;
let gameframe = 0;
let rate = 3;
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position =Math.floor(gameframe/rate)%6;
    frameX=length*position;

    ctx.drawImage(playerImage, frameX, frameY * breath, length, breath, 0, 0, length, breath)
    if (gameframe % rate == 0) 
    {
        if (frameX < 5)
            frameX++;
        else
            frameX = 0
    }
    gameframe++;
    requestAnimationFrame(animate);
}
animate()