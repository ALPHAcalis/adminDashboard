import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from './utilisateurs.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {

  listeUtilisateur:any[];
  filteredUserList: any[];
  nombreUtilisateur:number;

  constructor(private utilisateur:UtilisateursService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }


  async getAllUsers(){
    this.listeUtilisateur= await this.utilisateur.getAllUsers().toPromise();
    this.nombreUtilisateur=this.listeUtilisateur.length
  }

  search(event: any) {
    const str = this.normalizeString(event.target.value);
    if (!str) {
      this.filteredUserList = this.listeUtilisateur;
    } else {
      this.filteredUserList = this.listeUtilisateur.filter((x) => {
        return this.filterUser(x, str);
      });
    }
  }

  filterUser(x, str) {
    const a = ['idUtilisateur', 'nom', 'prenom'];
    for (let i = 0; i < a.length; i++) {
      const p = a[i];
      if (typeof(x[p]) !== 'string') {
        return false;
      } else if (this.normalizeString(x[p]).trim().toLowerCase().includes(str)) {
        return true
      }
    }
    return false;
  }

  normalizeString(str) {
    if (typeof(str) === 'string' ) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    } else {
      return str;
    }
  }

}
