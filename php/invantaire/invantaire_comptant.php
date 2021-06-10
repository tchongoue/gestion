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
        
$result=$pdo ->query("SELECT libelle,qte_vendu ,cout_achat_unitaire ,montant  from tb_stock_produits ,tb_vente_produits_comptant where tb_vente_produits_comptant.id_tb_stock_produits = tb_stock_produits.id_tb_stock_produits and date_vente >='$date_debut' and date_vente <='$date_fin' AND tb_vente_produits_comptant.id_tb_utilisateur=$id_administrateur order by tb_vente_produits_comptant.id_tb_stock_produits  desc limit  30001");
?>

                                          
<?php

while($comptant=$result->fetch(PDO:: FETCH_OBJ))
{
  ?>



                                                <tr>
                                                  <th scope="row"><?php echo $comptant->libelle?></th>
                                                  <td> <?php echo $comptant->qte_vendu ?></td>
                                                  <td><?php echo $comptant->cout_achat_unitaire   ?></td>
                                                  <td><?php echo $comptant->montant   ?></td>
                                                  
                                                </tr>
                                               
<?php } 
		?>