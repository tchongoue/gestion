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


$result=$pdo ->query("SELECT*FROM tb_depense_du_mois WHERE id_tb_utilisateur=$id_administrateur ");
?>

                                          
<?php
while($depense=$result->fetch(PDO:: FETCH_OBJ))
{?>



                                                <tr onclick="afficher('<?php echo $depense->libelle ?>','<?php echo $depense->montant  ?>','<?php echo $depense->id_tb_depense_du_mois   ?>')">
                                                  <th scope="row"><?php echo $depense->id_tb_depense_du_mois ?></th>
                                                  <td> <?php echo $depense->libelle ?></td>
                                                  <td><?php echo $depense->	montant  ?></td>
                                                  <td><?php echo $depense->date_depense   ?></td>
												 
												  
                                                </tr>
                                               
                                              

<?php } 
		?>



<















