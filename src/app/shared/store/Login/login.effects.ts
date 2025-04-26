import { Injectable } from "@angular/core";
import { LOGIN_USER, loginusersuccess, LOGOUT_USER, logoutusersuccess } from "./login.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
 
import { map, exhaustMap, catchError, throwError } from "rxjs";
import { ILoginRequest } from "./login.model";
 
import { HttpErrorResponse } from "@angular/common/http";
import { ILogin } from "../../../models/ILogin";
import { LoginService } from "../../../services/login.service";
import { LocalStorageService } from "../../../services/local-storage.service";

@Injectable()
export class LoginEffects {
     effects$ = createEffect(() =>
        this.action$.pipe(
          ofType(LOGIN_USER),
          exhaustMap((request: ILoginRequest) => {
         
            return this.service.loginuser(request.username,request.password).pipe(
              
              map((resp) => {
               
                let info:ILogin = {
                  displayName: resp.name,
                  token: resp.token,
                  tokenExpireDate: resp.expire,
                  role: resp.role
                }
                this.localStorage.set("login",JSON.stringify(info));
                
                this.localStorage.set("lastUpdate", new Date());
                return loginusersuccess({data:info});
               
              }) 
            );
          })
        )
      );
  
      effectsOut$ = createEffect(() =>
        this.action$.pipe(
          ofType(LOGOUT_USER),
          exhaustMap((request: ILoginRequest) => {
         
            return this.service.logoutuser(request.username).pipe(
              map((resp) => {
                let info:ILogin = {
                  displayName: "",
                  token: "",
                  tokenExpireDate: new Date(),
                  role: ""
                }
                this.localStorage.remove("login");
                
                this.localStorage.set("lastUpdate", new Date());
                return logoutusersuccess({data:info});
               
              })
            );
          })
        )
      );

       constructor(
            private action$: Actions,
            private service: LoginService,
            private localStorage: LocalStorageService   
        ) {}
}