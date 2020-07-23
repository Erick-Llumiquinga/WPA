import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule ,Apollo} from 'apollo-angular';//apollo
import { HttpLinkModule,HttpLink } from 'apollo-angular-link-http'//apollo
import { AppComponent } from './app.component';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {appRoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    FormsModule,
    ReactiveFormsModule,
    appRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    apollo:Apollo,
    httpLink:HttpLink
  ){
    apollo.create({
      link:httpLink.create({uri:'http://localhost:3500/gql/'}),//url Servidor
      cache:new InMemoryCache()
    })
  }
}
