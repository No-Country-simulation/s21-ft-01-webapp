import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useAuthStore } from "../store/AuthStore";

// const isAuthenticated = (data: { isAuthenticated?: boolean } | undefined, isLoading: boolean) => {
//   // TODO: Check if user is authenticated
//   if (isLoading) return <p>Cargando...</p>;
//   if (!data?.isAuthenticated) return false;
//   return true
// };

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {

  const user = useAuthStore((state) => state.user);

  //return user ? children : <Navigate to="/login" />;
  return children
};

export default ProtectedRoute;
