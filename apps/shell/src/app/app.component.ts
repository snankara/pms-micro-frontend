import { Component, OnInit, inject } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'pms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'PMS';

  private _primengConfig = inject(PrimeNGConfig);

  ngOnInit() {
    this._primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
  }
}
