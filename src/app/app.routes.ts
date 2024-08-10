import { Routes } from '@angular/router';
import { HomeComponent } from './CustomComponents/home/home.component';
import { AboutComponent } from './CustomComponents/about/about.component';

export const routes: Routes = [
        { path: '', component: HomeComponent },
        { path: '/about', component: AboutComponent }
      ];
