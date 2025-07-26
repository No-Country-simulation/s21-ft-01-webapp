
export const ROUTES = {
  // Public Routes
  LOGIN: '/login',
  REGISTER: '/register',
  HOME: '/',
  NOTFOUND: '*',
  ABOUT: '/about',

  // Privates Routes
  DASHBOARD: '/dashboard',
  WALLET: '/wallet',
  HISTORY_TRANSACTION: '/transaction',
  PROFILE: '/profile',
  SETTINGS: '/settings',
} as const;

export type TypeRoutes = keyof typeof ROUTES;
