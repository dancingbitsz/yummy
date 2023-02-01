import HomePage from "../modules/HomePage";
import MenuItemsPage from "../modules/MenuItemsPage";
import ContactUs from "../modules/ContactUs";
import AboutPage from "../modules/AboutPage";

const privateRoutes = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/menu",
    element: MenuItemsPage,
  },
  {
    path: "/contact",
    element: ContactUs,
  },
  {
    path: "/about",
    element: AboutPage,
  },
];

export default privateRoutes;
