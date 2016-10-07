import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { TeamMember } from '../interfaces/team-member';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExtraLifeApiService {

  constructor(private _http: Http) { };

  getTeamMembers(): TeamMember[] {
    return [
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
      },
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
      },
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
    ];
  };

  getTeamMembersObservable(id: number): Observable<TeamMember[]> {
    return this._http.get('http://localhost:8080/getTeam/' + id)
                      .map(this._teamRosterHandler)
                      .catch(this._errorHandler);
  };

  private _teamRosterHandler (res: Response) {
    let body = res.json();
    return body.members;
  }

  private _errorHandler (error: any) {
    console.log(error);
    return Observable.throw('Had Error');
  }
}
