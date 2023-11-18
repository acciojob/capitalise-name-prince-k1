//your JS code here. If required.
const input = document.getElementById('fname');
input.addEventListener('blur', () => {
	let str = input.value.toUpperCase();
	input.value = str;
})