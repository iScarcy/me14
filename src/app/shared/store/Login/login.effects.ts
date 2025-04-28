import { inject, Injectable } from "@angular/core";
import { LOGIN_USER, loginusersuccess, REFRESH_TOKEN } from "./login.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
 
import { map, exhaustMap, catchError, throwError } from "rxjs";
import { ILoginRequest } from "./login.model";
 
import { HttpErrorResponse } from "@angular/common/http";
import { ILogin } from "../../../models/ILogin";
import { AuthService } from "../../../services/auth.service";
import { LocalStorageService } from "../../../services/local-storage.service";
import { domain_user, secret_id } from "../../../app.constant";

@Injectable()
export class LoginEffects {
  
  private action$ = inject(Actions)
  

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
          ofType(REFRESH_TOKEN),
          exhaustMap(() => {
            
               
            return this.service.refresh_token(domain_user, secret_id).pipe(
              
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
 
       constructor(
            private service: AuthService,
            private localStorage: LocalStorageService   
        ) {}
}