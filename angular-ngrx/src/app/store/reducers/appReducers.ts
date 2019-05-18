import { configReducers } from './config.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { userReducers } from './user.reducers';
import { routerReducer } from '@ngrx/router-store';


export const appReducers : ActionReducerMap<IAppState, any> = {

  router: routerReducer,
  users: userReducers,
  config: configReducers
};
