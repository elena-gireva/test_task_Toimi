const radioBtn = document.querySelector("#approval");
const send_letter = document.querySelector(".send_letter");

radioBtn.addEventListener('click', function() {
    let checked = false;
		radioBtn.addEventListener("click", event => {
            checked = radioBtn.checked;
        });
		radioBtn.addEventListener("click", event => {
			radioBtn.checked = !checked;
		});
});

send_letter.addEventListener('click', function() {

	gsap.to(".letter", {x:650, ease:"sine", y:-850, duration:8, opacity:0, width: 0, height: 0})
	send_letter.classList.add('clicked');
	console.log('addCicked');
});


