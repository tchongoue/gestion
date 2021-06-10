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
        
$result=$pdo ->query("SELECT*FROM tb_client WHERE id_tb_utilisateur =$id_administrateur ");
?>

                                          
<?php
while($client=$result->fetch(PDO:: FETCH_OBJ))
{?>



                                                <tr onclick="afficher('<?php echo $client->nom ?>','<?php echo $client->localisation  ?>','<?php echo $client->contact   ?>','<?php echo $client->cni?>','<?php echo $client->id_tb_client ?>')">
                                                  <th scope="row"><?php echo $client->id_tb_client ?></th>
                                                  <td> <?php echo $client->nom ?></td>
                                                  <td><?php echo $client->localisation  ?></td>
                                                  <td><?php echo $client->contact   ?></td>
												  <td><?php echo $client->cni    ?></td>
												  
                                                </tr>
                                               
                                              

<?php } 
		?>



<















