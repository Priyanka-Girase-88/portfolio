var playerX=0;
var playerO=0;
var playername="";
var count=0;
var btn1=btn2=btn3=btn4=btn5=btn6=btn7=btn8=btn9=btn10=true;
// alert(btn9);
var b1=document.getElementById('a');
var b2=document.getElementById('b');
var b3=document.getElementById('c');
var b4=document.getElementById('d');
var b5=document.getElementById('e');
var b6=document.getElementById('f');
var b7=document.getElementById('g');
var b8=document.getElementById('h');
var b9=document.getElementById('i');

function play(btn){
	var x="X";
	var o="O";
	/*start playerX*/
	if(count%2==0)
	{
		var val=x;
	}
	else{
		var val=o;   /*start playerO*/
	}
	if(count<10)
	{
		switch(btn){
			case 1:if(btn1){
						if(val=="O")
						{
							b1.value=val;
							btn1=false;
							count++;
							b1.style.color="yellow";
						}
						else{
							b1.value=val;
							btn1=false;
							count++;
						}
					}
					break; 
			case 2:if(btn2){
						if(val=="O")
						{
							b2.value=val;
							btn2=false;
							count++;
							b2.style.color="yellow";	
						}
						else{
							b2.value=val;
							btn2=false;
							count++;
						}
					}
					break; 
			case 3:if(btn3){
						if(val=="O")
						{
							b3.value=val;
							btn3=false;
							count++;
							b3.style.color="yellow";
						}
						else{
							b3.value=val;
							btn3=false;
							count++;
						}
					}
					break; 
			case 4:if(btn4){
						if(val=="O")
						{
							b4.value=val;
							btn4=false;
							count++;
							b4.style.color="yellow";
						}
						else{
							b4.value=val;
							btn4=false;
							count++;
						}
					}					
					break; 
			case 5:if(btn5){
						if(val=="O")
						{
							b5.value=val;
							btn5=false;
							count++;
							b5.style.color="yellow";
						}
						else{
							b5.value=val;
							btn5=false;
							count++;
						}
					}
					break; 
			case 6:if(btn6){
						if(val=="O")
						{
							b6.value=val;
							btn6=false;
							count++;
							b6.style.color="yellow";
						}
						else{
							b6.value=val;
							btn6=false;
							count++;	
						}
				   }
					break; 
			case 7:if(btn7){
						if(val=="O")
						{
							b7.value=val;
							btn7=false;
							count++;
							b7.style.color="yellow";	
						}
						else{
							b7.value=val;
							btn7=false;
							count++;
						}
				    }
					break; 
			case 8:if(btn8){
						if(val=="O")
						{
							b8.value=val;
							btn8=false;
							count++;
							b8.style.color="yellow";
						}
						else{
							b8.value=val;
							btn8=false;
							count++;
						}
				    }
					break; 
			case 9:if(btn9){
						if(val=="O")
						{
							b9.value=val;
							btn9=false;
							count++;
							b9.style.color="yellow";
						}
						else{
							b9.value=val;
							btn9=false;
							count++;
						}
					}
					break; 
			case 10:clear(10);
					break;
		}
	}
	result();
}
function result(){
	//first line
	if(b1.value=="X" && b2.value=="X" && b3.value=="X")
	{
		b1.style.color="green";
		b2.style.color="green";
		b3.style.color="green";
		playerX++;
		setTimeout(winnerX,500);
		setTimeout(clear,1800);	
	}
	else if(b1.value=="O" && b2.value=="O" && b3.value=="O")
	{
		b1.style.color="green";
		b2.style.color="green";
		b3.style.color="green";
		playerO++;
		setTimeout(winnerO,500);
		setTimeout(clear,1800);	
	}

	//second line
	else if(b4.value=="X" && b5.value=="X" && b6.value=="X")
	{
		b4.style.color="green";
		b5.style.color="green";
		b6.style.color="green";
		playerX++;
		setTimeout(winnerX,500);
		setTimeout(clear,1800);	
	}
	else if(b4.value=="O" && b5.value=="O" && b6.value=="O")
	{
		b4.style.color="green";
		b5.style.color="green";
		b6.style.color="green";
		playerO++;
		setTimeout(winnerO,500);
		setTimeout(clear,1800);	
	}

	//third line
	else if(b7.value=="X" && b8.value=="X" && b9.value=="X")
	{
		b7.style.color="green";
		b8.style.color="green";
		b9.style.color="green";
		playerX++;
		setTimeout(winnerX,500);
		setTimeout(clear,1800);	
	}
	else if(b7.value=="O" && b8.value=="O" && b9.value=="O")
	{
		b7.style.color="green";
		b8.style.color="green";
		b9.style.color="green";
		playerO++;
		setTimeout(winnerO,500);
		setTimeout(clear,1800);	
	}

	//left cross
	else if(b1.value=="X" && b5.value=="X" && b9.value=="X")
	{
		b1.style.color="green";
		b5.style.color="green";
		b9.style.color="green";
		playerX++;
		setTimeout(winnerX,500);
		setTimeout(clear,1800);	
	}
	else if(b1.value=="O" && b5.value=="O" && b9.value=="O")
	{
		b1.style.color="green";
		b5.style.color="green";
		b9.style.color="green";
		playerO++;
		setTimeout(winnerO,500);
		setTimeout(clear,1800);	
	}

	//right cross
	else if(b3.value=="X" && b5.value=="X" && b7.value=="X")
	{
		b3.style.color="green";
		b5.style.color="green";
		b7.style.color="green";
		playerX++;
		setTimeout(winnerX,500);
		setTimeout(clear,1800);	
	}
	else if(b3.value=="O" && b5.value=="O" && b7.value=="O")
	{
		b3.style.color="green";
		b5.style.color="green";
		b7.style.color="green";
		playerO++;
		setTimeout(winnerO,500);
		setTimeout(clear,1800);	
	}
	//vertical first line
	else if(b1.value=="X" && b4.value=="X" && b7.value=="X")
	{
		b1.style.color="green";
		b4.style.color="green";
		b7.style.color="green";
		playerX++;
		setTimeout(winnerX,500);
		setTimeout(clear,1800);	
	}
	else if(b1.value=="O" && b4.value=="O" && b7.value=="O")
	{
		b1.style.color="green";
		b4.style.color="green";
		b7.style.color="green";
		playerO++;
		setTimeout(winnerO,500);
		setTimeout(clear,1800);	
	}

	//vertical second line
	else if(b2.value=="X" && b5.value=="X" && b8.value=="X")
	{
		b2.style.color="green";
		b5.style.color="green";
		b8.style.color="green";
		playerX++;
		setTimeout(winnerX,500);
		setTimeout(clear,1800);	
	}
	else if(b2.value=="O" && b5.value=="O" && b8.value=="O")
	{
		b2.style.color="green";
		b5.style.color="green";
		b8.style.color="green";
		playerO++;
		setTimeout(winnerO,500);
		setTimeout(clear,1800);	
	}
	//vertical third line
	else if(b3.value=="X" && b6.value=="X" && b9.value=="X")
	{
		b3.style.color="green";
		b6.style.color="green";
		b9.style.color="green";
		playerX++;
		setTimeout(winnerX,500);
		setTimeout(clear,1800);	
	}
	else if(b3.value=="O" && b6.value=="O" && b9.value=="O")
	{
		b3.style.color="green";
		b6.style.color="green";
		b9.style.color="green";
		playerO++;
		setTimeout(winnerO,500);
		setTimeout(clear,1800);	
	}
	//not match
	else if(b1.value!="" && b2.value!="" && b3.value!="" && b4.value!="" && b5.value!="" && b6.value!="" && b7.value!="" && b8.value!="" && b9.value!=""){
		document.getElementById("status").innerHTML="Well tried,It's a draw!!!";
		document.getElementById("status").style.color="white";
		setTimeout(clear,1800);
	}
	document.getElementById("winx").innerHTML="Win:"+playerX;
	document.getElementById("wino").innerHTML="Win:"+playerO;
}

function winnerX(){
	document.getElementById("status").innerHTML="&nbspCongratulation!!!<br>Player X is winner";
	document.getElementById("status").style.color="white";
}
function winnerO(){
	document.getElementById("status").innerHTML="Congratulation!!!<br>Player O is winner";
	document.getElementById("status").style.color="white";
}

function clear(finish){
	b1.value="";
	b2.value="";
	b3.value="";
	b4.value="";
	b5.value="";
	b6.value="";
	b7.value="";
	b8.value="";
	b9.value="";
	b1.style.color="red";
	b2.style.color="red";
	b3.style.color="red";
	b4.style.color="red";
	b5.style.color="red";
	b6.style.color="red";
	b7.style.color="red";
	b8.style.color="red";
	b9.style.color="red";	
	count=0;
	btn1=true;
	btn2=true;
	btn3=true;
	btn4=true;
	btn5=true;
	btn6=true;
	btn7=true;
	btn8=true;
	btn9=true;
	if(finish==10)
	{
		playerO=0;
		playerX=0;
		document.getElementById("status").innerHTML="Best of Luck!!!";
		document.getElementById("status").style.color="white";
	}
}
