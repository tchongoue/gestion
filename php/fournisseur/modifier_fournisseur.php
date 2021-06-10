<?php 
		/* join.php */
 
		//include db configuration file
		include("connection.php");
  
 
				if($_POST)
				{
				/* VALUES */
				$nom=$_POST['nom'];
                $Localisation=$_POST['Localisation'];
                $Contact=$_POST['Contact'];
					
                $id=$_POST['id'];
 
			

$data = [
    'nom' => $nom,
    'Localisation' => $Localisation,
     'Contact' => $Contact,
     'id'=> $id,
];
$sql = "UPDATE tb_fournisseur SET nom=:nom,localisation=:Localisation,contact=:Contact WHERE id_tb_fournisseur=:id";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>