var drawHoodie = function(bitmojiX, bitmojiY, h) {
    var p = h/100;
    fill(14, 24, 97);
    ellipse(bitmojiX, bitmojiY, p*75, p*100);    //hoodie top
    rect(bitmojiX -p*38, bitmojiY -p*10, p*76, p*70, p*20); //hoodie bottom
    
    quad(bitmojiX +p*60, bitmojiY +p*55, bitmojiX -p*60, bitmojiY +p*55, bitmojiX -p*72,         bitmojiY +p*95, bitmojiX +p*72, bitmojiY +p*95); //hoodie
};

var drawHeadS = function(bitmojiX, bitmojiY, h) 
{
    var p = h/100;
    fill(70, 50, 50);
    rect(bitmojiX -p*15, bitmojiY +p*30, p*30, p*20);    //neck
    
    stroke(0, 0, 0);
    ellipse(bitmojiX+p, bitmojiY+p, p*60, p*80); //head
    
    noStroke();
    fill(8, 8, 7);
    quad(bitmojiX -p*24, bitmojiY -p*47, bitmojiX -p*23, bitmojiY -p*29, bitmojiX +p*22,         bitmojiY -p*29, bitmojiX+p*25, bitmojiY -p*47); //hair
};

var drawInitials = function(bitmojiX, bitmojiY, h) 
{
    var p = h/100;
    stroke(23, 143, 156);
    strokeWeight(4);
    noFill();
    arc(bitmojiX +-(p*42), bitmojiY+(p*83), p*56, -p*27, -84, 57);
    arc(bitmojiX +-7, bitmojiY+p*69, p*40, p*37, 172, 286);
    line(bitmojiX+p*14, bitmojiY+p*83, bitmojiX+p*14, bitmojiY+p*56);
    line(bitmojiX+p*14, bitmojiY+p*87, bitmojiX+p*40, bitmojiY+p*87);   //initials 
};

var drawEyes = function(bitmojiX, bitmojiY, h) 
{
    var p = h/100;
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    ellipse(bitmojiX +p*11, bitmojiY -p*4, p*10, p*7);
    ellipse(bitmojiX -p*11, bitmojiY -p*4, p*10, p*7);//Inside of eye
    
    noStroke();
    fill(0, 0, 0);
    ellipse(bitmojiX -p*11, bitmojiY -p*4, p*6, p*6);
    ellipse(bitmojiX +p*11, bitmojiY -p*4, p*6, p*6);
    
    fill(0, 0, 0);
    ellipse(bitmojiX -p*11, bitmojiY -p*4, p*2, p*2);
    ellipse(bitmojiX +p*11, bitmojiY -p*4, p*2, p*2);    //eyes
};

var drawFace = function(bitmojiX, bitmojiY, h) 
{
    var p = h/100;
    noFill();
    stroke(0, 0, 0);
    strokeWeight(2);
    noFill();
    arc(bitmojiX +-p*4, bitmojiY +p*74, p*200, p*177, 262, 268);
    arc(bitmojiX +p*5, bitmojiY +p*74, p*200, p*177, 272, 278);  //eyebrows
    
    arc(bitmojiX +p*0, bitmojiY +-p*22, p*54, p*92, 425, 475);  //lips
    
    strokeWeight(1);
    arc(bitmojiX +p*0, bitmojiY +-p*22, p*28, p*68, 425, 473);  //nose
};

var drawBitmoji = function(bitmojiX, bitmojiY, h) 
{
    var p = h/100;
    drawHoodie(bitmojiX, bitmojiY, h);
    drawHeadS(bitmojiX, bitmojiY, h);
    drawInitials(bitmojiX, bitmojiY, h);
    drawEyes(bitmojiX, bitmojiY, h);
    drawFace(bitmojiX, bitmojiY, h);
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

//Same as drawHead but also includes bitBody.color and bitBody.initials
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

var currentScreen = 0; //Controlls what screen is selected
var gameOver = false; //Determines if game is over
var highScore = 0; // Stores highscore even after game is reset
var score = 0; //Temp score 
var gridSquare = 20; //This sets how big a grid square is
var gridSize = 400/gridSquare; //Khans environment is set to 400 by 400
frameRate(7); //Sets game speed

//Kahn Button Constructor 
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 130;
    this.height = config.height || 40;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

//Kahn Draw method
Button.prototype.draw = function() {
    fill(109, 168, 69);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

//Kahn mouse pos check 
Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

//Khan mouse click funtion
Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

//Start Button
var btn1 = new Button(
    {
        x: 135,
        y: 323,
        label: " Start Game!",
        onClick: function() 
        {
            currentScreen = 1; //Brings to game screen
        }
});

//Restart Button
var btn2 = new Button(
    {
        x: 133,
        y: 324,
        label: "  RESTART!",
        onClick: function() 
        {
            currentScreen = 1;//Brings to game screen
        }
});

//Khan Button check if clicked function
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
    //Sets the x and y positions 
    this.x = x;
    this.y = y;
    
    //Sets the snake speed. although it never gets higher then 1 since the game speed is controllled by the framerate changing this makes the game impossible to play
    this.speed = speed || 1;
    
    //Sets the directions
    this.direction = direction;
    
    //Sets x and y positions for the snake body parts and stores them in arrays
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
    
    //Square Head for testing 
    //rect(this.x * gridSquare, this.y * gridSquare, gridSize, gridSize);
    
    image(getImage("avatars/aqualine-seed"),this.x * gridSquare - 13, this.y * gridSquare -17 , gridSize+30, gridSize+30);
     
     // Moves and draws the body
    if(score > 0){
        
        //starts from the last part of the tail which is determined by the players score
        for (var i = score; i > 0; --i) 
        {
            //This sets the current i body part to equal the one thats ahead of it
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
    
    //This fits the image into a grid square, the x and y coordinates are slightly offset so the character looks like its in the right spot
    image(getImage("avatars/spunky-sam-red"),this.x * gridSquare - 9, this.y * gridSquare -15 , gridSize+20, gridSize+20);
};

//Creates new instances of the snake and fruit
var snake = new Snake(round(random(1,18)),round(random(1,18)));
var fruit = new Fruit(round(random(1,18)),round(random(1,18)));

//screens
var startScreen = function()
{
    background(47, 102, 73); // Green
    
    //Draws the borders using the grid properties
    for(var i = 0; i <= 43; ++i) 
    {
        //Top 
        rect(i*gridSquare, 1, gridSize, gridSize/2);
        //Bottom 
        rect(i*gridSquare, 390, gridSize, gridSize);
        //Right Side
        rect(390, (i*(gridSquare/2)+10), gridSize/2, gridSize/2);
        //Left
        rect(0, (i*(gridSquare/2)+10), gridSize/2, gridSize/2);
    }
    
    noStroke();
    fill(91, 158, 82);
    //SNAKE LETTERS
    // S
    rect(1 * (gridSquare-3), 4 * (gridSquare-3), gridSize, gridSize);
    rect(2 * (gridSquare-3), 3 * (gridSquare-3), gridSize, gridSize);
    rect(3 * (gridSquare-3), 3 * (gridSquare-3), gridSize, gridSize);
    rect(2 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(3 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(2 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    rect(1 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    
    // N
    rect(5 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(5 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(5 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    rect(6 * (gridSquare-3), 4 * (gridSquare-3), gridSize, gridSize);
    rect(7 * (gridSquare-3), 4 * (gridSquare-3), gridSize, gridSize);
    rect(8 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(8 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(8 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    
    // A
    rect(10 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(10 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(11 * (gridSquare-3), 4 * (gridSquare-3), gridSize, gridSize);
    rect(12 * (gridSquare-3), 4 * (gridSquare-3), gridSize, gridSize);
    rect(13 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(13 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(14 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    rect(11 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    rect(12 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    
    // K
    rect(16 * (gridSquare-3), 4 * (gridSquare-3), gridSize, gridSize);
    rect(16 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(16 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(16 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    rect(18 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    rect(18 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(17 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    
    // E
    rect(21 * (gridSquare-3), 4 * (gridSquare-3), gridSize, gridSize);
    rect(20 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(22 * (gridSquare-3), 8 * (gridSquare-3), gridSize, gridSize);
    rect(21 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(20 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(20 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    rect(21 * (gridSquare-3), 8 * (gridSquare-3), gridSize, gridSize);
    rect(22 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);

    
    //Draws Elijah
    stroke(0, 0, 0);
    drawbitmoji({
        x:3, 
        y:93, 
        h:74, 
        color: color(43, 43, 230), 
        initials: true,
        });
        
        //Draws Simeon
        drawBitmoji(284, 186, 68);
        
        //Draws the start button
        btn1.draw();
        
        //INstructions text
        text('Use Arrow Keys to move the Snake around', 21, 262);
        text('to eat the fruit and get points!', 78, 282);
        text('By Simeon Larinde and Elijah', 73, 16);
        text(' Smith-Antonides', 120, 35);
};

var gameScreen = function()
{
    //Draws background 
    background(47, 102, 73);
    
    //CHECKERED BACKGROUND
    //This loop draws diffrent colored tiles based on weather or not there is a remained present
    for(var i = 1; i <= 29; ++i) 
    {
        noStroke();
        for(var j = 1; j <= 19; ++j)
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
    
    //Score Board & border style
    noStroke();
    textSize(12);
    fill(50, 125, 39);
    rect(-7,-2,27,601); //left
    rect(380,-2,27,601);  //right
    rect(0,-8,600,28); //top
    rect(0,379,600,27); //bottom
    fill(255, 255, 255);
    textSize(20);
    text(': '+ score, 40, 0);
    image(getImage("avatars/spunky-sam-red"), 17, -2, 21, 21);
    text(score, 496, 3);
    
    
    //Calls/draws the snake and fruit instances
    snake.draw();
    fruit.draw();
    
    stroke(0, 0, 0);
    drawbitmoji({
        x:337, 
        y:-27, 
        h:35, 
        color: color(43, 43, 230), 
        initials: true,
        });
        
    //Draws Simeon
    drawBitmoji(24, 371, 29);
    
    //Arrow controls for direction to set the direction the snake is moving
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
        snake.direction = 'left';
    }
    
    //RIGHT
     else if (keyIsPressed && keyCode === RIGHT && snake.direction !== 'left')
    {
        snake.direction = 'right';
    }
    
    //These if statments make sure the snake cannot go the opposite way its going and changes the direction bassed on the direction stored in the snake object
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
    
    //This is only used when the game is started or restart
    else if(snake.direction === 'stop') {
        snake.y += 0;
        snake.x += 0;
    }
    
    // Check if the snake hits its own body
    for (var i = 1; i < snake.bodyX.length; i++) {
     if (snake.x === snake.bodyX[i] && 
        snake.y === snake.bodyY[i])     {
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
            
            //Adds point to temp score
            score += 1;
            
            //adds to highScore if temp score is higher
            if(score > highScore)
            {
                highScore = score;
            }
            
        }
    //increases speed once player attains a score of 4    
    if (score === 4)
    {
    //Game speed is controlled by the framrate
    frameRate(10);
    }    
    
    //Sets current scene to the gameover screen 
    if(gameOver === true)
   {
       currentScreen = 2;//Game over screen
   }
};

//End Screen Function
var endScreen = function()
{
    background(47, 102, 73);
    
    //black border for design
    for(var i = 0; i <= 43; ++i) 
    {
        //Top 
        rect(i*gridSquare, 1, gridSize, gridSize/2);
        //Bottom 
        rect(i*gridSquare, 390, gridSize, gridSize);
        //Right Side
        rect(390, (i*(gridSquare/2)+10), gridSize/2, gridSize/2);
        //Left
        rect(0, (i*(gridSquare/2)+10), gridSize/2, gridSize/2);
    }
    
    //Resets Stroke for bitMojis 
    stroke(0, 0, 0);
    //draws Elijah
    drawbitmoji({
        x:-11, 
        y:152, 
        h:74, 
        color: color(43, 43, 230), 
        initials: true,
        });
        
        //Draws Simeon
        drawBitmoji(284, 246, 68);
    
    noStroke();
    fill(91, 158, 82);
    
    //SNAKE LETTERS
    // S
    rect(1 * (gridSquare-3), 4 * (gridSquare-3), gridSize, gridSize);
    rect(2 * (gridSquare-3), 3 * (gridSquare-3), gridSize, gridSize);
    rect(3 * (gridSquare-3), 3 * (gridSquare-3), gridSize, gridSize);
    rect(2 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(3 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(2 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    rect(1 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    
    // N
    rect(5 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(5 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(5 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    rect(6 * (gridSquare-3), 4 * (gridSquare-3), gridSize, gridSize);
    rect(7 * (gridSquare-3), 4 * (gridSquare-3), gridSize, gridSize);
    rect(8 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(8 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(8 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    
    // A
    rect(10 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(10 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(11 * (gridSquare-3), 4 * (gridSquare-3), gridSize, gridSize);
    rect(12 * (gridSquare-3), 4 * (gridSquare-3), gridSize, gridSize);
    rect(13 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(13 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(14 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    rect(11 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    rect(12 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    
    // K
    rect(16 * (gridSquare-3), 4 * (gridSquare-3), gridSize, gridSize);
    rect(16 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(16 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(16 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    rect(18 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    rect(18 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(17 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    
    // E
    rect(21 * (gridSquare-3), 4 * (gridSquare-3), gridSize, gridSize);
    rect(20 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);
    rect(22 * (gridSquare-3), 8 * (gridSquare-3), gridSize, gridSize);
    rect(21 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(20 * (gridSquare-3), 6 * (gridSquare-3), gridSize, gridSize);
    rect(20 * (gridSquare-3), 7 * (gridSquare-3), gridSize, gridSize);
    rect(21 * (gridSquare-3), 8 * (gridSquare-3), gridSize, gridSize);
    rect(22 * (gridSquare-3), 5 * (gridSquare-3), gridSize, gridSize);



    
    
    //Draws Restart Button Object
    btn2.draw();
    
    //High Score text
    fill(0, 0, 0);
    textSize(20);
    text('HIGH SCORE: ' + highScore, 117, 182);
    text('GAME OVER', 130, 219);
    
    //Resets Snake head position
    snake.x = round(random(1,18));
    snake.y = round(random(1,18));
    
    //Sets The head to stop
    snake.direction = 'stop';
    
    //removes elements from the snake body arrays 
    snake.bodyX = [];
    snake.bodyY = [];
    
    //Resets temp score
    score = 0;
    
    //Sets gamestate 
    gameOver = false;
    
    //Resets fruit position 
    fruit.x = round(random(1,18));
    fruit.y = round(random(1,18));
    
    //Resets game speed
    frameRate(7);
    
};

//Main draw function that sets the current screen states 
var draw = function() {
   
   if(currentScreen === 0)
   {
      startScreen(); //Start screen
   }
   
   //Checks to see if game is over
   else if(currentScreen === 1)
   {
       gameScreen(); //Game screen
   }
   
   else if(currentScreen === 2)
   {
        endScreen(); // Game over screen
   }
   
};
