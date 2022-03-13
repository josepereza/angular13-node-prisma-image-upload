import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
miForm=this.fb.group({
  email:[''],
  password:['']
})

  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
  }
autentificacion(){
  this.authService.login(this.miForm.value)
  .subscribe((data:any)=>{
    this.authService.mitoken=data.token
    this.authService.usuario=data.user.name
    console.log(data)
    console.log('es el token',this.authService.mitoken)
    console.log('es el usuario',this.authService.usuario)
    this.authService.cambiousuario.next(data.user.name)

  })
 
}
}
