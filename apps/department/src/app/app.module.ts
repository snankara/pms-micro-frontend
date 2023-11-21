import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { SharedModulesModule } from '@pms/shared-modules';

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forChild(appRoutes), SharedModulesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
