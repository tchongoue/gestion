<?php 
		/* join.php */
      
		//include db configuration file
		include("connection.php");
   
				if($_POST)
				{
				/* VALUES */
				$benefice=htmlspecialchars($_POST['benefice']);
                $date_reglement=htmlspecialchars($_POST['date_reglement']);
                $id_client=htmlspecialchars($_POST['id_client']);
                $panier_actuel=htmlspecialchars($_POST['panier_actuel']);
				$id_administrateur=htmlspecialchars($_POST['id_administrateur']);
			

$data = [
    'benefice' => $benefice,
    'date_reglement' => $date_reglement,
     'id_client' => $id_client,
     'panier_actuel' => $panier_actuel,
	 'id_administrateur' => $id_administrateur,
];
$sql = "INSERT INTO tb_vente_produits_credit (date_vente,date_reglement_escompe,date_reglement_effectuer,montant_total,statu,id_tb_client,id_tb_utilisateur,benefice_total) VALUES (current_date,:date_reglement,current_date,:panier_actuel,'impayer',:id_client,:id_administrateur,:benefice)";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>