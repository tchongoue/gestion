<?php 
		/* join.php */
 
		//include db configuration file
		include("connection.php");
       
 
				if($_POST)
				{
				/* VALUES */
				
                $id_tb_stock_produits=$_POST['id_tb_stock_produits'];
                $Quantite=$_POST['Quantite'];
 
			

$data = [
   
     'id_tb_stock_produits'=> $id_tb_stock_produits,
     
];
$data1 = [
    
    'Quantite' => $Quantite,
    'id_tb_stock_produits'=> $id_tb_stock_produits,
];

 
$result=$pdo ->query("SELECT qte_stock  from tb_stock_produits where id_tb_stock_produits = $id_tb_stock_produits limit 1");
$quantite=$result->fetchColumn();
$sql1 = "UPDATE tb_stock_produits set qte_stock =$quantite+:Quantite  where id_tb_stock_produits =:id_tb_stock_produits";
$stmt1= $pdo->prepare($sql1);
$stmt1->execute($data1);
 






$sql ="DELETE from  tb_vente_produits_comptant where id_tb_stock_produits =:id_tb_stock_produits order by  id_tb_vente_produits_comptant  desc limit 1 ";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>