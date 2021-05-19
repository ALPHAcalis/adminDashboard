import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListeLivresService } from 'app/liste-livres/liste-livres.service';
import { NotificateursService } from 'app/services/notificateurs.service';
declare var $:any;
@Component({
  selector: 'app-enrengistrer-retour',
  templateUrl: './enrengistrer-retour.component.html',
  styleUrls: ['./enrengistrer-retour.component.css']
})

export class EnrengistrerRetourComponent implements OnInit {


  listeLivreEmprunte:any[];
  nombreLivreEmprunt:number;
  status:string;

constructor(private listeLivresService:ListeLivresService,private router:Router,
       
  ) { }

ngOnInit() {  
    this.getLivreEmprunt();
}


async getLivreEmprunt(){
  this.listeLivreEmprunte =  await this.listeLivresService.getLivreEmprunte().toPromise();
  this.nombreLivreEmprunt =  this.listeLivreEmprunte.length
}
async returnLivre(codeBar:number,idUtilisateur:number){
   await this.listeLivresService.getReturnBook(codeBar,idUtilisateur).toPromise().then((response: any) => {
    this.status = response.status;

  });
 
  this.ngOnInit();
   if(this.status='200'){
    this.showNotification('top','center',2,'Le livre a été enregistré avec succès')
   }else{
    this.showNotification('top','center',4,'une erreur est survenue')
   }
   await this.router.navigateByUrl('enrengistrerretour/')
  
 
}

showNotification(from, align,statecolor,message){
      const type = ['','info','success','warning','danger'];
      var color = Math.floor(statecolor);
      $.notify({
          icon: "pe-7s-smile",
          message: message
      },{
          type: type[color],
          timer: 1000,
          placement: {
              from: from,
              align: align
          }
      });
  }



}
