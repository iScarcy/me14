import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';  
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { MatCarouselModule } from 'ng-mat-carousel';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { AppState } from './shared/store/Global/AppState.model';
import { EffectsModule } from '@ngrx/effects';
import { AlbumEffects } from './shared/store/Albums/albums.effects';
import { LoginEffects } from './shared/store/Login/login.effects';
import { httpInterceptor } from './services/httpInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IAppStateModel } from './shared/store/Global/App.state';
import { localStorageSync, rehydrateApplicationState } from 'ngrx-store-localstorage';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const INIT_ACTION = "@ngrx/store/init";

export function localStorageSyncReducer(reducer: ActionReducer<IAppStateModel>): ActionReducer<IAppStateModel> {
  return function(state, action : any) {
    
 debugger;
    const keys = ['login','lastUpdate'];

    let clearErrOnIinit : boolean = false;
    if (action.type === INIT_ACTION){
     
     
      const rehydratedState = rehydrateApplicationState(keys, localStorage, k => k, true);
     
      if(rehydratedState.login != null && rehydratedState.login.login.token=="err")
        clearErrOnIinit = true;
    }
 
    let xapp = localStorageSync({
      keys,
      rehydrate: true,
    })(reducer)(state, action);
   
    if(clearErrOnIinit)
      xapp.login.login.token = "";
    return xapp;
  };
}



export const metaReducers: MetaReducer<IAppStateModel, any>[] = [localStorageSyncReducer];
 

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,  
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot(AppState, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AlbumEffects, LoginEffects])
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true},
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
