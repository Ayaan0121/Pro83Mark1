
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
//get the screen size
 
var screenWidth= screen.width;

//new screen 
var newWidth=screen.width -70;    
var newHeight=screen.height -300;    
  
//mobile screen or not 

if (screenWidth < 992) {
    document.getElementById("myCanvas").width=newWidth;
    document.getElementById("myCanvas").height=newHeight;
    document.body.style.overflow="hidden";
}

//touch start

    canvas.addEventListener("touchstart", my_touchStart);
    
    function my_touchStart(e)
    {
        //Addictonal Activity start
        color=document.getElementById("colour").value;
        width_of_line=document.getElementById("widthOfLine").value;
        //Addictonal Activity ends

        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }
//touch move

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

      
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " +current_position_of_touch_y );
        ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y );
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

    function clearArea() {
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        
    }
    //for computer
    var mouseEvent="empty";
var lastX;
var lastY;

canvas = document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
colour="black";
widthline=1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    colour=document.getElementById("color").value;
    widthline=document.getElementById("widthOfLine").value;
mouseEvent="mousedown";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
  currentX=e.clientX-canvas.offsetLeft;
  currentY=e.clientY-canvas.offsetTop;
   
  if (mouseEvent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=widthline;

    ctx.moveTo(lastX,lastY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();
  }

lastX=currentX;
lastY=currentY;

    }







    canvas.addEventListener("mouseup", my_mouseup);

    function my_mouseup(e){
    mouseEvent="mouseup";

    
    }




canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
mouseEvent="mouseleave";

}


function clearArea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}