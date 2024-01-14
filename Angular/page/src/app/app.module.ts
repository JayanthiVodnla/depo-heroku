import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { NotcomponentComponent } from './notcomponent/notcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    NotcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
