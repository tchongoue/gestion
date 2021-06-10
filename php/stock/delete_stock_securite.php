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

$sql ="DELETE FROM tb_stock_securite WHERE id_tb_stock_securite=:id ";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>