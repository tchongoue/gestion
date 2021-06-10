<?php 
		/* join.php */
      
		//include db configuration file
		include_once("connection.php");
   
				if($_POST)
				{
				/* VALUES */
				$libelle=htmlspecialchars($_POST['libelle']);
                $Montant=htmlspecialchars($_POST['Montant']);
				$id_administrateur=htmlspecialchars($_POST['id_administrateur']);
			

$data = [
    'libelle' => $libelle,
    'Montant' => $Montant,
	'id_administrateur' => $id_administrateur,
     
];
$sql = "INSERT INTO tb_depense_du_mois (libelle,montant,date_depense,id_tb_utilisateur) VALUES (:libelle,:Montant,current_date,:id_administrateur)";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>