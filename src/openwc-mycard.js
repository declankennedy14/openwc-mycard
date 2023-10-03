import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class OpenwcMycard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  .App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  .color {
    background-color: red;
  }
  body {
    background-color: white;
    
  }
  .card { 
    background-color: grey;
    border-style: solid;
    border-width: 5px;
    border-color: black;
    border-radius: 10px;
    width: 400px;
    text-align: center;
    color: white;
  }
  img {
    margin: 0px;
    width: 100%;
    height: auto;
  }
  .btn-wrapper {
    margin: 24px;
  }
  .btn-wrapper button {
    font-size: 24px;
    color: blue;
    background-color: white;
  }
  .btn-wrapper button:hover {
    color: red;
    background-color: blue;
    
  }
  .header {
    font-size: 20px;
    margin: 25px;
  }
  .card-description.hidden{
    display: none;
  }
  .paragraph {
    font-size: 20px;
    margin: 25px;
    color: white;
  }
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
      <div class="wrapper" id="wrapper">
      <div className="card">
        <h1>Hello World!</h1>
        <img src="https://elitesportsny.com/wp-content/uploads/2019/02/gettyimages-56613588-2-1362x766.jpg" alt="Rangers" />
        <div className="paragraph">
        <h1>New York Rangers Stanley Cup</h1>
        <p class="card-description">On this card, there is an iconic picture of the New York Rangers Stanley Cup win in 1994. This was the last time they won the Stanley Cup, where they bested the Vancouver Canucks in a seven-game series. They won with an electric goal in overtime of game 7, which resulted in a final score of 2-1 Rangers.</p>
        </div>
        <div class="btn-wrapper">
        <a href="https://hax.psu.edu">
   <button>Details</button>
   </a>
   </div>
      </div>
      </div>
      </main>
      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
customElements.define('openwc-mycard', OpenwcMycard);