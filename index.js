
const keys = {
  right: { pressed: false },
  left: { pressed: false }
}

//////////////////////////////////////

const startScreen = document.querySelector('.introSection')
const gravity = 0.2; // gravity is going to be accelerating over time and so on
const restartNew = () => location.reload();
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
document.getElementsByTagName("li")[2].style.visibility = "hidden";
canvas.style.display = "none";
// canvas.width = innerWidth;
// canvas.height = innerHeight;

canvas.width = 1024;  // windows.innerWidth;
canvas.height =768; // windows.innerHeight;
////////////////////////////////////////////////////////////////////////////////////////////////////


let imagesQuirrel = new Image();
imagesQuirrel.src = './images/squirrel.png'
class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    }
    this.velocity = {  
      x: 0,
      y: 0
    }
    this.imagesQuirrel = imagesQuirrel;
    this.width = imagesQuirrel.width
    this.height = imagesQuirrel.width -55
  }
  // define what is player look like to?
  draw() {

    context.drawImage(this.imagesQuirrel, this.position.x, this.position.y);
  }
  update() { 
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
   
    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
    // else this.velocity.y = 0;

  }
}
let player = new Player();


///////////////////////////////////////////////////////////////////////////////////////////////////////

let image = new Image();
image.src = './images/pallet.png';


class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x, // x:x,a
      y   // y:y
    }

    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}
let multiPlatforms = [
  new Platform({ x: -150, y:665, image }),
  new Platform({ x: -50, y:  665, image }),
  new Platform({ x:  50, y:  665, image }),
  new Platform({ x: 300 , y:  665, image }),
  new Platform({ x: 500, y:  665, image }),
  new Platform({ x: 750, y:  665, image }),
  new Platform({ x: 3400, y:  665, image }),

  new Platform({ x: 1100 + 500, y: 400, image }),
  new Platform({ x: 1100 + 500, y: 500, image }),

  new Platform({ x: 3400, y: 300, image }),
  new Platform({ x: 5121.5, y:  665, image }),
  new Platform({ x: 3800 + 100, y:  665, image }),
  new Platform({ x: 3800 + 300, y:  665, image }),
  new Platform({ x: 3800 + 500, y: 665, image }),
  new Platform({ x: 3800 + 700, y:  665, image }),
]
console.log(multiPlatforms[0].image.width)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let imageP1 = new Image();
imageP1.src = './images/half-pallet1.png';

 
class Pallet {
  constructor({ x, y, imageP1 }) {
    this.position = {
      x, // x:x,a
      y   // y:y
    }
    this.imageP1 = imageP1;
    this.width = imageP1.width;
    this.height = imageP1.height;
  }
  draw() {
    context.drawImage(this.imageP1, this.position.x, this.position.y);
  }
}
let multiPallets = [
  new Pallet({ x: 2100 + 100, y: 621.5, imageP1 }),
  new Pallet({ x: 2100 + 300, y: 500, imageP1 }),
  new Pallet({ x: 2100 + 500, y: 400, imageP1 }),
  new Pallet({ x: 2100 + 700, y: 300, imageP1 }),

  new Pallet({ x: 1100 + 100, y: 621.5, imageP1 }),
  // new Pallet({ x: 1100 + 300, y: 500, imageP1 }),
  // new Pallet({ x: 1100 + 500, y: 400, imageP1 }),
  new Pallet({ x: 1100 + 700, y: 300, imageP1 }),

  new Pallet({ x: 5319.5, y: 621.5, imageP1 }),
  new Pallet({ x: 5610.5, y: 310.75, imageP1 }),
  new Pallet({ x: 5715.5, y: 155.37, imageP1 }),
]
// console.log(multiPallets[3])
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reSet() {
  
  player = new Player();

  multiPlatforms = [
    new Platform({ x: -150, y:665, image }),
    new Platform({ x: -50, y:  665, image }),
    new Platform({ x:  50, y:  665, image }),
    new Platform({ x: 300 , y:  665, image }),
    new Platform({ x: 500, y:  665, image }),
    new Platform({ x: 750, y:  665, image }),
    new Platform({ x: 3400, y:  665, image }),

    new Platform({ x: 1100 + 500, y: 400, image }),
    new Platform({ x: 1100 + 500, y: 500, image }),

    new Platform({ x: 3400, y: 300, image }),
    new Platform({ x: 5121.5, y:  665, image }),
    new Platform({ x: 3800 + 100, y:  665, image }),
    new Platform({ x: 3800 + 300, y:  665, image }),
    new Platform({ x: 3800 + 500, y: 665, image }),
    new Platform({ x: 3800 + 700, y:  665, image }),
  ]
  multiPallets = [
    new Pallet({ x: 2100 + 100, y:  610, imageP1 }),
    new Pallet({ x: 2100 + 300, y: 500, imageP1 }),
    new Pallet({ x: 2100 + 500, y: 400, imageP1 }),
    new Pallet({ x: 2100 + 700, y: 300, imageP1 }),

    new Pallet({ x: 1100 + 100, y: 621.5, imageP1 }),
    // new Pallet({ x: 1100 + 300, y: 500, imageP1 }),
    // new Pallet({ x: 1100 + 500, y: 400, imageP1 }),
    new Pallet({ x: 1100 + 700, y: 300, imageP1 }),

    new Pallet({ x: 5319.5, y:  610, imageP1 }),
    new Pallet({ x: 5517.5, y: 310.75, imageP1 }),
    new Pallet({ x: 5715.5, y: 155.37, imageP1 }),
  ]

  scrollOfset = 0;

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


let scrollOfset = 0; 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


function anmiate() { 

  requestAnimationFrame(anmiate);

  context.clearRect(0, 0, canvas.width, canvas.height)

  multiPlatforms.forEach(a => a.draw())

  multiPallets.forEach(a => a.draw())

  player.update();

  if (keys.right.pressed && player.position.x <= 400) player.velocity.x = 5

  else if (keys.left.pressed && player.position.x > 100) player.velocity.x = -5

  else {
    player.velocity.x = 0

    if (keys.right.pressed) {

      scrollOfset += 10;

      multiPlatforms.forEach(a => a.position.x -= 10);

      multiPallets.forEach(a => a.position.x -= 10);

    }

    else if (keys.left.pressed && scrollOfset > 0) {

      scrollOfset -= 10;

      multiPlatforms.forEach(a => a.position.x += 10)

      multiPallets.forEach(a => a.position.x += 10);

    }
  }
  // platform colision detection 

  multiPlatforms.forEach(platform => {

    if (player.position.y + player.height <= platform.position.y

      && player.position.y + player.height + player.velocity.y >= platform.position.y

      && player.position.x + player.width >= platform.position.x

      && player.position.x <= platform.position.x + platform.width)

      player.velocity.y = 0;

  })

  multiPallets.forEach(pallet => {

    if (player.position.y + player.height <= pallet.position.y

      && player.position.y + player.height + player.velocity.y >= pallet.position.y

      && player.position.x + player.width >= pallet.position.x

      && player.position.x <= pallet.position.x + pallet.width)

      player.velocity.y = 0;
  })
  ////////////////////////

  if (player.position.y + player.height <= 0)
    player.position.y = 0


  win();
  lose();
  
}


////////////////////////////////////////////////////////////////////////////////////////

onload = () => {

  document.getElementById("start-button").onclick = () => {
    // Timer();
    startGame();

  };
  function startGame() {
    document.getElementsByTagName("li")[0].style.visibility = "hidden";
    document.getElementsByTagName("li")[2].style.visibility = "visible";
    canvas.style.display = "block";
    startScreen.style.display = "none";
    ////////////////
    
    let load = 100;
    let init = setInterval(timer,150);
    function timer() {
    
    loadText =document.querySelector(".loading-text");
    loadText.style.color='red';
    load--;
    if(load === 0 || player.position.y > canvas.height)
     clearInterval(init);
     
    loadText.innerText=`${load}%`
   
  }

 
//////////////////////

    anmiate();
    
    addEventListener("keydown", ({ keyCode }) => {
      // in order to get direct keyCode for spicific pressing , put keyCode as parameter in callback function
      switch (keyCode) {
        case 87:
          player.velocity.y = -10;
          break;
        case 83:
          break;
        case 68:
          keys.right.pressed = true;
          break;
        case 65:
          keys.left.pressed = true;
          break;
      }
    });

    addEventListener("keyup", ({ keyCode }) => {
      switch (keyCode) {
        case 87:

          player.velocity.y = +10;
          break;
        case 83:

          break;
        case 68:

          keys.right.pressed = false;
          break;
        case 65:

          keys.left.pressed = false;
          break;
      }
    });
  }

};


let loadText = document.querySelector(".loading-text");
const lose = () => {
  
   let imgGameOver = new Image();
   imgGameOver.src = "./images/gameOver.png";
    
  if (player.position.y > canvas.height || (loadText.innerText =='0%' && loadText.style.color=='red') ) {
    context.drawImage(imgGameOver, 350, 175);
   
    setTimeout(() => {
  
      // reSet();
      restartNew();
    }, 500);
  }
};

const win = () => {

  let imgyouWon = new Image();

  imgyouWon.src = "./images/youWon.png";
  if (scrollOfset > 5121.5 && loadText.innerText !=='0%') {
    {
        player.position.x = 5121.5 
        player.position.y = 200
        player.velocity.x =null
        player.velocity.y= null
        keys.right.pressed=false
        keys.right.pressed=false
       

      context.drawImage(imgyouWon, 350, 175);
      
      setTimeout(() => {
        $("canvas").hide();
        // document.querySelector("canvas").style.visibility = "hidden";
        startScreen.style.display = "flex";
      }, 2000);
    }
  }
};





