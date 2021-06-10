<?php 
		/* join.php */
 
		//include db configuration file
	 
        include_once("connection.php");
        if(isset($_GET['date_debut'] ))
        {
            $id_administrateur=$_GET['id_administrateur'];
            $date_debut=$_GET['date_debut'];
            $date_fin=$_GET['date_fin'];
         
        }else{
            $date_debut=0;
            $date_fin=0;
        }

$result=$pdo ->query("SELECT  sum(montant)   from tb_depense_du_mois where date_depense >= '$date_debut' and date_depense  <= '$date_fin' AND id_tb_utilisateur=$id_administrateur");
?>

                                          
<?php
$depense=$result->fetchColumn();
?>

<label ><?php echo $depense ?> </label>

                  