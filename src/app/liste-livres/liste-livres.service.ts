import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListeLivresService {

  private url="https://library.elmaroufi.com/Biblio_API/api/post/"

  httpOptions: { headers: HttpHeaders } = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http:HttpClient){       
   }


  fetchAll(): Observable<any[]>{
      return this.http.get<any[]>(this.url+'read.php',{responseType:'json'}).pipe(
        tap((_)=>console.log('fetched etudiants'))
      )    
  }
  onUpload(fd:FormData){
     
    console.log(fd)
    return this.http.post('https://admin.library.elmaroufi.com/addBook.php',fd)
  }
}
