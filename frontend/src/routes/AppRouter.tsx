import { PublicRoutes } from "./modules/public.routes";
import { PrivateRoutes } from "./modules/private.routes";
import { ROUTES } from "./routes";
import NotFound from "../pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          {PublicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          {PrivateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}


          <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
