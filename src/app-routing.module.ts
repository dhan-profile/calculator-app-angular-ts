import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualComponent } from './app/manual/manual.component';
import { AboutComponent } from './app/about/about.component';
import { HomeComponent } from './app/home/home.component';
const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'manual',component:ManualComponent},
    {path:'about',component:AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }