import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import ServicesPage from "../pages/services";

export default function RoutesMain() {
  return [
    {
      path: "/",
      component: Home,
      name: "MAIN",
    },
    {
      path: "/services",
      component: ServicesPage,
      name: "OUR SERVICES",
    },
    {
      path: "/about",
      component: About,
      name: "ABOUT US",
    },
    {
      path: "/contact",
      component: Contact,
      name: "CONTACT",
    },
  ];
}
