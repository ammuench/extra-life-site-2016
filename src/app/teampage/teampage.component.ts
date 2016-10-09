import { Component, OnInit } from '@angular/core';

import { TeamMember } from '../interfaces/team-member';
import { ExtraLifeApiService } from '../elapi/extra-life-api.service';

@Component({
  selector: 'app-teampage',
  templateUrl: './teampage.component.html',
  styleUrls: ['./teampage.component.scss']
})

export class TeampageComponent implements OnInit {

  rosterList: TeamMember[];

  constructor(private _elApi: ExtraLifeApiService) { }

  ngOnInit() {
    this._elApi.getTeamMembers(29978)
      .subscribe(
        roster => this.rosterList = roster
      );
  }

}
