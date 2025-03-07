const apiUrl = 'http://localhost:3600';

export const environment = {
  production: false,
  baseUrl: 'http://localhost:4200/',
  grafanaUrl: 'http://localhost:3000/',

  apiUrls: {
    signIn: `${apiUrl}/auth/login`,
    logout: `${apiUrl}/auth/logout`,
    refresh: `${apiUrl}/auth/refresh`,
    accounts: `${apiUrl}/accounts`,
    cleanerTasks: `${apiUrl}/cleaner/tasks`,
    roomManagment: `${apiUrl}/rooms`,
    roomManagmentFilter: `${apiUrl}/rooms/filter`,
    orders: `${apiUrl}/orders`,
  },
};
