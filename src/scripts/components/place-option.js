class PlacesComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
      .content{
        padding: 0 32px 32px 32px; 
      }
      
      .content .title{
        text-align: center;
      }
      
      .content .place-container {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none; 
        justify-content: center;
        gap: 15px;
        max-width: 600px;
        margin: 0 auto; 
      }
      
      .content .place-container .place-option {
        padding: 10px 15px;
        min-width: 70px;
        background-color: white;
        border: 1px solid #1e1e1e;
        border-radius: 20px;
        text-align: center;
        white-space: wrap; 
        transition: transform 0.3s ease;
      }

      @media screen and (max-width: 200px) {
        *{
          padding: 0;
          margin: 0;
        }

        * h1{
          font-size: 10vw;
        }
        
        .content{
          padding: 0; 
        }
        
        .content .title{
          text-align: center;
          font-size: 10vw;
        }
                
        .content .place-container .place-option {
          padding: 10vw 15vw;
          font-size: 10vw;
          min-width: 0px;
        }
      }
      </style>

      <div class="content">
        <h1 class="title"><span>Decide Places</span> To Go</h1>
        <ul class="place-container">
          <li class="place-option">Jakarta Pusat</li>
          <li class="place-option">Jakarta Selatan</li>
          <li class="place-option">Bogor Kota</li>
          <li class="place-option">Depok</li>
          <li class="place-option">Tangerang</li>
          <li class="place-option">Dramaga, Bogor</li>
          <li class="place-option">Cikini</li>
          <li class="place-option">Pasar Minggu</li>
        </ul>
      </div>
    `;
  }
}

customElements.define('places-option', PlacesComponent);
