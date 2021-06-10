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
        
$result=$pdo ->query("SELECT distinct id_tb_stock_securite,libelle,tb_stock_produits.qte_stock  from tb_stock_produits  ,tb_stock_securite where  tb_stock_produits.id_tb_stock_produits = tb_stock_securite.id_tb_stock_produits and tb_stock_produits.qte_stock <= tb_stock_securite . qte_stock_securite and tb_stock_securite.id_tb_utilisateur =$id_administrateur order by id_tb_stock_securite desc limit 100");
?>

                                          
<?php
while($stock_securite=$result->fetch(PDO:: FETCH_OBJ))
{?>



                                                <tr  >
                                                  <th scope="row"><?php echo $stock_securite->id_tb_stock_securite?></th>
                                                  <td> <?php echo $stock_securite->libelle ?></td>
                                                  <td><?php echo $stock_securite->qte_stock  ?></td>
                                                  
                                                </tr>
                                               
                                              

<?php } 
		?>

