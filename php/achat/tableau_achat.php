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
        
        
$result=$pdo ->query("SELECT  distinct id_tb_achat_produits,libelle ,qte_achete,tb_achat_produits.cout_achat_unitaire as 'achat',date_achat,tb_achat_produits.id_tb_utilisateur from tb_stock_produits  ,tb_achat_produits where  tb_stock_produits.id_tb_stock_produits = tb_achat_produits.id_tb_stock_produits and tb_achat_produits.id_tb_utilisateur =$id_administrateur order by id_tb_achat_produits desc limit 30001");
?>

                                          
<?php
while($achat_produits=$result->fetch(PDO:: FETCH_OBJ))
{?>



                                                <tr onclick="afficher('<?php echo $achat_produits->id_tb_achat_produits?>',' <?php echo $achat_produits->libelle ?>','<?php echo $achat_produits->qte_achete  ?>','<?php echo $achat_produits->achat?>')">
                                                  <th scope="row"><?php echo $achat_produits->id_tb_achat_produits?></th>
                                                  <td> <?php echo $achat_produits->libelle ?></td>
                                                  <td><?php echo $achat_produits->qte_achete  ?></td>
                                                  <td><?php echo $achat_produits->achat?></td>
                                                  <td><?php echo $achat_produits->date_achat?></td>
												  
                                                </tr>
                                               
                                              

<?php } 
		?>

