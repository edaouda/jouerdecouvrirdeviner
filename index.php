<!DOCTYPE html>
<html lang="fr-FR">
<head>
    <meta charset="UTF-8" />
    <title>Jouer Decouvrir Deviner</title>
    <link rel="stylesheet" href="./css/style.css" />
	<script src="./script/script.js" defer></script>
	<?php
		require('./script/function.php');
		
		$infoImages = getInfoImages();
		$js_array_infoImages = json_encode($infoImages);
		runJsScript("const infoImages = " . $js_array_infoImages . ";\n");
	?>
<body>
    <div class="main_layout">
		<header>
			<div id="numImage"></div>
			<div class="search">
				<input type="text" id="search-term" />
				<button id="search"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
			</div>
		</header>
        <div class="grille" >
            <div class="case cache"></div>
            <div class="case cache"></div>
            <div class="case cache"></div>
            <div class="case cache"></div>
            <div class="case cache"></div>
            <div class="case cache"></div>
            <div class="case cache"></div>
            <div class="case cache"></div>
            <div class="case cache"></div>
        </div>
        <div class="options">
			<div class="btnPasserEtape">
				<button class="precedent"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg></button>
				<button class="suivant"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/></svg></button>
			</div>
			<div class="btnUutilitaire">
				<button id="resetGrille"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg></button>
				<button id="details"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></button>
			</div>
		</div>
    </div>
	<div class="popup-container hidden" id="infoImage-popup">
        <div class="popup">
            <button id="close-popup" class="close-popup">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
            </button>
            <div class="infoImage" id="infoImage"></div>
        </div>
    </div>
</body>
</html>