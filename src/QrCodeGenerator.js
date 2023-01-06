//Qr code generating an download button preparation
function generate() {
	//Gets div that qr code will be printed
	let qrCodeLink = document.getElementById('TextInput').value;
	//Parameter of whether url is taken from user or not
	let isThereQrUrl = false;
	qrCodeLink == "" ? isThereQrUrl = false : isThereQrUrl = true;
	if (isThereQrUrl) {
		//Creates and prints out into determined div
		var qrCode = new QRCode(document.getElementById("qr-code"), {
			text: qrCodeLink,
			width: 180,
			height: 180,
			colorDark: "#000000",
			colorLight: "#ffffff",
			correctLevel: QRCode.CorrectLevel.H
		});
		//It gets qr code canvas and puts url into embeded anchor to be able to download qr code
		let elem = document.getElementById("qr-code");
		let canvas = elem.getElementsByTagName("canvas");
		let img_src = canvas[0].toDataURL();
		console.log(img_src);
		document.getElementById("download-anchor").href = img_src;
	} else {
		//Message if user does not enter url for qr code
		document.getElementById("qr-code").innerHTML = "Qr code requsted link is empty, press generate another code and don't forget to add url"
	}
}

// Generate another qr code button - Resets every parameter for next round
function resetGenerator() {
	document.getElementById('TextInput').value = "";
	document.getElementById("qr-code").innerHTML = "";
	isThereImage = false;
}