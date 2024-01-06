
import { Injectable } from '@angular/core';
import { ApiService } from '@pms/services';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends ApiService{
  protected override url = 'departments';
}
