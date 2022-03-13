import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-login';
  usuario:string=''
  public isMenuCollapsed = true;
  constructor(public authService:AuthService){

  }
  ngOnInit(): void {
    this.authService.cambiousuario.subscribe((data:any)=>{
      this.usuario=data;
    })
  }
  logout(){
    this.usuario='';
    this.authService.mitoken=''
  }
  
}
