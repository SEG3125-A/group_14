import Home from './pages/Home';
import Contact from './pages/Contact';
import Collections from './pages/Collections';
import About from './pages/About';
import Blog from './pages/Blog';
import Events from './pages/Events';

const routes = [
  { path: '/home', component: <Home />, exact: true },
  { path: '/collections', component: <Collections /> },
  { path: '/about', component: <About /> },
  { path: '/events', component: <Events /> },
  { path: '/blog', component: <Blog /> },
  { path: '/contact', component: <Contact /> },
];

export default routes;
