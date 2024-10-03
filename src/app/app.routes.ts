import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    
    {path:'home', component:HomeComponent},
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'portfolio', component:PortfolioComponent},
    {path:'**', component:NotfoundComponent},
    

    



];
