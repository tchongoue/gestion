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
        
$result=$pdo ->query("SELECT*FROM tb_fournisseur where id_tb_utilisateur =$id_administrateur  order by id_tb_fournisseur desc limit 1000 ");
?>

                                          
<?php
while($fournisseur=$result->fetch(PDO:: FETCH_OBJ))
{?>



                                                <tr onclick="afficher('<?php echo $fournisseur->nom ?>','<?php echo $fournisseur->localisation  ?>','<?php echo $fournisseur->contact   ?>','<?php echo $fournisseur->id_tb_fournisseur?>')">
                                                  <th scope="row"><?php echo $fournisseur->id_tb_fournisseur?></th>
                                                  <td> <?php echo $fournisseur->nom ?></td>
                                                  <td><?php echo $fournisseur->localisation  ?></td>
                                                  <td><?php echo $fournisseur->contact   ?></td>
												  
												  
                                                </tr>
                                               
                                              

<?php } 
		?>

