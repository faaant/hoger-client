import { Injectable } from '@angular/core';
import { BaseService } from '@core/services/base-service/base.service';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService extends BaseService {
  constructor() {
    super();
  }
}
