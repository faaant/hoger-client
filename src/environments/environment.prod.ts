const apiUrl = 'https://hoger-server.onrender.com';

export const environment = {
  production: true,
  baseUrl: 'http://localhost:4200/',
  grafanaUrl: 'https://hoger-grafana.onrender.com',

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
