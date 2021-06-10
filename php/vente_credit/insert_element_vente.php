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
				$stock_actuel=htmlspecialchars($_POST['stock_actuel']);
 
                $id_vente_cedit=htmlspecialchars($_POST['id_vente_cedit']);

$data = [
    'id_tb_stock_produits' => $id_tb_stock_produits,
    'Quantite' => $Quantite,
     'achat_unitaire' => $achat_unitaire,
     'id_vente_cedit' => $id_vente_cedit
];
$data1 = [
    'id_tb_stock_produits' => $id_tb_stock_produits,
    'Quantite' => $Quantite,
    
	 'stock_actuel'=> $stock_actuel
];



$sql1 = "UPDATE tb_stock_produits set qte_stock =:stock_actuel-:Quantite where id_tb_stock_produits =:id_tb_stock_produits";
$stmt1= $pdo->prepare($sql1);
$stmt1->execute($data1);
 
	

$sql = "INSERT INTO tb_element_vente_produits_credit (id_tb_vente_produits_credit,id_tb_stock_produits,qte_vendu,montant,date_ajout) VALUES (:id_vente_cedit,:id_tb_stock_produits,:Quantite,:achat_unitaire,current_date)";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>