var canvas = new fabric.Canvas("myCanvas");
blockImgW = 30;
blockImgH = 30;
PlayerX = 10;
PlayerY = 10;
var playerObject = "";
var blockObject = "";
function playerUpdate()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set(
            {
                top:PlayerY, 
                left:PlayerX
            });
        canvas.add(playerObject);
    });
}
function newIMG(getImg)
{
    fabric.Image.fromURL(getImg, function(Img)
    {
        blockObject = Img;
        blockObject.scaleToWidth(blockImgW);
        blockObject.scaleToHeight(blockImgH);
        blockObject.set(
            {
                top:PlayerY, 
                left:PlayerX
            });
        canvas.add(blockObject);
    });
}
window.addEventListener("keydown", kd);
function kd(e)
{
    keypressed = e.keyCode;
    if(e.shiftKey == true && keypressed == '80')
    {
        blockImgW = blockImgW + 10;
        blockImgH = blockImgH + 10;
        document.getElementById("current_width").innerHTML = blockImgW;
        document.getElementById("current_height").innerHTML = blockImgH;
    }
    if(e.shiftKey == true && keypressed == '77')
    {
        blockImgW = blockImgW - 10;
        blockImgH = blockImgH - 10;
        document.getElementById("current_width").innerHTML = blockImgW;
        document.getElementById("current_height").innerHTML = blockImgH;
    }
    if(keypressed == '37')
    {
        left();
    }
    if(keypressed == '38')
    {
        up();
    }if(keypressed == '39')
    {
        right();
    }if(keypressed == '40')
    {
        down();
    }
    if(keypressed == '65')
    {
        newIMG('block.png');
    }
}
function up()
{
    if(PlayerY >= 0)
    {
        PlayerY = PlayerY - blockImgH;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down()
{
    if(PlayerY <= 550)
    {
        PlayerY = PlayerY + blockImgH;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left()
{
    if(PlayerX >= 0)
    {
        PlayerX = PlayerX - blockImgW;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right()
{
    if(PlayerX <= 900)
    {
        PlayerX = PlayerX + blockImgW;
        canvas.remove(playerObject);
        playerUpdate();
    }
}