import restoDbSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';
import '../../components/place-option';

const Main = {
  async render() {
    return `
      <section id="home" class="welcome">
        <picture class="background">
          <source media="(max-width:480px)" srcset="./images/heros/hero-image_2-small.jpg">
          <img src="./images/heros/hero-image_2-large.jpg" alt="background">
        </picture>
        <div class="welcome-message grid">
          <img class="logo" src="./images/logo.png" alt="logo FoodJourney" />
          <h1>THE GUIDE FOR YOUR CULINARY JOURNEY!</h1>
          <p class="caption">
            Welcome, culinary enthusiasts! Join us on an
            <b>unforgettable journey of flavors and tastes.</b> Let's explore the
            best restaurants, indulge in delicious cuisine, and share inspiring
            experiences.
            <b>Get ready to tantalize your taste buds with FoodJourney!</b>
          </p>
        </div>
      </section>
      <div class="content">
        <h1 class="title"><span>Explore</span> Restaurant</h1>
        <div id="restos" class="restos"></div>
        <a class="seeMore" href="#/explore" style="padding: 15px;">See More</a>
      </div>
      <places-option></places-option>
    `;
  },

  async afterRender() {
    const restos = await restoDbSource.restoList();
    const restosContainer = document.querySelector('#restos');
    restos.slice(0, 5).forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Main;
