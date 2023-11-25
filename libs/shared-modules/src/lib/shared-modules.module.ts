import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [],
  exports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    SkeletonModule
  ]
})
export class SharedModulesModule {}
