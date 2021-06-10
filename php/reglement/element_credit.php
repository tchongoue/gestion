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
        
$result=$pdo ->query("SELECT libelle,qte_vendu ,montant from tb_element_vente_produits_credit,tb_stock_produits where tb_element_vente_produits_credit.id_tb_stock_produits =tb_stock_produits.id_tb_stock_produits and id_tb_vente_produits_credit=$id_tb_vente_produits_credit limit 1000 ");
?>

                                          
<?php
while($credit=$result->fetch(PDO:: FETCH_OBJ))
{?>



                                                <tr>
                                                  <th scope="row"><?php echo $credit->libelle?></th>
                                                  <td> <?php echo $credit->qte_vendu ?></td>
                                                  
                                                  <td><?php echo $credit->montant   ?></td>
                                                  
                                                </tr>
                                               
<?php } 
		?>