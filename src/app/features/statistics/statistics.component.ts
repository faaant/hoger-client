import { Component } from '@angular/core';
import {
  ChartLoaderState,
  LoadingCharts,
} from '@core/models/statistics/statistics.models';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  isLoadig: ChartLoaderState = {
    balcony: true,
    capacity: true,
  };

  onLoad(chart: LoadingCharts) {
    this.isLoadig[chart] = false;
  }
}
