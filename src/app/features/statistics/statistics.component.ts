import { Component } from '@angular/core';
import {
  ChartLoaderState,
  LoadingCharts,
} from '@core/models/statistics/statistics.models';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  grafanaUrl = environment.grafanaUrl;

  isLoadig: ChartLoaderState = {
    balcony: true,
    capacity: true,
  };

  onLoad(chart: LoadingCharts) {
    this.isLoadig[chart] = false;
  }
}
