import FavoriteRestoIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestoView from './liked-restos/favorite-resto-search-view';
import FavoriteRestoShowPresenter from './liked-restos/favorite-resto-show-presenter';
import FavoriteRestoSearchPresenter from './liked-restos/favorite-resto-search-presenter';

const view = new FavoriteRestoView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteRestos: FavoriteRestoIdb });
  },
};

export default Favorite;
