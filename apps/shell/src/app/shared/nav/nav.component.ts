import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pms-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() topMenuActive!: boolean;

  @Output() toggleMenuHandleEvent = new EventEmitter<Event>();

  @Output() toggleTopMenuHandleEvent = new EventEmitter<Event>();

  toggleMenuHandle(event: Event) {
    this.toggleMenuHandleEvent.emit(event);
  }

  toggleTopMenuHandle(event: Event) {
    this.toggleTopMenuHandleEvent.emit(event);
  }
}
