var countdown = document.getElementById('countdown');
var count = 10;

(function timer() {
	if (count > 0) {
		countdown.innerHTML = count;
		count--;
		setTimeout(timer, 1000);
	} else {
		countdown.innerHTML = "Happy Independence Day!";
	}
})   ();
