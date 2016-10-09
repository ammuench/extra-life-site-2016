import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { TeampageComponent } from './teampage/teampage.component';
import { UserpageComponent } from './userpage/userpage.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'teem', component: TeampageComponent },
  {path: 'user', component: UserpageComponent}
];

export const routing = RouterModule.forRoot(routes);