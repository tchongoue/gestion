<?php 
		/* join.php */
 
		//include db configuration file
		include_once("connection.php");
        
$result=$pdo ->query("SELECT distinct id_tb_stock_securite as'num', libelle ,qte_stock_securite as 'quantite'  from tb_stock_produits  ,tb_stock_securite where  tb_stock_produits.id_tb_stock_produits = tb_stock_securite.id_tb_stock_produits and tb_stock_produits.qte_stock <= tb_stock_securite . qte_stock_securite order by id_tb_stock_securite desc limit 100");
?>

                                          
<?php
while($stock_securite_atteint=$result->fetch(PDO:: FETCH_OBJ))
{?>



                                                <tr >
                                                  <th scope="row"><?php echo $stock_securite_atteint->num?></th>
                                                  <td> <?php echo $stock_securite_atteint->libelle ?></td>
                                                  <td><?php echo $stock_securite_atteint->quantite  ?></td>
                                                  
                                                </tr>
                                               
                                              

<?php } 
		?>

