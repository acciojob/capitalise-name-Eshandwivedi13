//your JS code here. If required.
let inputField = documet.querySelector("#fname")

inputField.addEventListener("blur", () =>{
	let val = inputField.value;
	val = val.toUpperCase();
	inputField.value = val;
})