function scrollTo(thisSection) {
	document.getElementById('thisSection').scrollIntoView({behavior: smooth});
}

function getInfo(inputId, inputField) {
	let userInput = document.getElementById('inputId').value;
	document.getElementById('inputField').innerHTML = userInput;
}