var canvas = new fabric.Canvas("myCanvas");
var widthBlocoImg = 30;
var heightBlocoImg = 30;
var playerX = 10;
var playerY = 10;
var playerObj = ""

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        playerObj = Img;
        playerObj.scaleToWidth(150);
        playerObj.scaleToHeight(140);
        playerObj.set({
            top: playerY, left: playerX
        })
        canvas.add(playerObj);
    })
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img){
        blocoObj = Img;
        blocoObj.scaleToWidth(widthBlocoImg);
        blocoObj.scaleToHeight(heightBlocoImg);
        blocoObj.set({
            top: playerY, left: playerX
        })
        canvas.add(blocoObj);
    })
}

window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    keyPressed = e.keyCode;
    if (e.shiftKey==true && keyPressed=="80") {
        widthBlocoImg = widthBlocoImg + 10;   
        heightBlocoImg = heightBlocoImg + 10;

        document.getElementById("widthAtual").innerHTML = widthBlocoImg;
        document.getElementById("heightAtual").innerHTML = heightBlocoImg;

    }if (e.shiftKey==true && keyPressed=="77") {
        widthBlocoImg = widthBlocoImg - 10;   
        heightBlocoImg = heightBlocoImg - 10;

        document.getElementById("widthAtual").innerHTML = widthBlocoImg;
        document.getElementById("heightAtual").innerHTML = heightBlocoImg;
    }

    if (keyPressed=="40") {
        down()
    }
    if (keyPressed=="39") {
        right()
    } 
    if (keyPressed=="38") {
        up()
    }
    if (keyPressed=="37") {
        left()
    }
    if (keyPressed=="89") {
        newImage("yellow_wall.png")
    }
    if (keyPressed=="87") {
        newImage("wall.jpg")
    }
    if (keyPressed=="85") {
        newImage("unique.png")
    }
    if (keyPressed=="84") {
        newImage("trunk.jpg")
    }
    if (keyPressed=="82") {
        newImage("roof.jpg")
    }
    if (keyPressed=="76") {
        newImage("light_green.png")
    }
    if (keyPressed=="68") {
        newImage("dark_green.png")
    }
    if (keyPressed=="67") {
        newImage("cloud.jpg")
    }
    if (keyPressed=="71") {
        newImage("ground.png")
    }
}
function down(){
    if(playerY<=500){
        playerY = playerY + heightBlocoImg;
        canvas.remove(playerObj);
        playerUpdate()
    }
}
function up(){
    if(playerY>=0){
        playerY = playerY - heightBlocoImg;
        canvas.remove(playerObj);
        playerUpdate()
    }
}
function right(){
    if(playerX<=850){
        playerX = playerX + widthBlocoImg;
        canvas.remove(playerObj);
        playerUpdate()
    }
}
function left(){
    if(playerX>=0){
        playerX = playerX - widthBlocoImg;
        canvas.remove(playerObj);
        playerUpdate()
    }
}
