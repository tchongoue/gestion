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
        
$result=$pdo ->query("SELECT*FROM tb_stock_produits WHERE id_tb_utilisateur =$id_administrateur ");
?>

                                          
<?php
while($stock_produits=$result->fetch(PDO:: FETCH_OBJ))
{?>



                                                <tr   onclick="afficher('<?php echo $stock_produits->libelle ?>','<?php echo $stock_produits->qte_stock  ?>','<?php echo $stock_produits->cout_achat_unitaire   ?>','<?php echo $stock_produits->cout_vente_unitaire ?>','<?php echo $stock_produits->id_tb_stock_produits ?>')">
                                                  <th scope="row"><?php echo $stock_produits->id_tb_stock_produits ?></th>
                                                  <td> <?php echo $stock_produits->libelle ?></td>
                                                  <td><?php echo $stock_produits->qte_stock  ?></td>
                                                  <td><?php echo $stock_produits->cout_achat_unitaire   ?></td>
												                           <td><?php echo $stock_produits->cout_vente_unitaire ?></td>
                                                                       
                                                </tr>
                                               
                                              

<?php } 
		?>



<















