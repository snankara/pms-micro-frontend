import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forChild(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
