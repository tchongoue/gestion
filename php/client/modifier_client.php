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
                $CNI=$_POST['CNI'];
                $id=$_POST['id'];
 
			

$data = [
    'nom' => $nom,
    'Localisation' => $Localisation,
     'Contact' => $Contact,
     'CNI'=> $CNI,
     'id'=> $id,
];
$sql = "UPDATE tb_client SET nom=:nom,localisation=:Localisation,contact=:Contact,cni=:CNI,id_tb_utilisateur=0 WHERE id_tb_client=:id";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>