import { GetUser } from './../../store/actions/user.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { ActivatedRoute } from '@angular/router';
import { selectSelectedUser } from 'src/app/store/selectors/user.selectors';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private _store: Store<IAppState>, private _route: ActivatedRoute) { }

  user$ = this._store.pipe(select(selectSelectedUser));

  ngOnInit() {
    this._store.dispatch(new GetUser(this._route.snapshot.params.id));
  }

}
