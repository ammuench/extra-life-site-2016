import { Component, OnInit, Input } from '@angular/core';

import { TeamMember } from '../interfaces/team-member';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() member: TeamMember;

  constructor() { }

  ngOnInit() {
  }

}
