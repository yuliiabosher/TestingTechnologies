let choices = ["rock", "paper", "scissors"];
document.getElementById("rock").addEventListener("click", function() {
  		func("rock");
	});
document.getElementById("paper").addEventListener("click", function() {
  		func("paper");
	});
document.getElementById("scissors").addEventListener("click", function() {
  		func("scissors");
	});

function func(choice) {
	let text = document.createTextNode(`Your choice: ${choice}`);
	let cont = document.getElementsByClassName("container")[0];
	let row = document.createElement("row");
	let par = document.createElement("h3");
	par.append(text);
	row.append(par);
	cont.append(row);
	let index = Math.floor(Math.random() * choices.length);
	let row2 = document.createElement("row");
	let par2 = document.createElement("h3");
	let text2 = document.createTextNode(`Computer choice: ${choices[index]}`);
	par2.append(text2);
	row2.append(par2);
	cont.append(row2);
	
	switch (choices[index]==choice) {
		case true:
			let row11 = document.createElement("row");
			let par11 = document.createElement("h3");
			let text11 = document.createTextNode("It's a draw");
			par11.append(text11);
			row11.append(par11);
			cont.append(row11);
			break;
		case false:
			if ((choices[index]=="rock" && choice=="paper") || (choices[index]=="paper" && choice=="scissors")) {
				let row22 = document.createElement("row");
				let par22 = document.createElement("h3");
				let text22 = document.createTextNode("You won");
				par22.append(text22);
				row22.append(par22);
				cont.append(row22);
				break;	
				
			} else {
				let row22 = document.createElement("row");
				let par22 = document.createElement("h3");
				let text22 = document.createTextNode("Computer won");
				par22.append(text22);
				row22.append(par22);
				cont.append(row22);
				break;	
			}
}
}



