import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pms-list',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {}
