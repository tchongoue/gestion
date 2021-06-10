<?php 
		/* join.php */
        echo 'alert("ok")';
		//include db configuration file
		include("connection.php");
        echo 'alert("ok")';
 
				if($_POST)
				{
				/* VALUES */
				$libelle=htmlspecialchars($_POST['libelle']);
                $qte_stock=htmlspecialchars($_POST['qte_stock']);
                $achat_unitaire=htmlspecialchars($_POST['achat_unitaire']);
                $vente_unitaire=htmlspecialchars($_POST['vente_unitaire']);
				$id_administrateur=htmlspecialchars($_POST['id_administrateur']);
			

$data = [
     'libelle'=>$libelle,
     'qte_stock'=>$qte_stock,
	 'achat_unitaire'=> $achat_unitaire,
	 'vente_unitaire'=>$vente_unitaire,
	 'id_administrateur'=>$id_administrateur,
];
$sql = "INSERT INTO tb_stock_produits (libelle,qte_stock,cout_achat_unitaire,cout_vente_unitaire,id_tb_utilisateur) VALUES (:libelle,:qte_stock,:achat_unitaire,:vente_unitaire,:id_administrateur)";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>