<?php 
		/* join.php */
 
		//include db configuration file
		include_once("connection.php");
        

		if(isset($_GET['id_administrateur']))
		{
			$id_administrateur=$_GET['id_administrateur'];
		}else{
			$id_administrateur=0;
		}


$result=$pdo ->query("SELECT   sum(montant_total) from tb_vente_produits_credit where  date_vente  = current_date and id_tb_utilisateur=$id_administrateur");
?>

                                               
<?php
$sum=$result->fetchColumn();

?>
<?php echo $sum ?>
