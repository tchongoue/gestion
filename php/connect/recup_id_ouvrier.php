<?php 
		/* join.php */
 
		//include db configuration file
		include_once("connection.php");
        

        if(isset($_GET['nom_struc']))
        {
            $nom_struc=htmlspecialchars($_GET['nom_struc']);
            $mot_pass_admin=htmlspecialchars($_GET['mot_pass_ouvrier']);
            $Localisation=htmlspecialchars($_GET['Localisation']);
            $Contact=htmlspecialchars($_GET['Contact']);

        }else{
           
        }
        $result_mot_pass_admin=$pdo ->query("SELECT mot_pass_ouvrier  from tb_utilisateur where nom_structure='$nom_struc' and  	localisation='$Localisation' and contact='$Contact' order by id_tb_utilisateur desc limit 1");
        $ot_pass_admin_hach=$result_mot_pass_admin->fetchColumn();
        $verification=password_verify($mot_pass_admin,$ot_pass_admin_hach);
        if($verification==1)
        {
            
$result=$pdo ->query("SELECT id_tb_utilisateur  from tb_utilisateur where  mot_pass_ouvrier='$ot_pass_admin_hach' ");

 $id=$result->fetchColumn();
 if(!is_numeric($id)) {
   $i=0;
   echo $i ;
}else{ echo $id ;}


        }else{
            $i=0;
            echo $i ;
        }







?>

