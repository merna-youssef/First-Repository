
$("document").ready(function()
                   {
  var typed = new Typed('#typed',{
                   strings:["Welcome To Our Team"],
                   backSpeed: 40,
                   typeSpeed: 40,
                   loop: true,
                  
                 });  
    
})


var h = window.innerHeight -100
var w = window.innerWidth




var canvas = document.getElementById("c");

canvas.width=w;
canvas.height=h;

var ctx = canvas.getContext("2d");
var circleCont = [];
var maxCircle = 1000
for(var i=0;i<maxCircle;i++)
    {
     var circle = 
        {
            x:Math.random()*w,
            y:Math.random()*h,
            r:Math.random()*1+1
        }   
     circleCont.push(circle)
    }
function drawCircle()
{
    
    ctx.clearRect(0,0,w,h)
    ctx.beginPath();
        for(var i=0;i<circleCont.length;i++)
            {
        var c = circleCont[i] ;
      //  console.log(c)
        ctx.moveTo(c.x,c.y)
        ctx.arc(c.x,c.y,c.r,0,2*Math.PI)
            }
ctx.fillStyle="#fff";
ctx.fill();
    moveCircle()
}
function moveCircle()
{
    for(var i=0;i<circleCont.length;i++)
            {
        var c = circleCont[i] ;
        c.y +=1; 
        c.x +=1; 
                
            if(c.y>h)
                {
             circleCont[i].y=-20;        
                }
            if(c.x>w)
                {
             circleCont[i].x=-20;        
                }                  
            }   
}
setInterval(drawCircle,10)
