import { GetUsers } from './../../store/actions/user.actions';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Router } from '@angular/router';
import { selectUserList } from 'src/app/store/selectors/user.selectors';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersContainerComponent implements OnInit {

  constructor(private _store: Store<IAppState>, private _router: Router) { }

  users$= this._store.pipe(select(selectUserList));

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }

  navigateToUser(id: number)
  {
    this._router.navigate(['user',id]);
  }

}
