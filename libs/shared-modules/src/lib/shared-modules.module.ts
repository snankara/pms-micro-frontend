import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  imports: [],
  exports: [
    CommonModule, 
    ButtonModule,
    SkeletonModule
  ]
})
export class SharedModulesModule {}
