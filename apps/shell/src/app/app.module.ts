import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { ItemComponent } from './components/menu/item.component';
import { MenuService } from './services/menu.service';
import { NavComponent } from './shared/nav/nav.component';
import { SharedModulesModule } from '@pms/shared-modules';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
  ],
  imports: [
    MenuComponent,
    ItemComponent,
    SharedModulesModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [MenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
