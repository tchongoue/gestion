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
        
$result=$pdo ->query("SELECT*FROM tb_fournisseur where id_tb_utilisateur =$id_administrateur");
?>
<option value=""></option>
<?php
while($fournisseur=$result->fetch(PDO:: FETCH_OBJ))
{?>
<option value="<?php echo $fournisseur->id_tb_fournisseur ?> " ><?php echo $fournisseur->nom ?> </option>



<?php } 
		?>






