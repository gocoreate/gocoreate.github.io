import { createBrowserRouter } from 'react-router';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: Services },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
