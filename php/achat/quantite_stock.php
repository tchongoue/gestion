<?php 
		/* join.php */
 
		//include db configuration file
		include_once("connection.php");
        

        if(isset($_GET['id_tb_stock_produits']))
        {
            $id_tb_stock_produits=$_GET['id_tb_stock_produits'];
            $id_administrateur=$_GET['id_administrateur'];
        }else{
            $id_tb_stock_produits=0;
        }



$result=$pdo ->query("SELECT qte_stock  from tb_stock_produits where id_tb_stock_produits=$id_tb_stock_produits and id_tb_utilisateur =$id_administrateur  limit 1");
?>

                                               
<?php
$quantite=$result->fetchColumn();

?>
<?php echo $quantite ?>
