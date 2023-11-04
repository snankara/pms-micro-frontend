/* eslint-disable @angular-eslint/component-selector */

import { NavigationEnd, Router } from '@angular/router';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Subscription, filter } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: '[pms-item]',
  template: `
  <ng-container>
    <a [attr.href]="item.url" (click)="itemClick($event)" [ngClass]="item.class"
      *ngIf="(!item.routerLink || item.items) && item.visible !== false"
      [attr.target]="item.target" [attr.tabindex]="0" [attr.aria-label]="item.label" role="menuitem" pRipple>
      <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
      <span>{{item.label}}</span>
      <span class="menuitem-badge" *ngIf="item.badge">{{item.badge}}</span>
      <i class="pi pi-fw {{active ? 'pi-angle-up' : 'pi-angle-down'}} ml-auto" *ngIf="item.items"></i>
    </a>
    <a (click)="itemClick($event)" *ngIf="(item.routerLink && !item.items) && item.visible !== false" [ngClass]="item.class"
      [routerLink]="item.routerLink" routerLinkActive="active-menuitem-routerlink router-link-exact-active"
      [routerLinkActiveOptions]="{exact: !item.preventExact}" [attr.target]="item.target" [attr.tabindex]="0" [attr.aria-label]="item.label" role="menuitem" pRipple>
      <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
      <span>{{item.label}}</span>
      <span class="p-tag p-badge ml-auto" *ngIf="item.badge">{{item.badge}}</span>
      <i class="pi pi-fw {{active ? 'pi-angle-up' : 'pi-angle-down'}} ml-auto" *ngIf="item.items"></i>
    </a>
    <ul *ngIf="(item.items && active) && item.visible !== false" [@children]="(active ? 'visibleAnimated' : 'hiddenAnimated')" role="menu">
      <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
        <li pms-item [item]="child" [index]="i" [parentKey]="key" [class]="child.badgeClass" role="none"></li>
      </ng-template>
    </ul>
  </ng-container>
`,
})
export class ItemComponent implements OnInit {

  @Input() item: any;

  @Input() index!: number;

  @Input() root!: boolean;

  @Input() parentKey!: string;

  active = false;

  key!: string;

  private _router = inject(Router);
  private _menuService = inject(MenuService);
  private _dashboardComponent = inject(DashboardComponent);

  constructor(){
    this._menuService.menuSource$
    .pipe(takeUntilDestroyed())
    .subscribe(key => {
      if (this.active && this.key !== key && key.indexOf(this.key) !== 0)
        this.active = false;
    });

    this._menuService.resetSource$
    .pipe(takeUntilDestroyed())
    .subscribe(() => {
      this.active = false;
    });

    this._router.events
    .pipe(filter(event => event instanceof NavigationEnd), takeUntilDestroyed())
    .subscribe(() => {
      if (this.item.routerLink) this.updateActiveStateFromRoute();
      else this.active = false;
    });

  }

  ngOnInit(): void {
    if (this.item.routerLink) 
      this.updateActiveStateFromRoute();

    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
  }

  updateActiveStateFromRoute() {
    this.active = this._router.isActive(this.item.routerLink[0], this.item.items ? false : true);
  }

  itemClick(event: Event) {
    event.stopPropagation();

    if (this.item.disabled) {
      event.preventDefault();
      return;
    }

    this._menuService.onMenuStateChange(this.key);

    if (this.item.command)
      this.item.command({ originalEvent: event, item: this.item });

    if (this.item.items)
      this.active = !this.active;
     else {
      this.active = true;
      this._dashboardComponent.menuActiveMobile = false;

      if (this._dashboardComponent.isDesktop() && this._dashboardComponent.isOverlay())
        this._dashboardComponent.menuInactiveDesktop = true;
    }
  }
}


