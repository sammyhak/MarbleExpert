import About from "../pages/about";
import Home from "../pages/home";

export default function RoutesMain() {
  return [
    {
      path: "/",
      component: Home,
      name: "MAIN",
    },
    {
      path: "/services",
      component: Home,
      name: "OUR SERVICES",
    },
    {
      path: "/about",
      component: About,
      name: "ABOUT US",
    },
    {
      path: "/contact",
      component: Home,
      name: "CONTACT",
    },
  ];
}
