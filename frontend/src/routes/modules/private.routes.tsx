import { lazy } from "react";
import ProtectedRoute from "../ProtectedRoute";
import { ROUTES } from "../routes";
import HistoryPage from "../../pages/HistoryPage";
import Profile from "../../pages/Profile";
import Wallet from "../../pages/Wallet";

const Dashboard = lazy(() => import("../../pages/Dashboard"));

export const PrivateRoutes = [
  {
    path: ROUTES.DASHBOARD,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.HISTORY_TRANSACTION,
    element: (
      <ProtectedRoute>
        <HistoryPage />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.PROFILE,
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.WALLET,
    element: (
      <ProtectedRoute>
        <Wallet />
      </ProtectedRoute>
    ),
  }
]