

//RECUPERATION DE L'ID UTILISATEUR
var id_administrateur=localStorage.id_adminitrateur;

   var Quantite;
   var achat_unitaire;
   var prix_achat;
   var prix_vente;


var benefice;
$(function() { 
    $("#search").click(function() { 
        date_debut = document.getElementById("Debut").value;
         date_fin = document.getElementById("Fin").value; 
        if(date_debut<date_fin){
            var prix_vente_total=0;
            var prix_achat_total=0;
            var montant_payer_total=0;
            var montant_impayer_total=0;
            var benefice_payer_total=0;
            var benefice_impayer_total=0;
            var benefice;
            $.get("php/invantaire/invantaire_comptant.php", 'date_debut=' + date_debut+'&date_fin='+ date_fin+'&id_administrateur=' + id_administrateur,function(rep){$("#table_element_comptant").html(rep);
        
            var tableau_compter_ligne = document.getElementById("table_element_comptant");
            // nombre de lignes dans la table 
         
            for(var i = 1; i <= tableau_compter_ligne.rows.length; i++){
    
                 prix_vente = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[i].cells[3].innerHTML;
                 Quantite = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[i].cells[1].innerHTML;
                 achat_unitaire = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[i].cells[2].innerHTML;
                        var prix_vente_converti=parseFloat(prix_vente);
                 prix_achat= achat_unitaire*Quantite;
                 var prix_achat_converti=parseFloat(prix_achat);
                        prix_achat_total=prix_achat_total+prix_achat_converti;
                       
                        prix_vente_total=prix_vente_total+prix_vente_converti;

            }
            benefice=prix_vente_total-prix_achat_total; 
        
            var montant_total = document.getElementById('Montant');
            montant_total.innerHTML = prix_vente_total;
            
            var benefice_total = document.getElementById('Bénéfice');
            benefice_total.innerHTML = benefice;












            $.get("php/invantaire/invantaire_credit.php", 'date_debut=' + date_debut+'&date_fin='+ date_fin+'&id_administrateur=' + id_administrateur,function(rep){$("#table_element_credit").html(rep);
    
            var tableau_compter_ligne = document.getElementById("table_element_credit");
            // nombre de lignes dans la table 
         
            for(var i = 1; i <= tableau_compter_ligne.rows.length; i++){
                if(document.getElementsByTagName('table')[1].getElementsByTagName('tr')[i].cells[4].innerHTML=="payer")
                {
                  var montant_payer = document.getElementsByTagName('table')[1].getElementsByTagName('tr')[i].cells[1].innerHTML;
                  var montant_payer_converti=parseFloat(montant_payer);
                  montant_payer_total=montant_payer_total+montant_payer_converti;
                  var benefice_payer = document.getElementsByTagName('table')[1].getElementsByTagName('tr')[i].cells[3].innerHTML;
                  var benefice_payer_converti=parseFloat(benefice_payer);
                  benefice_payer_total=benefice_payer_total+benefice_payer_converti;
                }
                else
                {
                    var montant_impayer = document.getElementsByTagName('table')[1].getElementsByTagName('tr')[i].cells[1].innerHTML;
                    var montant_impayer_converti=parseFloat(montant_impayer);
                    montant_impayer_total=montant_impayer_total+montant_impayer_converti;
                    var benefice_impayer = document.getElementsByTagName('table')[1].getElementsByTagName('tr')[i].cells[3].innerHTML;
                  var benefice_impayer_converti=parseFloat(benefice_impayer);
                  benefice_impayer_total=benefice_impayer_total+benefice_impayer_converti;
                }
                
                 
                }
    
                var payer = document.getElementById('payé');
                payer.innerHTML = montant_payer_total;
                var impayer = document.getElementById('impayé');
                impayer.innerHTML = montant_impayer_total;
                var benefice_dja_payer=document.getElementById('benefice_payé');
                benefice_dja_payer.innerHTML = benefice_payer_total;
                var benefice_non_payer=document.getElementById('benefice_impayé');
                benefice_non_payer.innerHTML = benefice_impayer_total;
    
    
    
                 var chriffre_affaie= prix_vente_total+ montant_payer_total+ montant_impayer_total;

             var ca=document.getElementById('ca');
                ca.innerHTML = chriffre_affaie;
    var benefice_sur_tous_les_vente=benefice_payer_total+benefice_impayer_total+ benefice;
    var benefice_totale=document.getElementById('benefice_sur_tous_les_vente');
    benefice_totale.innerHTML = benefice_sur_tous_les_vente;
    alert(benefice_sur_tous_les_vente);
                         
            });
    
            

            $.get("php/invantaire/recuperer_montant_credit_fournisseur.php",'date_debut=' + date_debut+'&date_fin='+ date_fin+'&id_administrateur=' + id_administrateur,function(rep){$("#montant_des_credi").html(rep);

        });


        $.get("php/invantaire/depence_periode.php", 'date_debut=' + date_debut+'&date_fin='+ date_fin+'&id_administrateur=' + id_administrateur, function(rep) { $("#depense").html(rep) });
    

        });







        }else{
           
              swal({
                                
                title: "Erreur!",
                text: "verifiez l'ordre des date svp!",
                icon: "img/cancel.png",
                button: {
                    text: "ok!",
                   
                  },
                
              });
        }

    });

});


