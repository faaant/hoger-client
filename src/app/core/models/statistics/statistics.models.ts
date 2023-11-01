export interface OrderDto {
  id: string;
  date: string;
  endDate: string;
  completed: boolean;
  roomId: string;
  name: string;
  surname: string;
  phone: string;
}

export type LoadingCharts = 'balcony' | 'capacity';
export interface ChartLoaderState {
  [key: string]: boolean;
}
