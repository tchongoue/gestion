<?php 
		/* join.php */
 
		//include db configuration file
		include("connection.php");
  
 
				if($_POST)
				{
				/* VALUES */
				$libelle=$_POST['libelle'];
                $Montant=$_POST['Montant'];
               
                $id=$_POST['id'];
 
			

$data = [
    'libelle' => $libelle,
    'Montant' => $Montant,
   
     'id'=> $id,
];
$sql = "UPDATE tb_depense_du_mois SET libelle=:libelle,	montant=:Montant,id_tb_utilisateur=0 WHERE id_tb_depense_du_mois=:id";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>