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
let gameframe = 0;
let rate = 5;
let animations = [
    {
        name: 'ideal',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },  {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },  {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'get',
        frames: 4,
    },
]
let i=0,k=0;

let state=document.getElementById('dog');
state.addEventListener('click',()=>{
    k=state.value;
})


function animate() {
    if(gameframe % rate == 0){
        ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(playerImage,(i%((animations[k].frames)-1))*length,k*breath,length,breath,0,0,length,breath);
    i++;
    }
    gameframe++;
    requestAnimationFrame(animate);
}
animate()