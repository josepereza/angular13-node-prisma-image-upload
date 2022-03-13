import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutasProtegidasGuard } from './guards/rutas-protegidas.guard';
import { ListadoComponent } from './pages/listado/listado.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path:'login', component:LoginComponent},
  {path:'listado', component:ListadoComponent, canActivate:[RutasProtegidasGuard]},
  {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
