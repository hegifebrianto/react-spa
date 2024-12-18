
import ArchivePage from '../pages/ArchivePage';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import AddNewPage from '../pages/AddNewPage';

const customRoutes = [
  {
    path: '/',
    element: HomePage,
  },
  {
    path: '/archives',
    element: ArchivePage,
  },
  {
    path: '/notes/:id',
    element: DetailPage,
  },
  {
    path: '/notes/new',
    element: AddNewPage,
  },
  
];

export default customRoutes;
