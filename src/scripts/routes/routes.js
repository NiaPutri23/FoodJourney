import Explore from '../views/pages/explore';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Main from '../views/pages/main';

const routes = {
  '/': Main,
  '/explore': Explore,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
