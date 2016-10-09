import { Component, OnInit } from '@angular/core';

import { ExtraLifeApiService } from '../elapi/extra-life-api.service';
import { User } from '../interfaces/user';
import { Donations } from '../interfaces/donations';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent implements OnInit {
  isLoaded: Boolean = false;
  userDonations: Donations[] = [];
  userInfo: User;

  donationPercentage(current: number, goal: number): string {
      const percent = (current / goal) * 100;
      const styleString = 'width: ' + percent + '%;';
      return styleString;
  };

  constructor(private _elApi: ExtraLifeApiService) { };

  ngOnInit() {
    this._elApi.getUserForkJoin(219449)
      .subscribe(
        data => {
          this.userInfo = data[0];
          this.userDonations = data[1];
          this.isLoaded = true;
        },
        error => console.log(error)
      );
  };

}
