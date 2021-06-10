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

        
$result=$pdo ->query("SELECT id_tb_vente_produits_credit,nom,montant_total,date_reglement_escompe,date_vente from tb_vente_produits_credit,tb_client where tb_vente_produits_credit.id_tb_client =tb_client.id_tb_client and statu='impayer'AND tb_vente_produits_credit.id_tb_utilisateur=$id_administrateur limit 1000 ");
?>

                                          
<?php
while($credit=$result->fetch(PDO:: FETCH_OBJ))
{?>



                                                <tr onclick="afficher_element('<?php echo $credit->id_tb_vente_produits_credit ?>')">
                                                  <th scope="row"><?php echo $credit->id_tb_vente_produits_credit?></th>
                                                  <td> <?php echo $credit->nom ?></td>
                                                  <td><?php echo $credit->montant_total  ?></td>
                                                  <td><?php echo $credit->date_vente   ?></td>
                                                  <td><?php echo $credit->date_reglement_escompe   ?></td>
												  <td><button onclick="payer('<?php echo $credit->id_tb_vente_produits_credit ?>')" type="submit" class="btn btn-success"  id="payer">
                                            payer
                                            </button></td>
                                                </tr>
                                               
                                              

<?php } 
		?>

