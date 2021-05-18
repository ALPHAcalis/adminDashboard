import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { type } from 'os';
import { UtilisateurService } from './utilisateur.service';

@Component({
  selector: 'app-info-utilisateur',
  templateUrl: './info-utilisateur.component.html',
  styleUrls: ['./info-utilisateur.component.css']
})
export class InfoUtilisateurComponent implements OnInit {
  utilisateur:any;
  emprunts:any[];
  idUtilisateur:number

  constructor(private infoutilisateur:UtilisateurService,private route:ActivatedRoute) {
    this.idUtilisateur = this.route.snapshot.params['idUtilisateur'];
   }

  ngOnInit(): void {
    this.getUtilisateur(this.idUtilisateur);
    this.geEmpruntUtilisateur(this.idUtilisateur);
  }

  async getUtilisateur(idUtilisateur:number){
     this.utilisateur = await this.infoutilisateur.getSingleUser(idUtilisateur).toPromise();
     console.log(this.utilisateur);
  }
  async geEmpruntUtilisateur(idUtilisateur:number){
     this.emprunts = await this.infoutilisateur.getUsersBooks(idUtilisateur).toPromise();
     console.log(this.utilisateur);
  }

  getNameOfSubscription(codeAbonnement:string){
    var type=""
    switch(codeAbonnement){
      case "0":{type= "Basic";break }
      case "1":{type= "Essentiel";break}
      case "2":{type= "PRO";break}
      case "3":{type= "Etudiant";break}
    }
    return type;
  }

  getStatut(statut:string){
    var statutValue=""
    switch(statut){
      case "0":{statutValue= "en cours";break }
      case "1":{statutValue= "terminé";break}
    }
    return statutValue;
  }

  
  

}
