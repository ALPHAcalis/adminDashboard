import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private url="http://localhost:3000/SuperUserAPI/api/utilisateur/"

  httpOptions: { headers: HttpHeaders } = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http:HttpClient){       
   }


  getSingleUser(idUtilisateur:number): Observable<any[]>{
      return this.http.get<any[]>(this.url+'getSingleUser.php?idUtilisateur='+idUtilisateur,{responseType:'json'})     
  }
  getUsersBooks(idUtilisateur:number): Observable<any[]>{
      return this.http.get<any[]>(this.url+'getUsersBorrows.php?idUtilisateur='+idUtilisateur,{responseType:'json'})     
  }
}
