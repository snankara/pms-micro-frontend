import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ItemComponent } from './components/menu/item.component';
import { MenuService } from './services/menu.service';
import { NavComponent } from './shared/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    ItemComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    ScrollPanelModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [MenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
