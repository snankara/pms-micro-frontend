import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [
    /*Only mfe*/
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' })

    //RouterModule.forChild(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
