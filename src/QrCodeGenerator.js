function generate(){
let qrCodeLink = document.getElementById('TextInput').value;
let isThereQrUrl = false;
qrCodeLink=="" ? isThereQrUrl=false : isThereQrUrl=true;
    if(isThereQrUrl){
        var qrcode = new QRCode(document.getElementById("qr-code"), {
            text: qrCodeLink,
            width: 180,
            height: 180,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
    else{
        document.getElementById("qr-code").innerHTML="Qr code requsted link is empty, press generate another code and don't forget to add url"
    }
}
