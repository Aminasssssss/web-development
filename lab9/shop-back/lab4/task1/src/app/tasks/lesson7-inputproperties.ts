import {Component} from '@angular/core';
import {User} from './lesson7-user';

@Component({
  selector: 'app-root',
  template: ` <app-user name="Amina" /> `,
  imports: [User],
})
export class App {}
