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
frameRate(10);


var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(0, 234, 255);
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

var btn2 = new Button(
    {
        x: 227,
        y: 452,
        label: "  RESTART!",
        onClick: function() 
        {
            currentScreen = 1;
        }
});


mouseClicked = function() {
    if (currentScreen === 0)
    {
        btn1.handleMouseClick();
    }
    
    else if (currentScreen === 2)
    {
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
    rect(this.x * gridSquare, this.y * gridSquare, gridSize, gridSize);
     
     
     // Move and draw the body
    if(score > 0){
        for (var i = score; i > 0; --i) 
        {
            //This sets the last body part to equal the one thats ahead of it
            this.bodyX[i] = this.bodyX[i - 1];
            this.bodyY[i] = this.bodyY[i - 1];
            
            fill(58, 207, 107);
            rect(this.bodyX[i] * gridSquare, this.bodyY[i] * gridSquare, gridSize, gridSize);
        }
        // Update the first segment of the body to the current head position
        this.bodyX[0] = this.x;
        this.bodyY[0] = this.y;
    }
    
    
};

Fruit.prototype.draw = function()
{
    fill(255, 0, 0);
    noStroke();
    image(getImage("avatars/spunky-sam-red"),this.x * gridSquare - 9, this.y * gridSquare -15 , gridSize+20, gridSize+20);
   
   // rect(this.x * gridSquare, this.y * gridSquare, gridSize, gridSize);
};

//Creates new instances 
var snake = new Snake(round(random(1,18)),round(random(1,18)));
var fruit = new Fruit(round(random(1,18)),round(random(1,18)));

//screens
var startScreen = function()
{
    background(0, 0, 0);
      drawbitmoji({
        x:68, 
        y:136, 
        h:91, 
        color: color(191, 27, 191), 
        initials: true,
        });
        
        btn1.draw();
};

var gameScreen = function()
{
    //Draws background 
    background(0, 0, 0);
    
    
    
    
    //THIS MIGHT GET USED TO MAKE A CHECKERD BACKGROUND
    //  for(var i = 0; i <= 23; ++i) 
    // {
    //   stroke(0, 0, 0);
    //     //Inner loop that randomizes the color pallet 
    //     for(var j = 0; j <= 21; ++j)
    //      {
            
    //          fill(245, 245, 245);
             
    //          //Creates actual grid
    //          rect(i*gridSquare, j*gridSquare, 50, 50);
    //      }
         
    // }
    
    for(var i = 0; i <= 23; ++i) 
    {
             fill(199, 62, 199);
             //Right Side
             rect(575, (i*gridSquare)-25, gridSize, gridSize);
             //Left
             rect(0, (i*gridSquare) - 25, gridSize, gridSize);
             //Top
             rect(i*gridSquare, 1, gridSize, gridSize);
              //Bottom
             rect(i*gridSquare, 575, gridSize, gridSize);
         
    }
    
    
    //Score Board
    textSize(12);
    fill(255, 13, 0);
    rect(0,-2,600,27);
    fill(255, 255, 255);
    
    text('Score: '+ score, 10, 10);
    text('Body Amount: '+ snake.bodyX.length, 63, 10);
    text('Direction: '+ snake.direction, 160, 10);
     text('GAME STATE: '+ gameOver, 160, 45);
    
    
    //Calls/draws the snake and fruit instances
    snake.draw();
    fruit.draw();
    
    
    //Must have CAPS on
    
    //W UP
    if (keyIsPressed && keyCode === UP && snake.direction !== 'down')
    {
        snake.direction = 'up';
    }
    
    //S to move down
    else if (keyIsPressed && keyCode === DOWN && snake.direction !== 'up')
    {
        snake.direction = 'down';
    }
    
    //A to move left
    else if (keyIsPressed && keyCode === LEFT && snake.direction !== 'right')
    {
        //snake.y -= 5;
        snake.direction = 'left';
    }
    
    //D to move RIGHT
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
     if (snake.x === snake.bodyX[i] && snake.y === snake.bodyY[i]) {
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
        
    if(gameOver === true)
   {
       currentScreen = 2;
   }
   
};

var endScreen = function()
{
    background(0, 0, 0);
      drawbitmoji({
        x:68, 
        y:136, 
        h:91, 
        color: color(191, 27, 191), 
        initials: true,
        });
        
    btn2.draw();
    fill(255, 0, 0);
    text('High Score: ' + highScore, 20, 20);
    
    
    
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


