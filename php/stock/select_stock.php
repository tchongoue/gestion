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
$result=$pdo ->query("SELECT*FROM tb_stock_produits WHERE id_tb_utilisateur =$id_administrateur ");
?>
<option></option>

<?php
while($produit=$result->fetch(PDO:: FETCH_OBJ))
{?>
<option  value="<?php echo $produit->id_tb_stock_produits ?> " ><?php echo $produit->libelle  ?> </option>



<?php } 
		?>






