import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';

import { Team } from '../interfaces/team';
import { ExtraLifeApiService } from '../elapi/extra-life-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterContentInit {

  dataLoaded: Boolean = false;
  teamInfo: Team;
  apiInterval: any;

  donationPercentage(current: number, goal: number): Object {
    const percent = (current / goal) * 100;
    const styleObj = {
      width: percent + '%'
    }
    return styleObj;
  };

  constructor(private _elApi: ExtraLifeApiService) { }

  ngOnInit() {
    //TODO: Add call to get current donation values, set it to update every 30 seconds
    this._elApi.getTeamInfo(29978)
      .subscribe(
        data => {
          this.teamInfo = data;
          this.dataLoaded = true;
        }
      );
  }

  ngAfterContentInit() {
    this.apiInterval = setInterval(() => {
      this._elApi.getTeamInfo(29978)
        .subscribe(
          data => {
            this.teamInfo = data;
            this.dataLoaded = true;
          }
        );
    }, 5000);
  }

  ngOnDestroy() {
    clearImmediate(this.apiInterval);
  }

}
