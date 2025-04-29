import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
import { Store } from '@ngrx/store';
import { AppStateModel } from '../shared/store/Global/App.state';
import { refreshtoken } from '../shared/store/Login/login.actions';
import { LocalStorageService } from './local-storage.service';
import { rehydrateApplicationState } from 'ngrx-store-localstorage';

@Injectable()
export class httpInterceptor implements HttpInterceptor {
    constructor(private _store: Store<AppStateModel>, private _localStorage: LocalStorageService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        console.log("int_")
       
        return next.handle(request).pipe(
            catchError(err => {
                

                debugger;
                if ([401, 403].includes(err.status) ) {
                    this._store.dispatch(refreshtoken())
                }
                
                if(err.status == 0 && err.statusText == "Unknown Error"){
                    this.refreshToken();
                }
               
                const error = err.error?.message || err.statusText;
                console.error(err);
                return throwError(() => error);
            })
        );
    }

    refreshToken(){
          
       const keys = ['login','lastUpdate'];
             
        const rehydratedState = rehydrateApplicationState(keys, localStorage, k => k, true);
        
        if(rehydratedState.login != null && rehydratedState.login.login != null)
        {
            var oggi : Date = new Date();
            var tokenExpireDate : Date = rehydratedState.login.login.tokenExpireDate;
            console.log(rehydratedState.login)
            console.log("oggi: " + oggi);
            console.log("tokenExpireDate: "+ tokenExpireDate);

            console.log("token scaduto: " + (oggi > tokenExpireDate));
            this._store.dispatch(refreshtoken())
        }

      
    }
}