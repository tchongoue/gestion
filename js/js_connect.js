var id_admin;
document.getElementById("mot_passe_admin").disabled = true; 

document.getElementById("mot_passe_ouvrier").disabled = true; 
    function select_role() {
        if($("#select_role").val()=='administateur'){
            document.getElementById("mot_passe_admin").disabled =false;
            document.getElementById("mot_passe_ouvrier").disabled = true; 
        }else if($("#select_role").val()=='employé'){
            document.getElementById("mot_passe_ouvrier").disabled =false; 
            document.getElementById("mot_passe_admin").disabled = true; 
        }else{
            document.getElementById("mot_passe_admin").disabled = true; 

            document.getElementById("mot_passe_ouvrier").disabled = true; 
    
        }
        
    }
    $(function(){
        $("#valider").click(function(){
            if(document.getElementById("mot_passe_admin").disabled ==false){
alert('adm')
var nom_struc_min=$("#nom").val();
var nom_struc = nom_struc_min.toUpperCase();

var mot_pass_admin=$("#mot_passe_admin").val();
var Localisation=$("#Localisation").val();
var Contact=$("#Contact").val();
$.get("php/connect/recup_id_admin.php",'nom_struc=' + nom_struc+'&mot_pass_admin='+mot_pass_admin+'&Localisation='+Localisation+'&Contact='+Contact, function(rep) { var id = rep;
alert(id);
var id_admin=parseInt(id);
if(id_admin==0){
    swal({
        title: "Erreur!",
        text: "verrifier vos information de connéction!",
        icon:"img/cancel.png",
        button: "ok!",
      }); 
}else{
    localStorage.id_adminitrateur=id_admin;
   
    document.getElementById("modifier").disabled = false; 
    $('body a[href="#modifier_compte"]').click(function(event) {
                      
        // Prevent infinite loop
        $(this).unbind('click');
    
        // Execute default action
        event.currentTarget.click();
    
                });
    swal({
        title: "connecté!",
        text: "je vous souhaite une bonne gestion!",
        icon: "img/clean.png",
        button: "ok!",
    });
   
   
}

});

            }else if(document.getElementById("mot_passe_ouvrier").disabled == false){
                var nom_struc_min=$("#nom").val();
                var nom_struc = nom_struc_min.toUpperCase();
        
                var mot_pass_ouvrier=$("#mot_passe_ouvrier").val();
                var Localisation=$("#Localisation").val();
                var Contact=$("#Contact").val();



                $.get("php/connect/recup_id_ouvrier.php",'nom_struc=' + nom_struc+'&mot_pass_ouvrier='+mot_pass_ouvrier+'&Localisation='+Localisation+'&Contact='+Contact, function(rep) { var id = rep;
                    alert(id);
                    var id_admin=parseInt(id);
                    
                    if(id_admin==0){
                        swal({
                            title: "Erreur!",
                            text: "verifier vos information de connéction!",
                            icon:"img/cancel.png",
                            button: "ok!",
                          }); 
                    }else{
                        swal({
                            title: "connecté!",
                            text: "je vous souhaite une bonne gestion!",
                            icon: "img/clean.png",
                            button: "ok!",
                        });
                        localStorage.id_adminitrateur=id_admin;
                        localStorage.statut=0;
                        document.getElementById("modifier").disabled = true; 
                        $('body a[href="#fr_client"]').click(function(event) {
                            event.preventDefault();
                        });
                        $('body a[href="#fr_register"]').click(function(event) {
                            event.preventDefault();
                        });
                        $('body a[href="#fr_inventaire"]').click(function(event) {
                            event.preventDefault();
                        });
                        $('body a[href="#fr_achat"]').click(function(event) {
                            event.preventDefault();
                        });
                        $('body a[href="#fr_stock"]').click(function(event) {
                            event.preventDefault();
                        });
                        $('body a[href="#fr_fournisseur"]').click(function(event) {
                            event.preventDefault();
                        });
                        $('body a[href="#fr_connect"]').click(function(event) {
                            event.preventDefault();
                        });
                    }
                });
            }else{
                swal({
                    title: "Erreur!",
                    text: "remplisser les champs et choisissez un role!",
                    icon:"img/cancel.png",
                    button: "ok!",
                  });
            }
        }
        );
    });