import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http : HttpClient) {   }

  public login(loginObject:any) {

    console.log(loginObject);
    
      return this.http.post('http://localhost:9191/login', loginObject);        
  }

}
