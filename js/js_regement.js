
//RECUPERATION DE L'ID UTILISATEUR
var id_administrateur=localStorage.id_adminitrateur;

function txt_montant_reglement(event)//fonction qui oblige l'utilisateur a entrer un nomble dans la zone de texte
    {
    var source = document.getElementById("montant_reglement"); //On récupère la balise
    var value = source.value; //ici, sa valeur
    if (isNaN(parseFloat(value))) //cas où la valeur n'est pas du tout un nombre
// Dans ce cas, parseFloat(value) est égal à NaN
        {
        source.value = ""; // la valeur devient nulle
        }
    else if (value != parseInt(value) + ".") // Cas ou ce n'est pas un nombre avec juste un point derrière (pour la virgule)
        {
        source.value = parseFloat(value); // La valeur devient la partie nombre
        }
    }
    function txt_montant(event)//fonction qui oblige l'utilisateur a entrer un nomble dans la zone de texte
    {
    var source = document.getElementById("Montant"); //On récupère la balise
    var value = source.value; //ici, sa valeur
    if (isNaN(parseFloat(value))) //cas où la valeur n'est pas du tout un nombre
// Dans ce cas, parseFloat(value) est égal à NaN
        {
        source.value = ""; // la valeur devient nulle
        }
    else if (value != parseInt(value) + ".") // Cas ou ce n'est pas un nombre avec juste un point derrière (pour la virgule)
        {
        source.value = parseFloat(value); // La valeur devient la partie nombre
        }
    }





    function charge_depence_mois(){
        $.get("php/reglement/tableau_depence_mois.php",'id_administrateur=' + id_administrateur,function(rep){$("#table_depence").html(rep);
    });
    
    }


    // click du boutton valider


    $(function() { alert('ok')
        $("#valide_depence_mois").click(function() {
                  



  

            /* VALUES */
            var libelle = $("#select_libelle").val();
            var Montant = $("#Montant").val();
        
            /* DATASTRING */
           
            var dataString = 'libelle='+libelle+'&Montant='+Montant+'&id_administrateur='+ id_administrateur;
            alert(dataString);
     
     
        
            if(libelle=='' || Montant=='') { 
                swal({
                    
                    title: "Erreur!",
                    text: "verifier les données",
                    icon: "img/cancel.png",
                    button: {
                        text: "ok!",
                       
                      },
                    
                  });
                  //  vider();
                  
            } else {
            $.ajax({
            type: "POST",
            
            url: "php/reglement/insert_depence_mois.php",
            data: dataString,
                success: function(){
                    charge_depence_mois();
                      vider();
                    swal({
                        title: "success!",
                        text: "enregistrement effectué!",
                        icon:"img/clean.png",
                        button: "ok!",
                      });
                    
                   }
                
            });    
                }//EOC
            
           return false;
       
            }); //EOF
        
    
 
        });



 // charger les texbox au click sur une ligne du tableau
 var id_depence_mois;
 function afficher(nom,montant,id){
   

  
   var combobox;
   combobox = document.getElementById("select_libelle");
   combobox.options[combobox.selectedIndex].text= nom;
     
  
   
   var source_Montant = document.getElementById("Montant"); //On récupère la balise

   source_Montant.value = montant; // la valeur devient nulle

   
  

   id_depence_mois=id;
 

 }
 
   // fin charger les texbox au click sur une ligne du tableau


   function vider(event)
   {
   var source = document.getElementById("Montant"); //On récupère la balise
   var value = source.value; //ici, sa valeur
  source.value = ""; // la valeur devient nulle

  
     
   }
    

            
//modification au click du boutton modifier

$(function() { 
    $("#modifier_depence_mois").click(function() { 
       
        swal({
                        
            title: "Attention!",
            text: "vous vous appretez a faire une modification",
            icon: "img/attention.png",
            buttons:true,
            dangerMode:true
          })
          
          .then((ok)=>{
           if(ok){
            var libelle = $("#select_libelle").val();
            var Montant = $("#Montant").val();
        
            var id=id_depence_mois;
         alert(id);
            /* DATASTRING */
            var dataString = 'libelle='+libelle+'&Montant='+ Montant+'&id='+id;
     
        
            if(libelle=='' || Montant==''|| id==null ) { 
                swal({
                        
                    title: "Erreur!",
                    text: "selectionnez un element sur le tableau",
                    icon: "img/cancel.png",
                    button: {
                        text: "ok!",
                       
                      },
                    
                  });
               
                  charge_depence_mois();
                  vider();
            /* UNCOMMNENT TO SEND TO CONSOLE */
            /* console.log ("SOMETHING HAPPENS"); */
            } else {
            $.ajax({
                 
            type: "POST",
            
            url: "php/reglement/modifier_reglement.php",
            data: dataString,
                success: function(){
                    swal({
                        title: "success!",
                        text: "modification effectué!",
                        icon:"img/clean.png",
                        button: "ok!",
                      });
                  
                      charge_depence_mois();
            vider();
                    /* UNCOMMNENT TO SEND TO CONSOLE */
                    /* console.log (dataString); console.log ("AJAX DONE"); */
                   
                   }
    
            });   
                }//EOC
           return false;
           }else{

            charge_depence_mois();
            vider();
           }
            }); //EOF
            
    
        });

          });
        /* VALUES */
      



//fin suppression au click du boutton supprimer

// charger le tableau liste_des_credit

function liste_des_credit(){
    $.get("php/reglement/liste_des_credit.php",'id_administrateur=' + id_administrateur,function(rep){$("#table_credit").html(rep);
});
}
// fin charger le tableau liste_des_credit
// charger le tableau liste_des_credit

function afficher_element(id_tb_vente_produits_credit){
    $.get("php/reglement/element_credit.php", 'id_tb_vente_produits_credit=' + id_tb_vente_produits_credit,function(rep){$("#table_element_credit").html(rep);
});
}
// fin charger le tableau liste_des_credit

// charger le tableau liste_des_credit

function payer(id_tb_vente_produits_credit){
    
    swal({

        title: "Attention!",
        text: "cet operation est irreversible",
        icon: "img/attention.png",
        buttons: true,
        dangerMode: true
    })
    .then((ok) => {
        if (ok) {
    $.get("php/reglement/payer.php", 'id_tb_vente_produits_credit=' + id_tb_vente_produits_credit,function(rep){liste_des_credit(); 
        
        var tableau_compter_ligne = document.getElementById("table_element_credit");
        for(var i = 0; i <= tableau_compter_ligne.rows.length; i++){
            const maTable = document.getElementById('table_element_credit');
            maTable.deleteRow(i-1);

        
        }
        
        
        swal({
        title: "success!",
        text: "payement effectué!",
        icon:"img/clean.png",
        button: "ok!",
      });
});}});

}
// fin charger le tableau liste_des_credit

