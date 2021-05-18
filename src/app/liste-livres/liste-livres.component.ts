import { Component, OnInit } from '@angular/core';
import {  ListeLivresService} from './liste-livres.service';

@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})
export class ListeLivresComponent implements OnInit {


    listeLivre:any[];
    listeLivreEmprunte:any[];
    listeLivreEnRetard:any[];

    nombreLivre:number
    nombreLivreEmprunt:number
    nombreLivreEnRetard:number


  constructor(public listeLivresService:ListeLivresService) { }

  ngOnInit() {
      this.getLivre();
      this.getLivreEmprunt();
      this.getLivreEnRetard();
  }
  async getLivre(){
    this.listeLivre = await this.listeLivresService.fetchAll().toPromise();
    this.nombreLivre= this.listeLivre.length;
  }
  async getLivreEmprunt(){
    this.listeLivreEmprunte =  await this.listeLivresService.getLivreEmprunte().toPromise();
    this.nombreLivreEmprunt =  this.listeLivreEmprunte.length
  }
  async getLivreEnRetard(){
    this.listeLivreEnRetard =  await this.listeLivresService.getLivreEnRetard().toPromise();
    this.nombreLivreEnRetard =  this.listeLivreEmprunte.length
  }


  

}
