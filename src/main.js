const header = document.createElement("h1");
const img = document.createElement("img");

header.innerText = "Tito's Website";
img.src = "../tito.jpg";
img.height = 500;
img.width = 350;

document.body.appendChild(header).setAttribute("style", "text-align:center");
document.body.appendChild(img).setAttribute("alt", "portrait of tito");
