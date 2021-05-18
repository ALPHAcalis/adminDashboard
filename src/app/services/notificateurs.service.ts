import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificateursService {

  private url="http://localhost:3000/SuperUserAPI/api/notificateur/"

  httpOptions: { headers: HttpHeaders } = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };



  constructor(private http:HttpClient){       
   }

   addNotifications(idUtilisateur:number,message:string,emetteur:string,objet:string){
    return this.http.post(this.url+'notificateur.php',{
                                                       idUtilisateur:idUtilisateur,
                                                       message:message,
                                                       emetteur:emetteur,
                                                       objet:objet
    
    },this.httpOptions);
  }
}
