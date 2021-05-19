import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  
  private url="http://localhost:3000/SuperUserAPI/api/utilisateur/"

  httpOptions: { headers: HttpHeaders } = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http:HttpClient){       
   }


  getAllUsers(): Observable<any[]>{
      return this.http.get<any[]>(this.url+'getAllUsers.php',{responseType:'json'})   
  }

}
