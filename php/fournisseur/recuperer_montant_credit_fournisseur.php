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
        
$result=$pdo ->query("SELECT  sum(montant)   from tb_credit_fournisseur,tb_fournisseur where tb_fournisseur.id_tb_fournisseur =tb_credit_fournisseur.id_tb_fournisseur AND statu = 'impayer' AND tb_credit_fournisseur.id_tb_utilisateur =$id_administrateur ");
?>

                                          
<?php
$montant_credit_fournisseur=$result->fetchColumn();
?>

<label style="color: #742c2c;"><?php echo $montant_credit_fournisseur ?>fcfa </style></label>

                                               
                                              
