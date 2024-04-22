//your JS code here. If required.
let inputField = document.querySelector("#fname")

inputField.addEventListener("blur", () =>{
	let val = inputField.value;
	val = val.toUpperCase();
	inputField.value = val;
})