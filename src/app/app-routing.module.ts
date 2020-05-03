import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { ConatctpageComponent } from './conatctpage/conatctpage.component';


const routes: Routes = [{
  path: "home" , component :HomeComponent
},
{
  path: "page" , component :PageComponent
},
{
  path: "contact" , component :ConatctpageComponent
},
{
  path: "" , redirectTo :'home', pathMatch :"full"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    useHash: true
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
