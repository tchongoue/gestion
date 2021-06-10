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

        
$result=$pdo ->query("SELECT*FROM tb_client WHERE id_tb_utilisateur=$id_administrateur");
?>
<option ></option>
<?php
while($client=$result->fetch(PDO:: FETCH_OBJ))
{?>
<option value="<?php echo $client->id_tb_client ?> " ><?php echo $client->nom ?> </option>



<?php } 
		?>

















