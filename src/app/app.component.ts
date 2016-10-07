import { Component } from '@angular/core';

import { ExtraLifeApiService } from './elapi/extra-life-api.service';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ExtraLifeApiService]
})
export class AppComponent {
}
