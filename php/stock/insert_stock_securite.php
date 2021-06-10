<?php 
		/* join.php */
        echo 'alert("ok")';
		//include db configuration file
		include("connection.php");
        echo 'alert("ok")';
 
				if($_POST)
				{
				/* VALUES */
				$id_tb_stock_produits=htmlspecialchars($_POST['id_tb_stock_produits']);
                $Quantite=htmlspecialchars($_POST['Quantite']);
				$id_administrateur=htmlspecialchars($_POST['id_administrateur']);  
 
			

$data = [
     'id_tb_stock_produits'=>$id_tb_stock_produits,
     'Quantite'=>$Quantite,
	 'id_administrateur'=>$id_administrateur
	];
$sql = "INSERT INTO tb_stock_securite (id_tb_stock_produits,qte_stock_securite,id_tb_utilisateur) VALUES (:id_tb_stock_produits,:Quantite,:id_administrateur)";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>