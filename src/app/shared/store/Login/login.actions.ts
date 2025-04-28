import { createAction, props } from "@ngrx/store";
import { ILoginRequest } from "./login.model";
import { ILogin } from "../../../models/ILogin";
 

export const LOGIN_USER     = '[Login page] login user'
export const LOGIN_SUCCESS  = '[Login page] login user success'
export const LOGIN_FAILD    = '[Login page] login user faild'
export const REFRESH_TOKEN        = '[Login page] refresh token'
export const REFRESH_TOKEN_SUCCESS = '[Login page] refresh token success'

export const loginuser=createAction(LOGIN_USER, props<{ username:string, password:string }>());
export const loginusersuccess=createAction(LOGIN_SUCCESS, props<{ data: ILogin}>());
export const loginuserfaild=createAction(LOGIN_FAILD);

export const refreshtoken=createAction(REFRESH_TOKEN);
