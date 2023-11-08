import { DashboardItem } from '@core/models/dashboard';

export const DASHBOARD_ITEMS: DashboardItem[] = [
  {
    img: '/assets/accounts-managment.svg',
    name: 'Accounts management',
    route: '/accounts',
    positions: ['Admin'],
  },
  {
    img: '/assets/room-managment.svg',
    name: 'Rooms management',
    route: '/room-managment',
    positions: ['Admin', 'Receptionist'],
  },
  {
    img: '/assets/cleaning-managment.svg',
    name: 'Cleaning management',
    route: '/cleaner-tasks',
    positions: ['Admin', 'Cleaner'],
  },
  {
    img: '/assets/statistics.svg',
    name: 'Statistics',
    route: '/statistics',
    positions: ['Admin'],
  },
];
