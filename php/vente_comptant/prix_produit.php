<?php 
		/* join.php */
 
		//include db configuration file
        include_once("connection.php");
        

        if(isset($_GET['id_tb_stock_produits']))
        {
            $id_tb_stock_produits=$_GET['id_tb_stock_produits'];
        }else{
            $id_tb_stock_produits=0;
        }


  
$result=$pdo ->query("SELECT cout_vente_unitaire  from tb_stock_produits where id_tb_stock_produits = $id_tb_stock_produits limit 1");
?>

                                               
<?php
$montant_produit=$result->fetchColumn();

?>
<label style="color: #742c2c;"><?php echo $montant_produit ?>fcfa</label>

                                               
                                              
