// kode untuk hasilkan string HTML dalam bentuk daftar restos dan detail resto
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
    <img class="resto-image lazyload" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="${restaurant.name}" />
    <h2 class="resto__name">${restaurant.name}</h2>
    <div class="resto-info">
      <p>📍<span>${restaurant.city}</span></p>
      <p>⭐️<span>${restaurant.rating}</span></p>
    </div>
    <div>
    <p style="text-align: center; font-size:25px"><b>${restaurant.address}</b></p>
    <div class="resto-desc">
      <h3>Description</h3>
      <p>${restaurant.description}</p>
    </div>    
    <div class="resto-menu">
      <h3>Menu</h3> 
      <div class="food-drink">
        <div class="food">
          <h4>🍔 FOOD</h4>
          <p>${restaurant.menus.foods.map((food) => `<p>▪️ ${food.name}</p>`).join('')}</p>
        </div>
        <div class="drink">
        <h4>🥤DRINK</h4>
        <p>${restaurant.menus.drinks.map((drink) => `<p>▪️ ${drink.name}</p>`).join('')}
        </div></p>
      </div>
    </div>
    <div class="review">
    <h3>Customer Review</h3> 
    ${restaurant.customerReviews.slice().reverse().map((customerReview) => `
        <div class="review-customer">
            <div class="review-name">
                <h4 tabindex="0" aria-label="Nama customer: ${customerReview.name}">${customerReview.name}</h4>
                <p tabindex="0" aria-label="Tanggal ulasan: ${customerReview.date}">${customerReview.date}</p>
            </div>
            <div class="review-message">
                <p tabindex="0" aria-label="Ulasan: ${customerReview.review}">${customerReview.review}</p>
            </div>
        </div>
    `).join('')}
    </div>
    </div>
`;

const createRestoItemTemplate = (restaurant) => `
    <div class="resto-item">
    <div class="resto-item-header">
    <img class="resto-item-header-image lazyload" alt="${restaurant.name || '-'}"
        data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}">
    <div class="resto-item-header-rating">
        <p>
        <span class="resto-item-header-rating-score">⭐️${restaurant.rating || '-'}</span>
        <span class="resto-item-header-rating-score">📍${restaurant.city || '-'}</span>
        </p>
    </div>
    </div>
    <div class="resto-item-content">
      <h3 class="resto__name"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
      <p>${restaurant.description || '-'}</p>
    </div>
    </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
