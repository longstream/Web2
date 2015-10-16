//document.getElementById("#one").height = window.innerHeight;

window.onscroll = function(){
var t = document.documentElement.scrollTop || document.body.scrollTop;
var top = document.getElementById("top");


delta = t-before;
/*if(delta > 0)
 alert("yes");
if(delta < 0) alert("no");*/

before = t;
if(t>10)
	{
		top.style.backgroundColor = 'rgb(26, 188, 156)';
		top.style.paddingTop = '0px';
		top.style.paddingBottom = "0px";
		top.style.borderColor = "rgb(94, 207, 185)"; 
		top.style.borderStyle = "solid";
		if(t>700 &t<800){
			if(delta>0)
			animate2();
		};
		if(t>700 &t<1100){
			if(delta<0)
			animate1();
		}
	}
else
{
	top.style.backgroundColor = 'transparent';
	top.style.paddingTop = '15px';
	top.style.borderStyle = "none";
}

}