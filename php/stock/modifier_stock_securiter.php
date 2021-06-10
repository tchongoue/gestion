<?php 
		/* join.php */
 
		//include db configuration file
		include("connection.php");
  
 
				if($_POST)
				{
				/* VALUES */
		
                $Quantite=$_POST['Quantite'];
               
					
                $id=$_POST['id'];
 
			

$data = [
   
    'Quantite' => $Quantite,
    
     'id'=> $id
];
$sql = "UPDATE tb_stock_securite SET qte_stock_securite=:Quantite WHERE id_tb_stock_securite=:id";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
 
				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>