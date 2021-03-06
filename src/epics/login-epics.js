import * as types from '../config/types';
import { fbLoginCompleted, fbLoginFailed, fbLoginRedirect } from '../actions/login-actions';
import { fbLoginObservable, fbFetchObservable } from '../observables/login-observables';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export const fbLoginStartEpic = (action$, store) => {
  return action$
    .filter(action => action.type === types.FB_LOGIN_STARTED)
    .mergeMap(action => fbLoginObservable()
      .catch(err => Observable.of(fbLoginFailed(err)))
    )
    .mergeMap(data => fbFetchObservable(data.authResponse)
      .map(fbLoginCompleted)
      .catch(err => Observable.of(fbLoginFailed(err)))
    )
}

export const fbLoginCompletedEpic = (action$, store) => {
  return action$
    .filter(action => action.type === types.FB_LOGIN_COMPLETED)
    .map(fbLoginRedirect)
}
