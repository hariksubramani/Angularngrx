import { IUserHttp } from './../../models/http-models/user-http.interface';
import { GetUser, EUserActions, GetUserSuccess, GetUsers, GetUsersSuccess } from './../actions/user.actions';
import { IAppState } from './../state/app.state';
import {  Store, select } from '@ngrx/store';
import { UserService } from './../../services/user.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { selectUserList } from '../selectors/user.selectors';
import { Effect, ofType, Actions } from '@ngrx/effects';

@Injectable()
export class UserEffects {


  constructor(private _userService: UserService, private _action$: Actions, private _store: Store<IAppState>){}

  @Effect()
  getUser$ = this._action$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action=> action.type),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) =>{
const selectedUser = users.filter(user => user.id === +id)[0];
return of(new GetUserSuccess(selectedUser))
    })
  );


  @Effect()
  getUsers$ = this._action$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(()=> this._userService.getUsers()),
    switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
  );
}
