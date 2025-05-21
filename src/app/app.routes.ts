import { Routes } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { ProductsComponent } from './site/products/products.component';
import { AboutComponent } from './site/about/about.component';
import { ContactComponent } from './site/contact/contact.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HomeAdmComponent } from './admin/home-adm/home-adm.component';
import { GestprodComponent } from './admin/gestprod/gestprod.component';
import { PagenotfoundComponent } from './site/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: '', redirectTo:'/products',pathMatch:'full' },
  { path: '', component: HomeComponent,children:[
    { path: 'products', component: ProductsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
  ] },
  { path: 'admin', component: AdminComponent,children:[
    { path: 'home', component: HomeAdmComponent },
    { path: 'gestprod', component: GestprodComponent },
]},
{path:'**',component:PagenotfoundComponent}

]
