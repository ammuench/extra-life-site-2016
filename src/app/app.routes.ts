import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { TeampageComponent } from './teampage/teampage.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'teem', component: TeampageComponent }
];

export const routing = RouterModule.forRoot(routes);