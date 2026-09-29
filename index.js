// alert("salut la compagnie");
// let maSuperVariable = 10;
// let maSuperVariable2 = "salut la compagnie ";
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>;
let qrcode = new QRCode(document.getElementById("qrcode"));

function makeQR() {
  let text = document.getElementById("text").value;
  if (!text) {
    alert("Veuillez entrer un texte pour générer le QR Code.");
    return;
  }
  document.getElementById("qrcode").innerHTML = ""; // supprimer le QR Code précédent
  qrcode.makeCode(text);
}
