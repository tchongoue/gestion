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
    
        
$result=$pdo ->query("SELECT id_tb_credit_fournisseur,nom,montant,date_credit,statu from tb_credit_fournisseur,tb_fournisseur where tb_fournisseur.id_tb_fournisseur =tb_credit_fournisseur.id_tb_fournisseur and tb_credit_fournisseur.id_tb_utilisateur =$id_administrateur  limit 1000 ");
?>

                                          
<?php
while($credit_fournisseur=$result->fetch(PDO:: FETCH_OBJ))
{?>



                                                <tr onclick="afficher_credit('<?php echo $credit_fournisseur->nom ?>','<?php echo $credit_fournisseur->montant  ?>','<?php echo $credit_fournisseur->date_credit   ?>','<?php echo $credit_fournisseur->id_tb_credit_fournisseur?>')">
                                                  <th scope="row"><?php echo $credit_fournisseur->id_tb_credit_fournisseur?></th>
                                                  <td> <?php echo $credit_fournisseur->nom ?></td>
                                                  <td><?php echo $credit_fournisseur->montant  ?></td>
                                                  <td><?php echo $credit_fournisseur->date_credit   ?></td>
                                                  <td><?php echo $credit_fournisseur->statu   ?></td>
												  
                                                </tr>
                                               
                                              

<?php } 
		?>

