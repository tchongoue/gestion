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
        
$result=$pdo ->query("SELECT  tb_stock_produits.id_tb_stock_produits, libelle ,sum(qte_vendu) as quantite   from tb_vente_produits_comptant,tb_stock_produits where  tb_stock_produits.id_tb_stock_produits=tb_vente_produits_comptant.id_tb_stock_produits and tb_stock_produits.id_tb_utilisateur =$id_administrateur  group by libelle order by quantite desc limit 10");
?>

                                          
<?php
while($produit_plus_vendu=$result->fetch(PDO:: FETCH_OBJ))
{?>



                                                <tr  >
                                                  <th scope="row"><?php echo $produit_plus_vendu->id_tb_stock_produits?></th>
                                                  <td> <?php echo $produit_plus_vendu->libelle ?></td>
                                                  <td><?php echo $produit_plus_vendu->quantite  ?></td>
                                                  
                                                </tr>
                                               
                                              

<?php } 
		?>

