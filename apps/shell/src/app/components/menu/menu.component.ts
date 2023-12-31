import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ItemComponent } from './item.component';

@Component({
  selector: 'pms-menu',
  standalone: true,
  imports: [ScrollPanelModule, NgFor, ItemComponent],
  template: ` <p-scrollPanel [style]="{ width: '100%', height: '100%' }">
    <div class="layout-menu-container" #menuPanel>
      <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
        <li
          app-menu
          class="layout-menuitem-category"
          *ngFor="let item of menuItems; let i = index"
          role="none"
        >
          <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">
            {{ item.label }}
          </div>
          <ul role="menu">
            <li
              pms-item
              *ngFor="let child of item.items"
              [item]="child"
              [index]="i"
              role="none"
            ></li>
          </ul>
        </li>
      </ul>
    </div>
  </p-scrollPanel>`,
})
export class MenuComponent {
  menuItems = [
    {
      label: 'Home',
      items: [
        { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
      ],
    },

    {
      label: 'Departments',
      items: [
        {
          label: 'Departments',
          icon: 'pi pi-fw pi-sitemap',
          routerLink: ['department'],
        },
      ],
    },
  ];

  onKeydown(event: KeyboardEvent) {
    const nodeElement = <HTMLDivElement>event.target;
    if (event.code === 'Enter' || event.code === 'Space') {
      nodeElement.click();
      event.preventDefault();
    }
  }
}
