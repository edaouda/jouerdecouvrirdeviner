<?php
function getInfoImages() {
	// TODO: optmisation fclose($handle); répéeter 2 fois
	$handle = fopen("./data/infoImage.csv", "r");
	
	if ($handle === FALSE) {
		return null;
		fclose($handle);
	}
	
	$row = 0;
	$champs = array();
	$data = fgetcsv($handle, 1000, ",");
	$num = count($data);
    for ($indice_champ=0; $indice_champ < $num; $indice_champ++) {
		$champs[$indice_champ] = $data[$indice_champ];
    }
    $infoImages = array();
	while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);
        for ($indice_champ=0; $indice_champ < $num; $indice_champ++) {
			$infoImages[$row][$champs[$indice_champ]] = $data[$indice_champ];
        }
		++$row;
    }
	return $infoImages;	
	fclose($handle);
}

function runJsScript($jsCode="") {
	echo "<script>" . $jsCode . "</script>";
}

?>