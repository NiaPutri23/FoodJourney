import restoDbSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Explore = {
  async render() {
    return `
    <div class="page-title">
      <picture class="backgorund">
        <source media="(max-width:480px)" srcset="./images/heros/hero-image_2-small.jpg">
        <img src="./images/heros/hero-image_2-large.jpg" alt="background">
      </picture>
      <h1 class="title">EXPLORE RESTAURANT</h1>
    </div>
    <div class="content">
      <div id="restos" class="restos">
      </div>
    </div>
      `;
  },

  async afterRender() {
    console.log('test');
    // Fungsi ini akan dipanggil setelah render()
    const restos = await restoDbSource.restoList();
    console.log(restos);

    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Explore;
