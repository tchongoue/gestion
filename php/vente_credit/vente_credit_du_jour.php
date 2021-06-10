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



$result=$pdo ->query("SELECT   libelle ,qte_vendu ,montant  from tb_stock_produits  , tb_element_vente_produits_credit where  tb_stock_produits.id_tb_stock_produits = tb_element_vente_produits_credit.id_tb_stock_produits and date_ajout= current_date and tb_stock_produits.id_tb_utilisateur=$id_administrateur");
?>

                                          
<?php
while($vente_du_jour=$result->fetch(PDO:: FETCH_OBJ))
{?>



                                                <tr >
                                                  <th scope="row"><?php echo $vente_du_jour->libelle ?></th>
                                                  <td> <?php echo $vente_du_jour->qte_vendu ?></td>
                                                  
                                                  <td><?php echo $vente_du_jour->montant   ?></td>
												                          
                                                                       
                                                </tr>
                                               
                                              

<?php } 
		?>



<















