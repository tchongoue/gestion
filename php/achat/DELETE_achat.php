<?php 
		/* join.php */
 
		//include db configuration file
		include("connection.php");
       
 
				if($_POST)
				{
				/* VALUES */
				
                $id=$_POST['id'];
				
 
			

$data = [
   
     'id'=> $id,
];

$sql ="DELETE FROM tb_achat_produits WHERE id_tb_achat_produits=:id ";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>