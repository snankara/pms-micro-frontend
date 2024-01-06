import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { SharedModulesModule } from '@pms/shared-modules';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forChild(appRoutes), 
    SharedModulesModule,
    ListComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
