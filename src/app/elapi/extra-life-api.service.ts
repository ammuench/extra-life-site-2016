import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../../environments/environment';

import { TeamMember } from '../interfaces/team-member';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExtraLifeApiService {

  constructor(private _http: Http) { };

  getTeamMembers(id: number): Observable<TeamMember[]> {
    return this._http.get(environment.url + 'getTeam/' + id)
      .map(this._teamRosterHandler)
      .catch(this._errorHandler);
  };

  getUserInfo(id: number): Observable<User> {
    return this._http.get(environment.url + 'getUser/' + id)
      .map(this._userInfoHandler)
      .catch(this._errorHandler);
  };

  getUserForkJoin(id: number): Observable<any[]> {
    return Observable.forkJoin(
      this._http.get(environment.url + 'getUser/' + id)
        .map(this._userInfoHandler)
        .catch(this._errorHandler),
      this._http.get(environment.url + 'getUserDonations/' + id)
        .map(this._userInfoHandler)
        .catch(this._errorHandler)
    )
  }

  private _teamRosterHandler(res: Response) {
    let body = res.json();
    return body.members;
  }

  private _userInfoHandler(res: Response) {
    let body = res.json();
    return body;
  }

  private _errorHandler(error: any) {
    console.log(error);
    return Observable.throw('Had Error');
  }
}
