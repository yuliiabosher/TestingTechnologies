let choices = ["rock", "paper", "scissors"];
document.getElementById("rock").addEventListener("click", function() {
  		play("rock");
	});
document.getElementById("paper").addEventListener("click", function() {
  		play("paper");
	});
document.getElementById("scissors").addEventListener("click", function() {
  		play("scissors");
	});

function play(choice) {
	document.getElementById("line1").innerHTML = `Your choice: ${choice}`
	let index = Math.floor(Math.random() * choices.length);
	document.getElementById("line2").innerHTML = `Computer choice: ${choices[index]}`
	switch (choices[index]==choice) {
		case true:
			document.getElementById("line3").innerHTML = "It's a draw"
			break;
		case false:
			if ((choices[index]=="rock" && choice=="paper") || (choices[index]=="paper" && choice=="scissors") || (choices[index]=="scissors" && choice=="rock")) {
				document.getElementById("line3").innerHTML = "You won"
				break;	
				
			} else {
				document.getElementById("line3").innerHTML = "Computer won"
				break;	
			}
	}
}



