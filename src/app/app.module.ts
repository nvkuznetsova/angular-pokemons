import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';

import { PokemonsModule } from './pokemons/pokemons.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { PokemonsEffectsEffects } from './store/pokemons/effects/pokemons-effects.effects';
import { StoreModule } from '@ngrx/store';
import { reducerProvider, REDUCERS_TOKEN } from './store';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    StoreModule.forRoot(REDUCERS_TOKEN),
    EffectsModule.forRoot([PokemonsEffectsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [reducerProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
