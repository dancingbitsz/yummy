import HomePage from "../modules/HomePage";
import AboutPage from "../modules/AboutPage";
import MenuItemsPage from "../modules/MenuItemsPage";
import EventsPage from "../modules/EventsPage";
import ChefsPage from "../modules/ChefsPage";
import GalleryPage from "../modules/GalleryPage";

const privateRoutes = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/about",
    element: AboutPage,
  },
  {
    path: "/menu",
    element: MenuItemsPage,
  },
  {
    path: "/events",
    element: EventsPage,
  },
  {
    path: "/chefs",
    element: ChefsPage,
  },
  {
    path: "/gallery",
    element: GalleryPage,
  },
];

export default privateRoutes;
