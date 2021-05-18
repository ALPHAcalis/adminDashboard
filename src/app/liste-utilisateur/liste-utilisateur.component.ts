import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from './utilisateurs.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {

  listeUtilisateur:any[];
  nombreUtilisateur:number;

  constructor(private utilisateur:UtilisateursService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }


  async getAllUsers(){

    this.listeUtilisateur= await this.utilisateur.getAllUsers().toPromise();
    this.nombreUtilisateur=this.listeUtilisateur.length
  }

}
