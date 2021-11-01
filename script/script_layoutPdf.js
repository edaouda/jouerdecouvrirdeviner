// Def variables
const infoImageEl = document.getElementById("infoImage");
const numImageEl = document.getElementById("numImage");
const mainEl = document.getElementById("main");
var indexCurrentInfoImage = localStorage.getItem("indexCurrentInfoImage");
if (indexCurrentInfoImage === null)
	indexCurrentInfoImage = 0;
else
	indexCurrentInfoImage = parseInt(indexCurrentInfoImage);
majInfoImage();

// Add events
const precedentEl = document.querySelector(".precedent");
precedentEl.addEventListener("click", () => {
    if (indexCurrentInfoImage == 0) indexCurrentInfoImage = infoImages.length-1;
	else indexCurrentInfoImage--;
	majInfoImage();
	setIndexCurrentInfoImageLS();
});
const suivantEl = document.querySelector(".suivant");
suivantEl.addEventListener("click", () => {
    if (indexCurrentInfoImage+1 == infoImages.length) indexCurrentInfoImage = 0;
	else indexCurrentInfoImage++;
	majInfoImage();
	setIndexCurrentInfoImageLS();
});

// Def functions
function setIndexCurrentInfoImageLS() {
    localStorage.setItem("indexCurrentInfoImage", indexCurrentInfoImage);
}

function majInfoImage() {
	// update the main and number of image
	numImageEl.innerHTML = "Image n°" + (1+indexCurrentInfoImage);
	const nomFichier = infoImages[indexCurrentInfoImage].nomFichier;
	let infoImage = {...infoImages[indexCurrentInfoImage]};
	// format data
	for (let key in infoImage) {
		if (infoImage.hasOwnProperty(key) && infoImage[key] !== "" && key != "nomFichier")
			infoImage[key] = infoImage[key][0].toUpperCase() + infoImage[key].slice(1, infoImage[key].length);
	}

	if (infoImage.titre === "")
		infoImage.titre = infoImage.theme + ".";
	else
		infoImage.titre += ".";
	if (infoImage.auteur !== "") infoImage.auteur += ".";
	if (infoImage.dateAcces !== "") infoImage.dateAcces += ".";
	if (infoImage.site !== "") infoImage.site += "."; 
	if (infoImage.datePublication !== "") infoImage.datePublication += ".";

	mainEl.innerHTML =  `
		<div class="main_left">
			<h1 id="theme">${infoImage.theme.toUpperCase()}</h1>
			<h4 id="resume">${infoImage.resume}</h4>
			<h5>
				<span id="textSourceImage">SOURCE IMAGE:</span>
				<span id="sourceImage">${infoImage.auteur} <i>${infoImage.titre}</i> Image numérique. ${infoImage.site} ${infoImage.datePublication} Web. ${infoImage.dateAcces}</span>
			</h5>
		</div>
		<div class="main_right">
			<img id="image" src="./data/img/${infoImage.nomFichier}" alt="${infoImage.theme}" />
		</div>
    `;
	
	// adapt height of image with jquery
	let imageEl = $("#image");
    let imageEl_widht = imageEl.prop("naturalWidth");
    let imageEl_height = imageEl.prop("naturalHeight");
	if (imageEl_height > (imageEl_widht * 1.5))
		document.getElementById("image").style.height = (imageEl[0].height+140) + "px";
}