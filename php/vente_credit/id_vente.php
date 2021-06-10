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



$result=$pdo ->query("SELECT max(id_tb_vente_produits_credit)  from tb_vente_produits_credit WHERE id_tb_utilisateur=$id_administrateur");
?>

                                               
<?php
$ID=$result->fetchColumn();

?>
<?php echo $ID?>
