var a=document.getElementsByClassName('slider1');
var dos=document.getElementsByClassName('b2');
index=1;
shows(index);
function push(myindex){
	shows(index+=myindex);
}
function slide1(id){
	index=id;
	shows(index);
}
function shows(indexes){
	for(var i=0;i<a.length;i++)
	{
		a[i].style.display="none";
	}
	if(indexes>a.length)
	{
		indexes=1;
	}
	if(indexes<1)
	{
		indexes=a.length;
	}
	for(var j=0;j<dos.length;j++)
	{
		dos[j].className=dos[j].className.replace(" active1"," ");
	}
	a[indexes-1].style.display="block";
	dos[indexes-1].className+=" active1";
}
