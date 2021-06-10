<?php 
		/* join.php */
 
		//include db configuration file
	
        
        include_once("connection.php");
        if(isset($_GET['date_debut'] ))
        {
            
            $date_debut=$_GET['date_debut'];
            $date_fin=$_GET['date_fin'];
         
        }else{
            $date_debut=0;
            $date_fin=0;
        }



$result=$pdo ->query("SELECT qte_stock  from tb_stock_produits where id_tb_stock_produits=$id_tb_stock_produits limit 1");
?>

                                               
<?php
$quantite=$result->fetchColumn();

?>
<?php echo $quantite ?>
