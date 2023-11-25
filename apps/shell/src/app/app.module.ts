import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { ItemComponent } from './components/menu/item.component';
import { MenuService } from './services/menu.service';
import { NavComponent } from './shared/nav/nav.component';
import { SharedModulesModule } from '@pms/shared-modules';
import { GlobalErrorHandler } from './errors/global-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
  ],
  imports: [
    MenuComponent,
    ItemComponent,
    BrowserModule,
    SharedModulesModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [
    MenuService,
    {
      provide: ErrorHandler, 
      useClass: GlobalErrorHandler,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
