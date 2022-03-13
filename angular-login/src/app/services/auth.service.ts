import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public mitoken:string=''
public usuario:string=''
cambiousuario = new Subject<number>();
  constructor(private http:HttpClient   ) { }

  login(dato:any){
    return this.http.post('http://localhost:3000/users/singin',dato)
    

  }
  listado(){
    return this.http.get('http://localhost:3000/users/listado')
  }
  crear(dato:any){
    console.log(dato)
   return this.http.post('http://localhost:3000/users/singup',dato)
  }
}
