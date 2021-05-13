//script.js

let canvas = document.getElementById("canvas");

canvas.width = 1200;
canvas.height = 600;

console.log(canvas);

let ctx = canvas.getContext('2d');

let up =    false;  //W
let down =  false;  //S
let left =  false;  //A
let right = false;  //D

let blocks = [];
let obstacles = [];
let coins = [];
let decors = [];
let bot = [];

let coinsCollected = 0;

let camera;

const GRAVITY = 0.4;

class Camera {

	constructor(){
		
		this.x = 0;
		this.y = 0;
		this.follow = null;

	}

	tracObject(obj){
		
		this.follow = obj;

	}

	update(){

		if(!this.follow){
			return;
		}

		let x1 = this.x + 500;
		let x2 = this.x + 700;

		if(this.follow.x + 32 < x1){
			this.x = this.follow.x + 32 - 500;
		}

		if(this.follow.x + 32 > x2){
			this.x = this.follow.x + 32 - 700;
		}

		let y1 = this.y + 200;
		let y2 = this.y + 400;

		if(this.follow.y +32 < y1){
			this.y = this.follow.y +32 - 200;
		}

		if(this.follow.y +32 > y2){
			this.y = this.follow.y + 32 - 400;
		}



		if(this.y > 3){
			this.y = 3;
		}
	}
}

class Charaster {

	constructor(x = 0, y = 0){

		this.image = {
			moveR: "img/mario64x64.png",
			moveL: "img/mario64x64inv.png"
		}
		this.x = x;
		this.y = y;
		this.speed = 3;
		this.jumpSpeed = 10;
		this.onfloor = false;
		this.dy = 0;
		this.direction = "right";

		this.texture = {
			moveR: new Image(),
			moveL: new Image()
		}

		this.texture.moveR.src = this.image.moveR;
		this.texture.moveL.src = this.image.moveL;
	}


	update(){

		//Гравитация
		this.onFloor = false;
		this.dy = this.dy + GRAVITY;
		this.y = this.y + this.dy;

		let footY = this.y + 64;
		//Падение на землю
		if(footY > 500){
			this.y = 500 - 64;
			this.dy = 0;
			this.onFloor = true;
		}
		//Падение на блок
		if(!this.onFloor && this.dy > 0){

			let footX = this.x + 32;

			let matchedBlocks = [];

			blocks.forEach(function(block){
				let leftX = block.x;
				let rightX = leftX + 64;

				if(footX >= leftX && footX <= rightX){
					matchedBlocks.push(block);
				}

			});

			let thiz = this;

			matchedBlocks.forEach(function(block){

				let currentY = footY;
				let previousY = currentY - thiz.dy;

				if(currentY >= block.y && previousY <= block.y){
					thiz.y = block.y - 64;
					thiz.dy = 0;
					thiz.onFloor = true;

				}


			});
		}
		//Столкновение с огнем
		let thiz = this
		obstacles.forEach(function(obstacle){

			if(!obstacle.isActive){
				return;
			}
			let x1 = thiz.x;
			let y1 = thiz.y;

			let x2 = obstacle.x;
			let y2 = obstacle.y;
			
			let c2 = (x1 - x2) ** 2 + (y1 - y2) ** 2;
			let c = Math.sqrt(c2);

			if(c < 40){
				thiz.hit();
			}

		});

		coins.forEach((coin) => {

			if(coin.collected){
				return;
			}

			let x1 = this.x + 32;
			let y1 = this.y + 32;

			let x2 = coin.x + 16;
			let y2 = coin.y + 16;

			let c2 = (x1 - x2) ** 2 + (y1 - y2) ** 2;
			let c = Math.sqrt(c2);
			//Собирание монеток
			if(c < 29){
				coin.collected = true;
				coinsCollected++;
			}
		});

		//Изменение модельки при сборе 10 монет
		if(coin.collected >= 10 && coin.collected < 20){
			Charaster.image = {
				moveR: "img/mario64x64_10.png",
				moveL: "img/mario64x64inv_10.png"
			}

		}
	}

	hit(){
		this.x = 100;
		this.y = 200;
	}

	moveLeft(){
		this.x = this.x - this.speed;
		this.direction = "left";

		if(this.x < -1000){
			this.x = -1000
		}
	}
	
	moveRight(){
		this.x = this.x + this.speed;
		this.direction = "right";

		if(this.x > 1000){
			this.x = 1000
		}

	}
	jump(){
		
		if (this.onFloor) {
		this.dy = this.dy - this.jumpSpeed;
		}
	}

	draw(){
		//Поворот персонажа
		if(this.direction == "right"){
			ctx.drawImage(
				this.texture.moveR,
				this.x - camera.x, this.y - camera.y
			);
		} else {
			ctx.drawImage(
				this.texture.moveL,
				this.x - camera.x, this.y - camera.y
			);
		}
	

	}

}

class Ground {

	constructor(){
		this.image = "img/ground.png"
		this.y = 500;
		this.x = 0;

		this.texture = new Image();
		this.texture.src = this.image;
	}
		draw(){

			let count = Math.floor(camera.x / 1200);

		ctx.drawImage(
			this.texture, 
			1200 * count - camera.x,
			this.y - camera.y
		);
		ctx.drawImage(
			this.texture, 
			1200 * count - camera.x + 1200,
			this.y - camera.y
	)}

}

class Bot {

	constructor(x = 0, y = 0){

		this.image = {
			moveR: "img/",
			moveL: "img/"
		}
		this.x = x;
		this.y = y;
		this.speed = 1;
		this.onfloor = false;
		this.dy = 0;
		this.direction = "right";

		this.texture = {
			moveR: new Image(),
			moveL: new Image()
		}

		this.texture.moveR.src = this.image.moveR;
		this.texture.moveL.src = this.image.moveL;
	}

	update(){
		move(){
			//Движение бота
			let distanceBot = Math.floor(Math.random() * (300 - 100) + 100);
			
		}
		draw(){
			//Поворот бота
			if(this.direction == "right"){
				ctx.drawImage(
					this.texture.moveR,
					this.x - camera.x, this.y - camera.y
				);
			} else {
				ctx.drawImage(
					this.texture.moveL,
					this.x - camera.x, this.y - camera.y
				);
			}
		
	
		}
	}
}

class Block {

	constructor(x = 0, y = 0){
		this.image = "img/block.png"
		this.y = y;
		this.x = x;

		this.texture = new Image();
		this.texture.src = this.image;

		blocks.push(this);
	}
	draw(){
		ctx.drawImage(
			this.texture, 
			this.x - camera.x,
			this.y - camera.y
		);

	}
		
	
}

class Decor {

	constructor(img, x = 0, y = 0){
		this.image = img;
		this.y = y;
		this.x = x;

		this.texture = new Image();
		this.texture.src = this.image;

		decors.push(this);
	}
	draw(){
		ctx.drawImage(
			this.texture, 
			this.x - camera.x,
			this.y - camera.y
		);

	}
}

class Bush extends Decor {

	constructor(x = 0, y = 0){
		super("img/bush.png", x, y);
	}

}

class Wood extends Decor {

	constructor(x = 0, y = 0){
		super("img/wood.png", x, y);
	}

}

class Wood2 extends Decor {

	constructor(x = 0, y = 0){
		super("img/wood2.png", x, y);
	}

}

class Moto extends Decor {

	constructor(x = 0, y = 0){
		super("img/moto.png", x, y);
	}
}

class Xo extends Decor {

	constructor(x = 0, y = 0){
		super("img/xo.png", x, y);
	}
}

class Death extends Decor {

	constructor(x = 0, y = 0){
		super("img/death.png", x, y);
	}
}

class Fireplace {

	constructor(x = 0, y = 0){
		this.image = {
			active: "img/firenew.png",
			inactive: "img/fireold.png"
			};
		this.y = y;
		this.x = x;

		this.framesCounter = 0;
		this.framestoChange = 100;

		this.isActive = false;

		this.texture = {
			active: new Image(),
			inactive: new Image()
		}

		this.texture.active.src = this.image.active;
		this.texture.inactive.src = this.image.inactive;

		obstacles.push(this);

	}

	update(){
		this.framesCounter++;

		if(this.framesCounter > this.framestoChange){
			this.isActive = !this.isActive;
			this.framesCounter = 0;
		} 

	}

	draw(){
		if(this.isActive){
			ctx.drawImage(
				this.texture.active,
				this.x - camera.x,
				this.y - camera.y
			);
		} else {
			ctx.drawImage(
				this.texture.inactive,
				this.x - camera.x,
				this.y - camera.y
			);
		}
	}	
}

class Fonts {

	constructor(){
		this.image = "img/fonts.png"
		this.y = 0;
		this.x = 0;

		this.texture = new Image();
		this.texture.src = this.image;

	}

	draw(){
		ctx.drawImage(
		this.texture, 
		this.x,
		this.y
		);

	}
}

class Clouds {

	constructor(){
		this.image = "img/Clouds2.png"
		this.y = 20;
		this.x = 50;

		this.texture = new Image();
		this.texture.src = this.image;
	}

	update(){
		this.x = this.x + 0.5;
		this.x = this.x % 1200;
	}
	
	draw(){
		ctx.drawImage(
			this.texture, 
			this.x,
			this.y
	);
		ctx.drawImage(
			this.texture, 
			this.x - 1200,
			this.y
		);
	}
}

class Coin {

	constructor(x = 0, y = 0) {

		this.x = x;
		this.y = y;

		this.image = [
			"img/coin_1.png",
			"img/coin_2.png",
			"img/coin_3.png",
			"img/coin_4.png"
		];

		this.texture = [];

		this.currentFrame = 0;
		this.animationSpeed = 10;
		this.framesCounter = 0;

		this.collected = false;

		this.image.forEach((src) =>{
			let img = new Image();
			img.src = src;
			this.texture.push(img);

		});

		coins.push(this);
	}

	draw(){
		if(this.collected){
			return;
		}
		ctx.drawImage(
			this.texture[this.currentFrame], 
			this.x - camera.x,
			this.y - camera.y
		);
		this.framesCounter++;
		if(this.framesCounter > this.animationSpeed){
			this.currentFrame++;
			this.framesCounter = 0;
		};

		if(this.currentFrame >= this.texture.length){
			this.currentFrame = 0

		}
	}
}

class HUD {

	constructor(x = 0, y = 0){
		this.image = "img/coin_1.png"
		this.y = y;
		this.x = x;

		this.texture = new Image();
		this.texture.src = this.image;
	}

	draw(){
		ctx.drawImage(
			this.texture, 
			this.x,
			this.y
		);

		ctx.font = "32px Impact";
		ctx.fillStyle = "orange";
		ctx.fillText(
			"X " + coinsCollected,
			this.x + 45,
			this.y + 28
			);
	}
}



let fonts = new Fonts();

let clouds = new Clouds();

let ground = new Ground();

let char = new Charaster(100, 500);

let hud = new HUD(16, 16);

camera = new Camera();
camera.tracObject(char);

//блоки справа
new Block(300, 400);
new Block(450, 300);
new Block(580, 200);
new Block(644, 200);
new Block(708, 200);
new Block(770, 300);
new Block(834, 300);
new Block(644, 400);
new Block(708, 400);
new Block(450, 100);

//блоки слева
new Block(-200, 450);
new Block(-264, 450);
new Block(-264, 350);
new Block(-264, 250);
new Block(-264, 150);

//монеты слева
new Coin(-250, 50);
new Coin(-250, 100);

//монеты справа
new Coin(585, 150);
new Coin(655, 150);
new Coin(720, 150);
new Coin(655, 350);
new Coin(720, 350);
new Coin(790, 250);
new Coin(845, 250);
new Coin(310, 350);
new Coin(465, 50);

new Xo(-550, 240);
new Bush(500, 422);
new Bush(-200, 422);
new Wood(650, 101);
new Wood(200, 405);
new Wood2(800, 405);
new Wood2(-100, 405);
new Moto(0, 401);
new Death(300, -500);


let fireplace = new Fireplace(450, 237);
new Fireplace(-264, 195);


let loop = function(){



	if (up) {
		char.jump();
	}
	if (left){
		char.moveLeft();
	}
	if (right) {
		char.moveRight();
	}

	//Обновляем состояние элементов
	char.update();
	clouds.update();
	obstacles.forEach(function(obstacle){
		obstacle.update();
	});

	camera.update();
	//Очищаем экран
	ctx.clearRect(0, 0, 1200, 600);
	//Отрисовываем элементы на экран
	fonts.draw();
	clouds.draw();
	blocks.forEach(function(block){
		block.draw();
	});
	decors.forEach(function(decor){
		decor.draw();
	});
	obstacles.forEach(function(obstacle){
		obstacle.draw();
	});
	coins.forEach(function(coin){
		coin.draw();
	});
	ground.draw();
	char.draw();
	hud.draw();

};

setInterval(loop, 1000 / 60);


document.addEventListener("keydown", function(e){

		if(e.keyCode == '38'){
			up = true;
		}
		if(e.keyCode == '40'){
			down = true;
		}
		if(e.keyCode == '37'){
			left = true;
		}
		if(e.keyCode == '39'){
			right = true;
		}
});

document.addEventListener("keyup", function(e){

		if(e.keyCode == '38'){
			up = false;
		}
		if(e.keyCode == '40'){
			down = false;
		}
		if(e.keyCode == '37'){
			left = false;
		}
		if(e.keyCode == '39'){
			right = false;
		}
});