const canvas = document.querySelector("canvas");
const gameover = document.querySelector('.gameover_overlay');
const context = canvas.getContext("2d");
let rand;
let mainx,mainy,mainwidth,mainheight,maincolor;

function clearCanvas(canvas){
    canvas.width=canvas.width;
}

// 6970
canvas.addEventListener('click',function(){
    
    $('html, body').animate({
        scrollTop:$('#need').offset().top
    },50000);
})

function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function Square(x, y, width, height,color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.isSelected = false;
}

let squares = [];

function addSquare(x,y,width,height,color) {
    let square = new Square(x, y, width,height, color);
    squares.push(square);
}

canvas.width = 1000;
canvas.height = 6970;

for(let j=0;j<7000;j+=120){
    for(let i=0;i<400;i+=100){
        mainx=10+i;
        mainy=10+j;
        mainwidth=100;
        mainheight=120;
        rand=Math.random();
        if(rand>=0.3){
            context.beginPath();
            context.rect(mainx,mainy,mainwidth,mainheight);
            context.fillStyle='white';
            context.strokeStyle='black';
            context.lineWidth =0.7;
            context.stroke();
            context.fill();
            addSquare(mainx,mainy,mainwidth,mainheight,'white');
        }else{
            context.beginPath();
            context.rect(mainx,mainy,mainwidth,mainheight);
            context.fillStyle='black';
            context.strokeStyle='white';
            context.lineWidth =0.7;
            context.stroke();
            context.fill();
            addSquare(mainx,mainy,mainwidth,mainheight,'black');
        }
    }
}

canvas.addEventListener('click',function(e){
    var clickX = e.pageX - canvas.offsetLeft;
    var clickY = e.pageY - canvas.offsetTop;
    for(let i=squares.length-1; i>=0; i--) {
        let square = squares[i];
        let thatx=square.x;
        let thaty=square.y;
        let distanceFromX = clickX-square.x;
        let distanceFromY = clickY-square.y;

        if (distanceFromX>0 && distanceFromY>0 && distanceFromX<100 && distanceFromY<120) {

            if(square.color=='black'){
                squares[i]=new Square(thatx, thaty, 100,120, 'white');
                context.beginPath();
                context.rect(thatx,thaty,100,120);
                context.fillStyle='white';
                context.strokeStyle='black';
                context.lineWidth =0.7;
                context.stroke();
                context.fill();
            }else if(square.color=='white'){
                context.beginPath();
                context.rect(thatx,thaty,100,120);
                context.fillStyle='red';
                context.strokeStyle='black';
                context.lineWidth =0.7;
                context.stroke();
                context.fill();
                // gameover.style.display='flex';
                setTimeout(function(){
                    alert('GAME OVER');
                    location.reload();
                    document.querySelector('.bott').scrollIntoView();
                },100)
                
                
            }

            return;
        }
    }
});
document.addEventListener('click',function(){
    
    document.querySelector('.bott').scrollIntoView();
})







// прямые линии
// context.beginPath();
// context.moveTo(10,10);
// context.lineTo(300,400);
// context.lineTo(400,10);

// context.strokeStyle = 'red';
// context.lineWidth=10;
// context.lineCap='round';
// context.lineJoin='round';

// context.stroke();



