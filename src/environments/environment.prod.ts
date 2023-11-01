const apiUrl = 'http://worker:3600';

export const environment = {
  production: true,
  baseUrl: 'http://localhost:4200/',

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
