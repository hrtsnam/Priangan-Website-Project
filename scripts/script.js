function scrollTo(thisSection) {
	let this = document.getElementById('thisSection');
	this.scrollIntoView({behavior: smooth});
}

function getInfo(inputId, inputField) {
	let userInput = document.getElementById('inputId').value;
	document.getElementById('inputField').innerHTML = userInput;
}