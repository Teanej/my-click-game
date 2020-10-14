var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var dialog = document.getElementById('dialog');
var keyl = document.getElementById('keyl');
var keys = document.getElementById('keys');
document.addEventListener("keydown", event => {
	if (event.key == "l") {
		var countup = document.getElementById('number2').innerHTML;
		countup++;
		document.getElementById('number2').innerHTML = countup;
		if (countup == 100) {
			dialog.value = "Player2 won";
			player2.style.display = "none";
			player1.style.display = "none";
			keyl.style.display = "none";
			keys.style.display = "none";
		}
	}
	if (event.key == "s") {
		var countup1 = document.getElementById('number1').innerHTML;
		countup1++;
		document.getElementById('number1').innerHTML = countup1;
		if (countup1 == 100) {
			dialog.value = "Player1 won";
			player2.style.display = "none";
			player1.style.display = "none";
			keyl.style.display = "none";
			keys.style.display = "none";
		}
	}
});