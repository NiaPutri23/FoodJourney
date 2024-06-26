import restoDbSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import { createRestoDetailTemplate } from "../templates/template-creator";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import FavoriteRestoIdb from "../../data/favorite-restaurant-idb";

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await restoDbSource.detailResto(url.id);
    console.log(resto);

    // tampilkan resto dalam DOM
    const restoContainer = document.querySelector("#resto");
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteRestos: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        address: resto.address,
        city: resto.city,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
