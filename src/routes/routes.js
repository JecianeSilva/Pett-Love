import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const PetsLove = lazy(() => import("../pages/pets"));

const routes = [
  {
    path: "/",
    exact: true,
    name: "home",
    component: Home
  },
  {
    path: "/pets-love",
    exact: true,
    name: "Pets love",
    component: PetsLove
  },
];

export default routes;
