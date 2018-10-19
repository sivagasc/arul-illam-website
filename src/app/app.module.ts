import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutedPages, AppRoutingModule } from './app.routes';
import { MaterialModule } from './app.material-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    RoutedPages
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
