<!DOCTYPE html>
<html lang="fr-FR">
<head>
    <meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Jouer Decouvrir Deviner-Layout pdf</title>
    <link rel="stylesheet" href="./css/style_LayoutPdf.css" />
	<script src="./script/jquery-3.6.0.slim.min.js" defer></script>
	<script src="./script/script_LayoutPdf.js" defer></script>
	<?php
		require('./script/function.php');
		
		$infoImages = getInfoImages();
		$js_array_infoImages = json_encode($infoImages);
		runJsScript("const infoImages = " . $js_array_infoImages . ";\n");
	?>
<body>
    <header>
		<h4 id="nameProject">JOUER DECOUVRIR DEVINER<h4>
		<div class="options">
			<div class="btnPasserEtape">
				<button class="precedent"></button>
				<button class="suivant"></button>
			</div>
		</div>
		<h4 id="numImage"></h4>
	</header>
	<main id="main"></main>
	<footer>
		<h4 id="date">23 SEPTEMBRE 2021, CAMPUS DAY</h4>
		<h4 id="organisation">Association REMB REMA & Université d'Angers</h4>
	</footer>
</body>
</html>