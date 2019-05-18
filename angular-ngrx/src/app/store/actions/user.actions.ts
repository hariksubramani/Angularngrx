import { IUser } from './../../models/user.interface';
import { Action } from '@ngrx/store';


export enum EUserActions  {

  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get user Success'
}

export class GetUsers implements Action {

public readonly type = EUserActions.GetUsers;

}

export class GetUsersSuccess implements Action{

  public readonly type = EUserActions.GetUsersSuccess;

  constructor(public payLoad: IUser[]){}
}


export class GetUser implements Action{
  public readonly type = EUserActions.GetUser;
  constructor(public payLoad: number){}
}

export class GetUserSuccess implements Action{
  public readonly type = EUserActions.GetUserSuccess;

  constructor(public payLoad: IUser) {}
}


export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
