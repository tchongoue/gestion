<?php 
		/* join.php */
 
		//include db configuration file
		include_once("connection.php");
		if(isset($_GET['id_administrateur']))
		{
			$id_administrateur=$_GET['id_administrateur'];
			$date_debut=$_GET['date_debut'];
            $date_fin=$_GET['date_fin'];
		}else{
			$id_administrateur=0;
		}
        
$result=$pdo ->query("SELECT  sum(montant)   from tb_credit_fournisseur where statu = 'impayer' AND id_tb_utilisateur=$id_administrateur AND date_credit  >= '$date_debut' and date_credit   <= '$date_fin' ");
?>

                                          
<?php
$montant_credit_fournisseur=$result->fetchColumn();
?>

<label ><?php echo $montant_credit_fournisseur ?> </style></label>

                                               
                                              
