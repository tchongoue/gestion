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
        
$result=$pdo ->query("SELECT date_reglement_escompe  ,montant_total ,benefice_total ,nom ,statu,date_reglement_effectuer  from tb_vente_produits_credit,tb_client where tb_client.id_tb_client = tb_vente_produits_credit.id_tb_client and date_vente >= '$date_debut' and date_vente <= '$date_fin' and  montant_total > 0 AND tb_vente_produits_credit.id_tb_utilisateur=$id_administrateur order by id_tb_vente_produits_credit desc limit 30001");
?>

                                          
<?php

while($credit=$result->fetch(PDO:: FETCH_OBJ))
{
  ?>



                                                <tr>
                                                  <th scope="row"><?php echo $credit->nom?></th>
                                                  <td> <?php echo $credit->montant_total ?></td>
                                                  <td><?php echo $credit->date_reglement_escompe   ?></td>
                                                  <td><?php echo $credit->benefice_total   ?></td>
                                                  <td><?php echo $credit->statu   ?></td>
                                                </tr>
                                               
<?php } 
		?>