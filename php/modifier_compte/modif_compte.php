<?php 
		/* join.php */
 
		//include db configuration file
		include_once("connection.php");
        

        if(isset($_POST['id']))
        {
            $id=$_POST['id'];
            $nom=htmlspecialchars($_POST['nom']);
            $Localisation=htmlspecialchars($_POST['Localisation']);
            $Contact=htmlspecialchars($_POST['Contact']);
            $mot_passe_admin=htmlspecialchars($_POST['mot_passe_admin']);
            $mot_passe_ouvrier=htmlspecialchars($_POST['mot_passe_ouvrier']);
            $cle_modification=htmlspecialchars($_POST['cle_modification']);
            $Nouveau_mot_passe_admin=htmlspecialchars($_POST['Nouveau_mot_passe_admin']);
            $Nouveau_mot_passe_ouvrier=htmlspecialchars($_POST['Nouveau_mot_passe_ouvrier']);
        }else{
           
        }

        $result_cle=$pdo ->query("SELECT cle_de_modification   from tb_utilisateur where id_tb_utilisateur ='$id' order by id_tb_utilisateur desc limit 1");
        $cle_modif=$result_cle->fetchColumn();
if($cle_modification== $cle_modif)
{

    
    $result_mot_pass_admin=$pdo ->query("SELECT mot_pass_admin  from tb_utilisateur where id_tb_utilisateur ='$id' order by id_tb_utilisateur desc limit 1");
    $ot_pass_admin_hach=$result_mot_pass_admin->fetchColumn();
    $verification_admin=password_verify($mot_passe_admin,$ot_pass_admin_hach);
    $result_mot_pass_ouv=$pdo ->query("SELECT mot_pass_ouvrier  from tb_utilisateur where id_tb_utilisateur ='$id' order by id_tb_utilisateur desc limit 1");
    $mot_pass_admin_hach=$result_mot_pass_ouv->fetchColumn();
    $verification_ouvrier=password_verify($mot_passe_ouvrier,$mot_pass_admin_hach);
    if($verification_admin==1 && $verification_ouvrier==1 )
    {
        $mot_passe_administrateur=password_hash( $Nouveau_mot_passe_admin,PASSWORD_DEFAULT,['cost'=>4]);
        $mot_passe_ouv=password_hash( $Nouveau_mot_passe_ouvrier,PASSWORD_DEFAULT,['cost'=>4]);
        $result=$pdo ->query("UPDATE tb_utilisateur SET mot_pass_admin='$mot_passe_administrateur', mot_pass_ouvrier='$mot_passe_ouv' ,nom_structure='$nom' ,localisation= '$Localisation' ,contact='$Contact'  WHERE id_tb_utilisateur ='$id'");

 
    }else{
        $i=1;
        echo $i ;
    }



}else{
    $i=1;
    echo $i ;
}









?>

