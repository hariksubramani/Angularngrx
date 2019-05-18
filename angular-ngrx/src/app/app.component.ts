import { GetConfig } from './store/actions/config.actions';
import { Component } from '@angular/core';
import { IAppState } from './store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectConfig } from './store/selectors/config.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ngrx';

  config$= this._store.pipe(select(selectConfig));

  constructor(private _store: Store<IAppState>){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._store.dispatch(new GetConfig());
  }
}
