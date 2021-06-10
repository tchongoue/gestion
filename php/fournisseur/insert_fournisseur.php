<?php 
		/* join.php */
 
		//include db configuration file
		include("connection.php");
      
 
				if($_POST)
				{
				/* VALUES */
				$nom=htmlspecialchars($_POST['nom']);
                $Localisation=htmlspecialchars($_POST['Localisation']);
                $Contact=htmlspecialchars($_POST['Contact']);
				
				$id_administrateur=htmlspecialchars($_POST['id_administrateur']);
			

$data = [
    'nom' => $nom,
    'Localisation' => $Localisation,
     'Contact' => $Contact,
	 'id_administrateur' => $id_administrateur,
];
$sql = "INSERT INTO tb_fournisseur (nom, localisation,contact,id_tb_utilisateur) VALUES (:nom,:Localisation,:Contact,:id_administrateur)";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>