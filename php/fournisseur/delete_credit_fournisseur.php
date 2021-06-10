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

$sql ="DELETE FROM tb_credit_fournisseur WHERE id_tb_credit_fournisseur=:id ";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>