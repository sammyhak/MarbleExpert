import About from "../pages/about";
import Contact from "../pages/contact";
import Gallery from "../pages/gallery";
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
      path: "/gallery",
      component: Gallery,
      name: "GALLERY"      
    },
    {
      path: "/contact",
      component: Contact,
      name: "CONTACT",
    },    
  ];
}
