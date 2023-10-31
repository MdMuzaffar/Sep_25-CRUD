import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor(private http: HttpClient) { }

  addCartItemById(id:any):Observable<any>{
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users"+id);
  }
}
