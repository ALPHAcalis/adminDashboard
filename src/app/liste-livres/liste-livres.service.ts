import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListeLivresService {

  private url="http://localhost:3000/SuperUserAPI/api/livre/"

  httpOptions: { headers: HttpHeaders } = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http:HttpClient){       
   }


  fetchAll(): Observable<any[]>{
      return this.http.get<any[]>(this.url+'getLivres.php',{responseType:'json'}).pipe(
        tap((_)=>console.log('fetched etudiants'))
      )    
  }
  getLivreEmprunte(): Observable<any[]>{
      return this.http.get<any[]>(this.url+'getLivreEmprunte.php',{responseType:'json'}).pipe(
        tap((_)=>console.log('fetched etudiants'))
      )    
  }
  getLivreEnRetard(): Observable<any[]>{
      return this.http.get<any[]>(this.url+'getLivreEnRetard.php',{responseType:'json'}).pipe(
        tap((_)=>console.log('fetched etudiants'))
      )    
  }
  getReturnBook(codeBar:number,idUtilisateur:number){
      return this.http.post(this.url+'retournerLivre.php',{codeBar: codeBar,idUtilisateur:idUtilisateur},this.httpOptions)
  }
  onUpload(fd:FormData){   
    console.log(fd)
    return this.http.post('https://admin.library.elmaroufi.com/addBook.php',fd)
  }
  
}
