import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  imageFile!: File
  miForm=this.fb.group({
    name:[''],
    email:[''],
    password:['']
  })
  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
  }
  onFileSelect(event:any) {
    console.log(event.target.files.length)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageFile = file
    }
  }
crearUsuario(){
  console.log(this.miForm.get('name')!.value)
  let formData = new FormData();
  formData.append('name', this.miForm.get('name')!.value);
  formData.append('email', this.miForm.get('email')!.value);
  formData.append('password', this.miForm.get('password')!.value);
  formData.append('image',this.imageFile);
  this.authService.crear(formData).subscribe(data=>{
    console.log(data)
  })
}
}
