let isThereImage = false;
function generate(){
let qrCodeLink = document.getElementById('TextInput').value;
let isThereQrUrl = false;
qrCodeLink=="" ? isThereQrUrl=false : isThereQrUrl=true;
    if(isThereQrUrl){
        var qrCode = new QRCode(document.getElementById("qr-code"), {
            text: qrCodeLink,
            width: 180,
            height: 180,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
        isThereImage = true;
        let elem = document.getElementById("qr-code");
        let canvas = elem.getElementsByTagName("canvas");
        let img_src = canvas[0].toDataURL();
        console.log(img_src);
        document.getElementById("download-anchor").href=img_src;
    }
    else{
        document.getElementById("qr-code").innerHTML="Qr code requsted link is empty, press generate another code and don't forget to add url"
    }
}

function resetGenerator(){
    document.getElementById('TextInput').value="";
    document.getElementById("qr-code").innerHTML="";
    isThereImage=false;
}