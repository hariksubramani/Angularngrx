import { IConfig } from './../../models/config.interface';
import { EConfigActions, GetConfigSuccess } from './../actions/config.actions';
import { ConfigService } from './../../services/config.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { GetConfig } from '../actions/config.actions';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ConfigEffects {

  constructor(private _configService: ConfigService, private actions$: Actions){}


@Effect()
getConfig$ = this.actions$.pipe(
 ofType<GetConfig>(EConfigActions.GetConfig),
 switchMap(() => this._configService.getConfig()),
 switchMap((config: IConfig) => {
   return of(new GetConfigSuccess(config));
 })

);

}
