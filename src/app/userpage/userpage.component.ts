import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ExtraLifeApiService } from '../elapi/extra-life-api.service';
import { User } from '../interfaces/user';
import { Donations } from '../interfaces/donations';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent implements OnInit {
  private _userID: number;
  isLoaded: Boolean = false;
  userDonations: Donations[] = [];
  userInfo: User;

  donationPercentage(current: number, goal: number): Object {
    const percent = (current / goal) * 100;
    const styleObj = {
      width: percent + '%'
    }
    return styleObj;
  };

  nameFormatter(name: string): string {
    if (name === null) {
      return 'Anonymous';
    } else {
      return name;
    }
  };

  amountFormatter(amt: number): string {
    if (amt === null) {
      return '';
    } else {
      const amtString = 'donated $' + amt;
      return amtString;
    }
  }

  constructor(private _elApi: ExtraLifeApiService, private _route: ActivatedRoute) { };

  ngOnInit() {
    this._route.params
      .subscribe(
      id => {
        this._userID = +id['id'];
      }
      )
    this._elApi.getUserForkJoin(this._userID)
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
