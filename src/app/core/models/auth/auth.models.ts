export interface User {
  username: string;
  password: string;
  position?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  idToken: string;
}
