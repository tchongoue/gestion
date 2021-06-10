<?php 
		/* join.php */
      
		//include db configuration file
		include_once("connection.php");
   
				if($_POST)
				{
				/* VALUES */
				$id_tb_stock_produits=htmlspecialchars($_POST['id_tb_stock_produits']);
                $Quantite=htmlspecialchars($_POST['Quantite']);
                $achat_unitaire=htmlspecialchars($_POST['achat_unitaire']);
				$ancien_stock=htmlspecialchars($_POST['ancien_stock']);
				$id_administrateur=htmlspecialchars($_POST['id_administrateur']);
			

$data = [
    'id_tb_stock_produits' => $id_tb_stock_produits,
    'Quantite' => $Quantite,
     'achat_unitaire' => $achat_unitaire,
	 'id_administrateur' => $id_administrateur,
];
$data1 = [
    'id_tb_stock_produits' => $id_tb_stock_produits,
    'Quantite' => $Quantite,
     'achat_unitaire' => $achat_unitaire,
	 'ancien_stock'=> $ancien_stock,
	 'id_administrateur' => $id_administrateur,
];



$sql1 = "UPDATE tb_stock_produits set qte_stock = :ancien_stock+:Quantite ,cout_achat_unitaire =:achat_unitaire  where id_tb_stock_produits =:id_tb_stock_produits and id_tb_utilisateur =:id_administrateur";
$stmt1= $pdo->prepare($sql1);
$stmt1->execute($data1);
 
	

$sql = "INSERT INTO tb_achat_produits (id_tb_stock_produits,qte_achete,cout_achat_unitaire,date_achat,id_tb_utilisateur) VALUES (:id_tb_stock_produits,:Quantite,:achat_unitaire,current_date,:id_administrateur)";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>