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
        
$result=$pdo ->query("SELECT distinct id_tb_stock_securite,libelle,qte_stock_securite  from tb_stock_produits  ,tb_stock_securite where  tb_stock_produits.id_tb_stock_produits = tb_stock_securite.id_tb_stock_produits and tb_stock_securite.id_tb_utilisateur =$id_administrateur order by id_tb_stock_securite desc limit 100");
?>

                                          
<?php
while($stock_securite=$result->fetch(PDO:: FETCH_OBJ))
{?>



                                                <tr  onclick="afficher_stock_securite('<?php echo $stock_securite->id_tb_stock_securite?>','<?php echo $stock_securite->libelle ?>','<?php echo $stock_securite->qte_stock_securite  ?>',)">
                                                  <th scope="row"><?php echo $stock_securite->id_tb_stock_securite?></th>
                                                  <td> <?php echo $stock_securite->libelle ?></td>
                                                  <td><?php echo $stock_securite->qte_stock_securite  ?></td>
                                                  
                                                </tr>
                                               
                                              

<?php } 
		?>

