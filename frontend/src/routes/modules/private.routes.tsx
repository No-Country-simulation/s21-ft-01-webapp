import ProtectedRoute from "../ProtectedRoute";
import { ROUTES } from "../routes";
import HistoryPage from "../../pages/HistoryPage";
import Dashboard from "../../pages/Dashboard";



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
  }
]