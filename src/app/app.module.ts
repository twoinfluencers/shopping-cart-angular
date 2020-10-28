import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { PathNotFoundComponent } from './pages/path-not-found/path-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PathNotFoundComponent,
  ],
  imports: [
    BrowserModule,
   
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
