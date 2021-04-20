window.addEventListener("load", function(){

	var verifica = document.querySelectorAll('.corpo img');
	var vez = document.getElementById("Ivez");
	var svez = document.getElementById("te");
	var j = 0;
	var rein = document.getElementById("reiniciar");

		for (var i = 0; i < verifica.length; i++) {
			verifica[i].addEventListener("click",function(){
				if(this.getAttribute("src") == "image/velha.png" && j % 2 == 0)
				{
					this.setAttribute("src","image/x.png");
					vez.setAttribute("src","image/b.png");
					svez.style.color = "#5e5e5d";
				}
				else if (this.getAttribute("src") == "image/velha.png")
				{
					this.setAttribute("src","image/b.png");
					vez.setAttribute("src","image/x.png");
					svez.style.color = "#bac9cb";
				}
				
				vencedor();

				j++;
				if ((j == 9) && (svez.getAttribute("velha") == "0"))
				{
					svez.innerHTML = "Empate!";
					vez.setAttribute("src","image/velha.png");
					svez.style.color = "#03678c";
					setVelha();	
				}			
			})
		}

		rein.addEventListener("click",function(){
			for(i = 0; i < verifica.length; i++)
			{
				verifica[i].setAttribute("src", "image/velha.png");
				svez.innerHTML = "Sua vez";
				vez.setAttribute("src","image/x.png");
				svez.style.color = "white";	
				j = 0;		
			}
		})
});

function vencedor(){
	var l1 = document.getElementById("I1").getAttribute("src");
	var l2 = document.getElementById("I2").getAttribute("src");
	var l3 = document.getElementById("I3").getAttribute("src");

	var l4 = document.getElementById("I4").getAttribute("src");
	var l5 = document.getElementById("I5").getAttribute("src");
	var l6 = document.getElementById("I6").getAttribute("src");

	var l7 = document.getElementById("I7").getAttribute("src");
	var l8 = document.getElementById("I8").getAttribute("src");
	var l9 = document.getElementById("I9").getAttribute("src");

	if (((l1 == l2 && l1 == l3) || (l1 == l4 && l1 == l7) || (l1 == l5 && l1 == l9)) && l1 != "image/velha.png")
	{
		verifica(l1);		
	}
	else if(((l5 == l4 && l5 == l6) || (l5 == l2 && l5 == l8) || (l5 == l3 && l5 == l7)) && l5 != "image/velha.png")
	{
		verifica(l5);		
	}
	else if (((l9 == l8 && l9 == l7) || (l9 == l6 && l9 == l3)) && l9 != "image/velha.png")
	{
		verifica(l9);
	}
}

var placar1 = 0;
var placar2 = 0;
function verifica(l)
{
	var vez = document.getElementById("Ivez");
	var svez = document.getElementById("te");
	var p1 = document.getElementById("p1");
	var p2 = document.getElementById("p2");

	if (l == "image/x.png")
		{
			svez.innerHTML = "Player 1 ganhou!";
			vez.setAttribute("src","image/x.png");
			vez.setAttribute("velha","1");
			svez.style.color = "#bac9cb";
			placar1++;
			p1.innerHTML = placar1;
			setVelha();	
		}
		else if (l == "image/b.png")
		{
			svez.innerHTML = "Player 2 ganhou!";
			vez.setAttribute("src","image/b.png");
			vez.setAttribute("velha","1");
			svez.style.color = "#5e5e5d";
			placar2++;
			p2.innerHTML = placar2;
			setVelha();	
		}
}

function setVelha()
{
	var verifica = document.querySelectorAll('.corpo img');
	for(var i = 0; i < verifica.length; i++)
	{
		if (verifica[i].getAttribute("src") == "image/velha.png")
		{
			verifica[i].setAttribute("src", "image/velha2.png")
		}
	}
}