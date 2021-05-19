import { Component, OnInit } from '@angular/core';
import { NotificateursService } from 'app/services/notificateurs.service';
import {  ListeLivresService} from './liste-livres.service';

@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})
export class ListeLivresComponent implements OnInit {


    listeLivre:any[];
    filtratedBookList:any[];
    listeLivreEmprunte:any[];
    listeLivreEnRetard:any[];

    nombreLivre:number
    nombreLivreEmprunt:number
    nombreLivreEnRetard:number


  constructor(private listeLivresService:ListeLivresService,
              private notifcateur:NotificateursService
    ) { }

  ngOnInit() {
      this.getLivre();
      this.getLivreEmprunt();
      this.getLivreEnRetard();
      this.filtratedBookList = this.listeLivre;
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

  async addNotification(idUtilisateur:number,titreLivre:string){
    let emetteur="Administration";
    let Objet="Relance concernant le Livre en retard : ";
    let messagae="Merci de retourner Votre livre au plus vite possible pour ne pas etre penalisé ";
    await this.notifcateur.addNotifications(idUtilisateur,messagae,emetteur,Objet+titreLivre).toPromise();
  }

    search(str: string){
        str = this.normalizeString(str);
        if(!str){
            this.filtratedBookList = this.listeLivre;
        } else {
            this.filtratedBookList = this.listeLivre.filter((x) => {
                return this.filterBookName(x, str);
            });
        }
    }

    filterBookName(x, str) {
        if (typeof(x.nomLivre) === 'string' && typeof(x.codeBar) === 'string' ) {
            const nx = this.normalizeString(x.nomLivre);
            const cx = this.normalizeString(x.codeBar);
            return nx.trim().toLowerCase().includes(str) || cx.trim().toLowerCase().includes(str);
        } else {
            return false;
        }
    }

    normalizeString(str) {
        if (typeof(str) === 'string' ) {
            return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        } else {
            return str;
        }
    }

  

}
