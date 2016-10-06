import { Component, OnInit } from '@angular/core';

import { TeamMember } from '../interfaces/team-member'

@Component({
  selector: 'app-teampage',
  templateUrl: './teampage.component.html',
  styleUrls: ['./teampage.component.scss']
})

export class TeampageComponent implements OnInit {

  rosterDummy: TeamMember[] = [
    {
      name: "Alex Muench",
      isTeamCaptain: true,
      raised: 0,
      URL: "http://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=219449",
      pID: 219449,
      image: "http://assets.donordrive.com/extralife/images/$avatars$/constituent_0C07ECD7-C293-34EB-45A3F7B77F8BA043.jpg"
    },
    {
      name: "michael majewski",
      isTeamCaptain: false,
      raised: 0,
      URL: "http://www.extra-life.org/index.cfm?fuseaction=donorDrive.participant&participantID=224474",
      pID: 224474,
      image: "http://static.donordrive.com/clients/extralife/img/avatar-constituent-default.gif"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
