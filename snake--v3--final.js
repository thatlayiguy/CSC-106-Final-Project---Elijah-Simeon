var drawHoodie = function(bitmojiX, bitmojiY) {
    fill(14, 24, 97);
    ellipse(bitmojiX, bitmojiY, 75, 100);    //hoodie top
    rect(bitmojiX -38, bitmojiY -10, 76, 70, 20); //hoodie bottom
    
    quad(bitmojiX +60, bitmojiY +55, bitmojiX -60, bitmojiY +55, bitmojiX -72, bitmojiY +95, bitmojiX +72, bitmojiY +95); //hoodie
};

var drawHeadS = function(bitmojiX, bitmojiY) 
{
    fill(70, 50, 50);
    rect(bitmojiX -15, bitmojiY +30, 30, 20);    //neck
    
    stroke(0, 0, 0);
    ellipse(bitmojiX, bitmojiY, 60, 80); //head
    
    noStroke();
    fill(8, 8, 7);
    quad(bitmojiX -24, bitmojiY -47, bitmojiX -23, bitmojiY -29, bitmojiX +22, bitmojiY -29, bitmojiX+25, bitmojiY -47); //hair
};

var drawInitials = function(bitmojiX, bitmojiY) 
{
    stroke(23, 143, 156);
    strokeWeight(4);
    noFill();
    arc(bitmojiX +-42, bitmojiY+83, 56, -27, -84, 57);
    arc(bitmojiX +-7, bitmojiY+69, 40, 37, 172, 286);
    line(bitmojiX+14, bitmojiY+83, bitmojiX+14, bitmojiY+56);
    line(bitmojiX+14, bitmojiY+87, bitmojiX+40, bitmojiY+87);   //initials 
};

var drawEyes = function(bitmojiX, bitmojiY) 
{
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    ellipse(bitmojiX +11, bitmojiY -4, 10, 7);
    ellipse(bitmojiX -11, bitmojiY -4, 10, 7);//Inside of eye
    
    noStroke();
    fill(0, 0, 0);
    ellipse(bitmojiX -11, bitmojiY -4, 6, 6);
    ellipse(bitmojiX +11, bitmojiY -4, 6, 6);
    
    fill(0, 0, 0);
    ellipse(bitmojiX -11, bitmojiY -4, 2, 2);
    ellipse(bitmojiX +11, bitmojiY -4, 2, 2);    //eyes
};

var drawFace = function(bitmojiX, bitmojiY) 
{
    noFill();
    stroke(0, 0, 0);
    strokeWeight(2);
    noFill();
    arc(bitmojiX +-4, bitmojiY +74, 200, 177, 262, 268);
    arc(bitmojiX +5, bitmojiY +74, 200, 177, 272, 278);  //eyebrows
    
    arc(bitmojiX +0, bitmojiY +-22, 54, 92, 425, 475);  //lips
    
    strokeWeight(1);
    arc(bitmojiX +0, bitmojiY +-22, 28, 68, 425, 473);  //nose
};


var drawBitmoji = function(bitmojiX, bitmojiY) {
    drawHoodie(bitmojiX, bitmojiY);
    drawHeadS(bitmojiX, bitmojiY);
    drawInitials(bitmojiX, bitmojiY);
    drawEyes(bitmojiX, bitmojiY);
    drawFace(bitmojiX, bitmojiY);
};


var drawHead = function(bitBody) {
    
    //Head
    fill(255, 196, 133);
    ellipse(bitBody.x +219 *(bitBody.h/150),
    bitBody.y + 194*(bitBody.h/150), 70*(bitBody.h/150), 100*(bitBody.h/150));
    
     //Eye's Right to left
    fill(255, 255, 255);
    ellipse(bitBody.x +206*(bitBody.h/150),
    bitBody.y + 178*(bitBody.h/150), 15*(bitBody.h/150), 15*(bitBody.h/150));
    ellipse(bitBody.x +233*(bitBody.h/150),
    bitBody.y + 178*(bitBody.h/150), 15*(bitBody.h/150), 15*(bitBody.h/150));
    
    //Iris
    fill(26, 0, 255);
    ellipse(bitBody.x +206*(bitBody.h/150),
    bitBody.y + 178*(bitBody.h/150), 10*(bitBody.h/150), 10*(bitBody.h/150));
    ellipse(bitBody.x +233*(bitBody.h/150),
    bitBody.y + 178*(bitBody.h/150), 10*(bitBody.h/150), 10*(bitBody.h/150));
    
    //eye center
    fill(0, 0, 0);
    ellipse(bitBody.x +206*(bitBody.h/150),
    bitBody.y + 178*(bitBody.h/150), 5*(bitBody.h/150), 5*(bitBody.h/150));
    ellipse(bitBody.x +233*(bitBody.h/150),
    bitBody.y + 178*(bitBody.h/150), 5*(bitBody.h/150), 5*(bitBody.h/150));

    //mouth
    ellipse(bitBody.x +220*(bitBody.h/150), 
    bitBody.y +212*(bitBody.h/150), 41*(bitBody.h/150), 15*(bitBody.h/150));
    
     //Tongue
    fill(204, 0, 0);
    arc(bitBody.x + 221*(bitBody.h/150),
    bitBody.y + 219*(bitBody.h/150), 17*(bitBody.h/150),
    27*(bitBody.h/150), 330, 569);
    
    //Nose
    fill(255, 196, 133);
    arc(bitBody.x+ 220*(bitBody.h/150),
    bitBody.y+ 187*(bitBody.h/150), 21*(bitBody.h/150),
    32*(bitBody.h/150), 17, 173);
    
    
};

//Same as srawHead but also includes bitBody.color and bitBody.initials
var drawBody = function(bitBody) {
    
    //Shirt
    fill(bitBody.color);
    rect(bitBody.x+ 186*(bitBody.h/150),
    bitBody.y+ 245*(bitBody.h/150),70*(bitBody.h/150),76*(bitBody.h/150));

    //Shirt collar
    fill(255, 255, 255);
    rect(bitBody.x+ 195*(bitBody.h/150),
    bitBody.y+ 238*(bitBody.h/150),50*(bitBody.h/150),10*(bitBody.h/150));

    //Initials
    //This Will only print if bitBody.initials is true
    if(bitBody.initials === true){
        strokeWeight(5);
        //E
        line(bitBody.x+ 195*(bitBody.h/150),
        bitBody.y+ 265*(bitBody.h/150),bitBody.x+ 194*(bitBody.h/150),
        bitBody.y+ 299*(bitBody.h/150));
        line(bitBody.x+ 194*(bitBody.h/150),
        bitBody.y+ 283*(bitBody.h/150),bitBody.x+ 203*(bitBody.h/150),
        bitBody.y+ 283*(bitBody.h/150));
        line(bitBody.x+ 194*(bitBody.h/150),
        bitBody.y+ 265*(bitBody.h/150),bitBody.x+ 203*(bitBody.h/150),
        bitBody.y+ 265*(bitBody.h/150));
        line(bitBody.x+ 194*(bitBody.h/150),
        bitBody.y+ 297*(bitBody.h/150),bitBody.x+ 203*(bitBody.h/150),
        bitBody.y+ 297*(bitBody.h/150));
    
        //A
        line(bitBody.x+ 236*(bitBody.h/150),
        bitBody.y+ 265*(bitBody.h/150),bitBody.x+ 228*(bitBody.h/150),
        bitBody.y+ 299*(bitBody.h/150));
        line(bitBody.x+ 236*(bitBody.h/150),
        bitBody.y+ 265*(bitBody.h/150),bitBody.x+ 248*(bitBody.h/150),
        bitBody.y+ 299*(bitBody.h/150));
        line(bitBody.x+ 230*(bitBody.h/150),
        bitBody.y+ 284*(bitBody.h/150),bitBody.x+ 243*(bitBody.h/150),
        bitBody.y+ 283*(bitBody.h/150));
    }
    
    //reset line thick
    strokeWeight(1);
    
    //Hair
    fill(222, 127, 31);
    arc(bitBody.x +220*(bitBody.h/150),
    bitBody.y + 155*(bitBody.h/150), 83*(bitBody.h/150),
    76*(bitBody.h/150), 161, 376);

};

//Assembles both previous functions 
var drawbitmoji = function(bitBody)
{
    
    drawHead(bitBody);
    drawBody(bitBody);
    
};

var currentScreen = 0;
var gameOver = false;
var highScore = 0;
var score = 0;
var gridSquare = 25; //This sets how big a grid square is
var gridSize = 600/gridSquare; //Khans environment is set to 600 by 600
frameRate(7);


var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(109, 168, 69);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

//Start Button
var btn1 = new Button(
    {
        x: 227,
        y: 452,
        label: "  Start Game!",
        onClick: function() 
        {
            currentScreen = 1;
        }
});

//Restart Button
var btn2 = new Button(
    {
        x: 227,
        y: 452,
        label: "    RESTART!",
        onClick: function() 
        {
            currentScreen = 1;
        }
});


mouseClicked = function() {
    if (currentScreen === 0)
    {
        //Start Button handle
        btn1.handleMouseClick();
    }
    
    else if (currentScreen === 2)
    {
        //Restart Button
        btn2.handleMouseClick();
    }
};




//Snake Object
var Snake = function(x,y, direction, speed)
{
    this.x = x;
    this.y = y;
    this.speed = speed || 1;
    this.direction = direction;
    this.bodyX = [];
    this.bodyY = [];
};

//Fruit Object
var Fruit = function(x,y)
{
    this.x = x;
    this.y = y;
};

//Snake Head and body method
Snake.prototype.draw = function() 
{
    //snake
    fill(58, 207, 107);
    //rect(this.x * gridSquare, this.y * gridSquare, gridSize, gridSize);
    
    image(getImage("avatars/aqualine-seed"),this.x * gridSquare - 13, this.y * gridSquare -17 , gridSize+30, gridSize+30);
     
     // Moves and draws the body
    if(score > 0){
        
        //starts from the last part of the tail which is determined by the players score
        for (var i = score; i > 0; --i) 
        {
            //This sets the last body part to equal the one thats ahead of it
            this.bodyX[i] = this.bodyX[i - 1];
            this.bodyY[i] = this.bodyY[i - 1];
            
            //Draws Body 
            fill(118, 211, 232);
            rect(this.bodyX[i] * gridSquare, this.bodyY[i] * gridSquare, gridSize, gridSize);
        }
        // Update the first segment of the body to the current head position
        this.bodyX[0] = this.x;
        this.bodyY[0] = this.y;
    }
};

//fruit constructor 
Fruit.prototype.draw = function()
{
    fill(255, 0, 0);
    noStroke();
    image(getImage("avatars/spunky-sam-red"),this.x * gridSquare - 9, this.y * gridSquare -15 , gridSize+20, gridSize+20);
   
   
   // rect(this.x * gridSquare, this.y * gridSquare, gridSize, gridSize);
};

//Creates new instances of the snake and fruit
var snake = new Snake(round(random(1,18)),round(random(1,18)));
var fruit = new Fruit(round(random(1,18)),round(random(1,18)));

//screens
var startScreen = function()
{
    background(47, 102, 73);
    
    for(var i = 0; i <= 43; ++i) 
    {
        
        
        //Top 
        rect(i*gridSquare, 1, gridSize, gridSize);
        //Bottom 
        rect(i*gridSquare, 575, gridSize, gridSize);
        //Right Side
        rect(586, (i*(gridSquare/2)+24), gridSize/2, gridSize/2);
        //Left
        rect(0, (i*(gridSquare/2)+25), gridSize/2, gridSize/2);
        
    }
    
    noStroke();
    fill(91, 158, 82);
    //SNAKE LETTERS
    //S
    rect((1*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((2*gridSquare), (3*gridSquare), gridSize, gridSize);
    rect((3*gridSquare), (3*gridSquare), gridSize, gridSize);
    rect((2*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((3*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((2*gridSquare), (7*gridSquare), gridSize, gridSize);
    rect((1*gridSquare), (7*gridSquare), gridSize, gridSize);
    
    //N
    //rect((5*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((5*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((5*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((5*gridSquare), (7*gridSquare), gridSize, gridSize);
    rect((6*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((7*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((8*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((8*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((8*gridSquare), (7*gridSquare), gridSize, gridSize);
    
    //A
    rect((10*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((10*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((11*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((12*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((13*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((13*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((14*gridSquare), (7*gridSquare), gridSize, gridSize);
    rect((11*gridSquare), (7*gridSquare), gridSize, gridSize);
    rect((12*gridSquare), (7*gridSquare), gridSize, gridSize);
    
    //K
    rect((16*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((16*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((16*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((16*gridSquare), (7*gridSquare), gridSize, gridSize);
    rect((18*gridSquare), (7*gridSquare), gridSize, gridSize);
    rect((18*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((17*gridSquare), (6*gridSquare), gridSize, gridSize);
    
    //E
    rect((21*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((20*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((22*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((21*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((20*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((20*gridSquare), (7*gridSquare), gridSize, gridSize);
    rect((21*gridSquare), (8*gridSquare), gridSize, gridSize);
    rect((22*gridSquare), (8*gridSquare), gridSize, gridSize);
    
    
    
    //Draws Elijah
    stroke(0, 0, 0);
    drawbitmoji({
        x:18, 
        y:123, 
        h:120, 
        color: color(43, 43, 230), 
        initials: true,
        });
        
        //Draws Simeon
        drawBitmoji(387,287);
        
        btn1.draw();
        
        
        text('By Simeon Larinde and Elijah Smith-Antonides', 19, 546);
};

var gameScreen = function()
{
    //Draws background 
    background(47, 102, 73);
    
    //CHECKERED BACKGROUND
    
    for(var i = 1; i <= 22; ++i) 
    {
        noStroke();
        for(var j = 1; j <= 22; ++j)
        {
        if ((i + j) % 2 === 0) {
        fill(91, 158, 82);  // Dark green
        } 
        else {
        fill(153, 240, 161); // light green
        }
        rect(i*gridSquare, j*gridSquare, 50, 50);
        }
         
    }
    
    
    for(var i = 0; i <= 23; ++i) 
    {
        noStroke();
        fill(91, 158, 82);
        //Right Side
        rect(575, (i*gridSquare)-25, gridSize, gridSize);
        //Left
        rect(0, (i*gridSquare) - 25, gridSize, gridSize);
        //Top
        rect(i*gridSquare, 1, gridSize, gridSize);
        //Bottom
        rect(i*gridSquare, 575, gridSize, gridSize);
    }
    
    
    //Score Board & border style
    noStroke();
    textSize(12);
    fill(50, 125, 39);
    rect(573,-2,27,601); //left
    rect(0,-2,27,601);  //right
    rect(0,-2,600,28); //top
    rect(0,574,600,27); //bottom
    fill(255, 255, 255);
    textSize(20);
    text('Score: '+ score, 10, 3);
    image(getImage("avatars/spunky-sam-red"), 456, -2, 28, 28);
    text(score, 496, 3);
    //text('Direction: '+ snake.direction, 160, 10);
    //text('GAME STATE: '+ gameOver, 160, 45);
    
    
    //Calls/draws the snake and fruit instances
    snake.draw();
    fruit.draw();
    
    
    //UP
    if (keyIsPressed && keyCode === UP && snake.direction !== 'down')
    {
        snake.direction = 'up';
    }
    
    //DOWN
    else if (keyIsPressed && keyCode === DOWN && snake.direction !== 'up')
    {
        snake.direction = 'down';
    }
    
    //LEFT
    else if (keyIsPressed && keyCode === LEFT && snake.direction !== 'right')
    {
        //snake.y -= 5;
        snake.direction = 'left';
    }
    
    //RIGHT
     else if (keyIsPressed && keyCode === RIGHT && snake.direction !== 'left')
    {
        snake.direction = 'right';
    }
    
    //Space bar to pause
    else if (keyIsPressed && key.code === 32)
    {
        snake.direction = 'stop';
    }
    
    
    if(snake.direction === 'right') {
        snake.x += snake.speed;
    }
    else if(snake.direction === 'left') {
        snake.x -= snake.speed;
    }
    else if(snake.direction === 'up') {
        snake.y -= snake.speed;
    }
    else if(snake.direction === 'down') {
        snake.y += snake.speed;
    }
    else if(snake.direction === 'stop') {
        snake.y += 0;
        snake.x += 0;
    }
    
    // Check if the snake hits its own body
    for (var i = 0; i < snake.bodyX.length; i++) {
     if (snake.x === snake.bodyX[i] && snake.y === snake.bodyY[i])     {
        // Game over if the snake hits its own body
        gameOver = true;
     }
    }
    
      // Checks if the snake hits the borders
    if (
         snake.x < 1 ||
         snake.x >= gridSize - 1 ||
         snake.y < 1 ||
         snake.y >= gridSize - 1) 
         {
         // Game over if the snake is outside the boundaries
         gameOver = true;
    }

    
    //Checks if Snake head is touching Fruit
    if(snake.x >= fruit.x && 
        snake.x <= fruit.x &&
        snake.y >= fruit.y && 
        snake.y <= fruit.y)
        {
            //Moves the fruit to a new location
            fruit.x = round(random(1,18));
            fruit.y = round(random(1,18));
            
            //Adds point
            score += 1;
            
            //adds to highScore
            if(score > highScore)
            {
                highScore = score;
            }
            
        }
        
    if (score === 4)
    {
    frameRate(9);
    }    
        
    if(gameOver === true)
   {
       currentScreen = 2;
   }
   
};

//End Screen Function
var endScreen = function()
{
    background(47, 102, 73);
    
    /*for(var i = 0; i <= 43; ++i) 
    {
        fill(91, 158, 82);
        
        //Top
        rect(i*gridSquare, 1, gridSize, gridSize);
        //Bottom
        rect(i*gridSquare, 575, gridSize, gridSize);
        //Right Side
        rect(586, (i*(gridSquare/2)+24), gridSize/2, gridSize/2);
        //Left
        rect(0, (i*(gridSquare/2)+25), gridSize/2, gridSize/2);
    }*/
    
    for(var i = 0; i <= 43; ++i) 
    {
        stroke(0, 0, 0);
        fill(0, 0, 0);
        //Top 
        rect(i*gridSquare, 1, gridSize, gridSize);
        //Bottom 
        rect(i*gridSquare, 575, gridSize, gridSize);
        //Right Side
        rect(586, (i*(gridSquare/2)+24), gridSize/2, gridSize/2);
        //Left
        rect(0, (i*(gridSquare/2)+25), gridSize/2, gridSize/2);
        
    }
    
    //Resets Stroke for bitMojis 
    stroke(0, 0, 0);
    
    drawbitmoji({
        x:-24, 
        y:123, 
        h:120, 
        color: color(43, 43, 230), 
        initials: true,
        });
        
    //Draws Sim
    drawBitmoji(468,287);
      
    //Draws Restart Button Object
    
    noStroke();
    fill(91, 158, 82);
    //SNAKE LETTERS
    //S
    rect((1*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((2*gridSquare), (3*gridSquare), gridSize, gridSize);
    rect((3*gridSquare), (3*gridSquare), gridSize, gridSize);
    rect((2*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((3*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((2*gridSquare), (7*gridSquare), gridSize, gridSize);
    rect((1*gridSquare), (7*gridSquare), gridSize, gridSize);
    
    //N
    //rect((5*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((5*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((5*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((5*gridSquare), (7*gridSquare), gridSize, gridSize);
    rect((6*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((7*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((8*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((8*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((8*gridSquare), (7*gridSquare), gridSize, gridSize);
    
    //A
    rect((10*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((10*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((11*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((12*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((13*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((13*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((14*gridSquare), (7*gridSquare), gridSize, gridSize);
    rect((11*gridSquare), (7*gridSquare), gridSize, gridSize);
    rect((12*gridSquare), (7*gridSquare), gridSize, gridSize);
    
    //K
    rect((16*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((16*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((16*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((16*gridSquare), (7*gridSquare), gridSize, gridSize);
    rect((18*gridSquare), (7*gridSquare), gridSize, gridSize);
    rect((18*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((17*gridSquare), (6*gridSquare), gridSize, gridSize);
    
    //E
    rect((21*gridSquare), (4*gridSquare), gridSize, gridSize);
    rect((20*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((22*gridSquare), (5*gridSquare), gridSize, gridSize);
    rect((21*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((20*gridSquare), (6*gridSquare), gridSize, gridSize);
    rect((20*gridSquare), (7*gridSquare), gridSize, gridSize);
    rect((21*gridSquare), (8*gridSquare), gridSize, gridSize);
    rect((22*gridSquare), (8*gridSquare), gridSize, gridSize);
    
    
    btn2.draw();
    
    //High Score text
    fill(0, 0, 0);
    textSize(30);
    text('HIGH SCORE: ' + highScore, 187, 288);
    text('GAME OVER', 208, 349);
    
    
    //Resets game stats and positions 
    snake.x = round(random(1,18));
    snake.y = round(random(1,18));
    snake.direction = 'stop';
    snake.body = [];
    score = 0;
    gameOver = false;
    fruit.x = round(random(1,18));
    fruit.y = round(random(1,18));
    
};


//Main draw function
var draw = function() {
   
   if(currentScreen === 0)
   {
      startScreen();
   }
   
   //Checks to see if game is over
   else if(currentScreen === 1)
   {
       gameScreen();
   }
   
   else if(currentScreen === 2)
   {
        endScreen();
   }
   
};


