// Def element
const infoImagePopup = document.getElementById("infoImage-popup");
const infoImageEl = document.getElementById("infoImage");
const numImageEl = document.getElementById("numImage");
const searchTerm = document.getElementById("search-term");
const searchBtn = document.getElementById("search");
const cases = document.querySelectorAll(".case");
var indexCurrentInfoImage = localStorage.getItem("indexCurrentInfoImage");
if (indexCurrentInfoImage === null)
	indexCurrentInfoImage = 0;
else
	indexCurrentInfoImage = parseInt(indexCurrentInfoImage);
majInfoImage();

// Add events
// ajoute l'evenement click aux cases
for (const element_case of cases) {
    element_case.addEventListener('click', function(e) {
        e.target.classList.remove("cache");
    });
}

const detailsEl = document.getElementById("details");
detailsEl.addEventListener("click", () => {
	showPopup();
});

const popupCloseBtn = document.getElementById("close-popup");
popupCloseBtn.addEventListener("click", () => {
    infoImagePopup.classList.add("hidden");
});

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

const resetGrilleBtn = document.getElementById("resetGrille");
resetGrilleBtn.addEventListener("click", () => {
    resetGrille();
});

// Def functions
function majInfoImage() {
	numImageEl.innerHTML = indexCurrentInfoImage+1;
	const nomFichier = infoImages[indexCurrentInfoImage].nomFichier;
	const grilleEl = document.querySelector(".grille");
	grilleEl.style.backgroundImage = "url('./data/img/" + nomFichier + "')";
	resetGrille();
}

function setIndexCurrentInfoImageLS() {
    localStorage.setItem("indexCurrentInfoImage", indexCurrentInfoImage);
}

function showPopup() {
    // clean infos of current popup
    infoImageEl.innerHTML = "";
	
    // update the infoImage
    const new_infoImageEl = document.createElement("div");
	let infoImage = infoImages[indexCurrentInfoImage];
	// format data
	for (let key in infoImage) {
		if (infoImage.hasOwnProperty(key) && infoImage[key] !== "")
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
	
    new_infoImageEl.innerHTML = `
        <h1>${infoImage.theme.toUpperCase()}</h1>
        <img
            src="./data/img/${infoImage.nomFichier}"
            alt="${infoImage.theme}"
        />
        <p>${infoImage.auteur} <i>${infoImage.titre}</i> Image numérique. ${infoImage.site} ${infoImage.datePublication} Web. ${infoImage.dateAcces}</p>
        <h3>${infoImage.resume}</h3>
		<h4>${indexCurrentInfoImage+1}</h4>
    `;
	infoImageEl.appendChild(new_infoImageEl);
    infoImagePopup.classList.remove("hidden");
}

function resetGrille() {
	for (const caseEl of cases) {
		caseEl.classList.add("cache");
	}  
}