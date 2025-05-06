import { importProvidersFrom, isDevMode, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';  
import { MainContentComponent } from './components/layout/main-content/main-content.component';

import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { AppState } from './shared/store/Global/AppState.model';
import { EffectsModule } from '@ngrx/effects';
import { AlbumEffects } from './shared/store/Albums/albums.effects';
import { LoginEffects } from './shared/store/Login/login.effects';
import { httpInterceptor } from './services/httpInterceptor';
import { HTTP_INTERCEPTORS,  HttpClientModule,  provideHttpClient } from '@angular/common/http';
import { IAppStateModel } from './shared/store/Global/App.state';
import { localStorageSync, rehydrateApplicationState } from 'ngrx-store-localstorage';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/albums/album/album.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FotoComponent } from './components/albums/foto/foto.component';
import { ThumbnailComponent } from './components/albums/thumbnail/thumbnail.component';
import { AlbumLightboxComponent } from './components/albums/album-lightbox/album-lightbox.component';

const INIT_ACTION = "@ngrx/store/init";

export const httpInterceptorProvider: Provider =
  { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true };

export function localStorageSyncReducer(reducer: ActionReducer<IAppStateModel>): ActionReducer<IAppStateModel> {
  return function(state, action : any) {
    
 
    const keys = ['login','lastUpdate'];
   
    let clearErrOnIinit : boolean = false;
    if (action.type === INIT_ACTION){
     
     
      const rehydratedState = rehydrateApplicationState(keys, localStorage, k => k, true);
      
      if(rehydratedState.login != null && rehydratedState.login.login != null)
        {
          var oggi : Date = new Date();
          var tokenExpireDate : Date = rehydratedState.login.login.tokenExpireDate;
          console.log(rehydratedState.login)
          console.log("oggi: " + oggi);
          console.log("tokenExpireDate: "+ tokenExpireDate);

          console.log("token scaduto: " + (oggi > tokenExpireDate));
        }

      if(rehydratedState.login == null ||  rehydratedState.login == "")
        console.log("login")

      if(rehydratedState.login != null && rehydratedState.login.tokenExpireDate!=null){
        console.log(rehydratedState.login.tokenExpireDate)
      }
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
    MainContentComponent, AlbumsComponent, AlbumComponent, FotoComponent, ThumbnailComponent, AlbumLightboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule, 
    StoreModule.forRoot(AppState, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AlbumEffects, LoginEffects])
    
  ],
  providers: [
    
    importProvidersFrom(HttpClientModule),
    httpInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
