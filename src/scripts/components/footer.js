class FooterComponent extends HTMLElement {
  constructor() {
    super();

    // Membuat Shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });

    // Menetapkan konten HTML dan CSS menggunakan this.innerHTML
    shadow.innerHTML = `
      <style>
        footer {
          height: 100px;
          position: relative;
          bottom: 0;
        }
        
        footer img {
          position: absolute;
          z-index: -999;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) brightness(40%);
        }
        
        footer p {
          position: absolute;
          text-align: center;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          min-width: 80%;
          color: white;
          font-size: 18px;
        }
      </style>
      <footer>
        <picture>
          <source media="(max-width:480px)" srcset="./images/heros/hero-image_2-small.jpg">
          <img src="./images/heros/hero-image_2-large.jpg" alt="background">
        </picture>
        <p>Copyright &copy; 2024 - FoodJourney</p>
      </footer>
    `;
  }
}

// Mendefinisikan custom element
customElements.define('footer-component', FooterComponent);
