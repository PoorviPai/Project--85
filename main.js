canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

greencar_width=75;
greencar_height=100;

greencar_x = 5;
greencar_y = 225;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    greencar_imgTag=new Image();
    greencar_imgTag.onload=uploadgreencar;
    greencar_imgTag.src=greencar_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar(){
    ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keypressed=e.keyCode;
if(keypressed=="37"){
    left();
    console.log("left");
}
 if(keypressed=="38"){
       up();
       console.log("up");
    }

    if(keypressed=="39"){
        right();
        console.log("right");
     }

     if(keypressed=="40"){
        down();
        console.log("down");
     }
}

function up(){
    if(greencar_y>=0){
        greencar_y = greencar_y - 10;
        uploadBackground();
        uploadgreencar();
    }
}

function down(){
    if(greencar_y<=300){
        greencar_y = greencar_y + 10;
        uploadBackground();
        uploadgreencar();
    }
}

function left(){
    if(greencar_x>=0){
        greencarx = greencar_x - 10;
        uploadBackground();
        uploadgreencar();
    }
}

function right(){
    if(greencar_x<=700){
        greencar_x = greencar_x + 10;
        uploadBackground();
        uploadgreencar();
    }
}

