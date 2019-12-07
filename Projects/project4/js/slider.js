var slides=document.getElementsByClassName('slider');
var d=document.getElementsByClassName('b1');
index=1;
show();
function pre(){
	index--;
	show();
}
function next(){
	index++;
	show();
}
function slide(id){
	index=id;
	show();
}
function show(){
	for(var i=0;i<slides.length;i++)
	{
		slides[i].style.display="none";
	}
	if(index>slides.length)
	{
		index=1;
	}
	if(index<1)
	{
		index=slides.length;
	}
	for(var i=0;i<d.length;i++)
	{
		d[i].className=d[i].className.replace(" active","");
	}
	slides[index-1].style.display="block";
	d[index-1].className+=" active";
}
setInterval("hello()",2000);
function hello(){
	index++;
	show();
}
