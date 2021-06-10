<?php 
		/* join.php */
 
		//include db configuration file
		include_once("connection.php");
        if(isset($_GET['id_tb_vente_produits_credit']))
        {
            $id_tb_vente_produits_credit=$_GET['id_tb_vente_produits_credit'];
        }else{
            $id_tb_vente_produits_credit=0;
        }
        
$result=$pdo ->query("UPDATE tb_vente_produits_credit set statu  ='payer',date_reglement_effectuer=current_date where id_tb_vente_produits_credit = $id_tb_vente_produits_credit");
?>

       