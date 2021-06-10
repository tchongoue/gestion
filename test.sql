select animal.nom,race.nom FROM animal join race on animal.id=race.id group by race.nom ;
select animal.nom,race.nom,espece FROM animal join race on animal.id=race.id group by espece ;
select animal.nom as animal,race.nom as race,espece FROM animal join race on animal.id=race.id group by espece,race.nom ;
select enfant.nom as enfant,parent.nom as pere FROM animal as enfant join animal as parent on enfant.id=parent.pere_id group by pere;
select enfant.nom as enfant,parent.nom as mere FROM animal as enfant join animal as parent on enfant.id=parent.mere_id group by parent.nom;
select enfant.nom as enfant,parent.nom as mere FROM animal as enfant join animal as parent on enfant.id=parent.mere_id or enfant.id=parent.pere_id;

select count(type)as nbe_appart,type FROM appartement group by type;
select sum(prix_paye),nom,prenom,type FROM paiement_loyer,locataire,appartement where appartement.code_appt=paiement_loyer.code_appt and locataire.code_loc=paiement_loyer.code_loc group by type;
select ode_loc,count(code_appt)as nbe_appart  from location  group by ode_loc having nbe_appart >=2 ;