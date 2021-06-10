<?php 
		/* join.php */
      
		//include db configuration file
		include_once("connection.php");
   
				if($_POST)
				{
				/* VALUES */
				$nom=htmlspecialchars($_POST['nom']);
                $Localisation=htmlspecialchars($_POST['Localisation']);
                $Contact=htmlspecialchars($_POST['Contact']);
                $CNI=htmlspecialchars($_POST['CNI']);
				$id_administrateur=htmlspecialchars($_POST['id_administrateur']);
			

$data = [
    'nom' => $nom,
    'Localisation' => $Localisation,
     'Contact' => $Contact,
     'CNI'=>$CNI,
	 'id_administrateur'=>$id_administrateur,
];
$sql = "INSERT INTO tb_client (nom,localisation,contact,cni,id_tb_utilisateur) VALUES (:nom,:Localisation,:Contact,:CNI,:id_administrateur)";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>