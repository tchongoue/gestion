<?php 
		/* join.php */
 
		//include db configuration file
		include_once("connection.php");
        if(isset($_POST['id']))
		{
			$id_administrateur=$_POST['id'];
		}else{
			$id_administrateur=0;
		}
$result=$pdo ->query("SELECT localisation FROM tb_utilisateur WHERE id_tb_utilisateur  =$id_administrateur ");
?>
<?php
$localisation=$result->fetchColumn();

?>
<?php echo $localisation?>






