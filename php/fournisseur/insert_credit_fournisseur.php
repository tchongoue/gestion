<?php 
		/* join.php */
 
		//include db configuration file
		include("connection.php");
      
 
				if($_POST)
				{
				/* VALUES */
				$id_tb_fournisseur=htmlspecialchars($_POST['id_tb_fournisseur']);
                $montant=htmlspecialchars($_POST['montant']);
                $date_credit=htmlspecialchars($_POST['date_credit']);
				$id_administrateur=htmlspecialchars($_POST['id_administrateur']);
 
			

$data = [
    'id_tb_fournisseur' => $id_tb_fournisseur,
    'montant' => $montant,
     'date_credit' => $date_credit,
	 'id_administrateur' => $id_administrateur,
];
$sql = "INSERT INTO tb_credit_fournisseur (id_tb_fournisseur, montant,date_credit,statu,id_tb_utilisateur) VALUES (:id_tb_fournisseur,:montant,:date_credit,'impayer',:id_administrateur)";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>