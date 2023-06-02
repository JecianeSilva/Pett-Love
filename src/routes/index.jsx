import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "../components/Loading";

import routes from "./routes";

const Layout = () => {
  return (
    <Suspense fallback={<Loading />}>
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.component />}
                />
            ))}
        </Routes>
    </Suspense>
  );
};

export default Layout;