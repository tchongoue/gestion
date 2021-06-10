<?php 
		/* join.php */
      
		//include db configuration file
		include_once("connection.php");
   
		if($_POST)
				{
				/* VALUES */
				$nom=htmlspecialchars($_POST['nom']);
                $Localisation=htmlspecialchars($_POST['Localisation']);
                $Contact=htmlspecialchars($_POST['Contact']);
                $mot_passe_ouv=htmlspecialchars($_POST['mot_passe_ouvrier']);
				$mot_passe_ouvrier=password_hash( $mot_passe_ouv,PASSWORD_DEFAULT,['cost'=>4]);
                $mot_passe_ad=htmlspecialchars($_POST['mot_passe_admin']);
				$mot_passe_admin=password_hash( $mot_passe_ad,PASSWORD_DEFAULT,['cost'=>4]);
				$cle_modification=htmlspecialchars($_POST['cle_modification']);

$data = [
    'nom' => $nom,
    'Localisation' => $Localisation,
     'Contact' => $Contact,
     
	 'cle_modification'=>$cle_modification,
];
$sql = "INSERT INTO tb_utilisateur (nom_structure,localisation,contact,mot_pass_admin,mot_pass_ouvrier,cle_de_modification) VALUES (:nom,:Localisation,:Contact,'$mot_passe_admin','$mot_passe_ouvrier',:cle_modification)";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);

} else { 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
        }
		?>