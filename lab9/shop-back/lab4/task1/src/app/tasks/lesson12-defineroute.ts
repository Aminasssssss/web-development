import {Routes} from '@angular/router';

import {Home} from './lesson12-home';
import {User} from './lesson12-user';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: Home,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: User,
  },
];
