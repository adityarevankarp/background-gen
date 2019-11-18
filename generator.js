var color1= document.querySelector(".color1");
var color2=document.querySelector(".color2");
var css=document.querySelector("h3");
var body=document.getElementById("backcolor")
var button=document.querySelector("button");



button.addEventListener("click" , function()
{
	console.log("working");
	body.style.background="linear-gradient(to right,black ,blue";
})


console.log(color1);
console.log(color2);
console.log(css);

function changecolor()
{
body.style.background=

	"linear-gradient(to right, "+color1.value+","+color2.value+")";

     css.textContent = body.style.background + ";";

}


  
color1.addEventListener("input" , changecolor)


color2.addEventListener("input" , changecolor)
