
import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

export class OpenwcMycard extends LitElement {
  static get properties() {
    return {
    name: { 
      type: String,
      reflect: true
    },
    fname: {
      position: {
        type: String,
      },
    },
    top: { type: String},
    imageDescription: { type: String},
    accentColor: {
      type: String,
      reflect: true,
      attribute: 'accent-color'
    }
  }
  };

  static get styles(){
    return css`
    :host([accent-color="blue"]) .card {
      background-color: blue;
      color: white;
    }
    :host([accent-color="red"]) .card {
      background-color: red;
      color: white;
    }
  .box {
    width: 200px;
    background-color: grey;
    border: 5px solid black;
    font-size: 10px;
    margin: 10px;
    cursor: pointer;
}
.card-image {
    width: 100%;
    height: auto;
}
.card-content {
    text-align: center;
}
.card-title {
    font-size: 1.2rem;
    margin-bottom: 3px;
}
.card-description.hidden {
    display: none;
}
.details-button {
    color: blue;
    font-weight: bold;
}
.wrapper {
}
.highlighted {
    background-color: red;
}
@media screen and (max-width: 799px) {
  .details-button {
    display: none;
  }`
};
  constructor() {
    super();
    this.accessColor = 'blue';
    this.header = 'My app';
  }
  render() {
    return html`
    <title>Card Duplication</title>
    <link rel="stylesheet" href="styles.css">

    <div class="wrapper" id="wrapper">
        <div class="box">
            <img src="https://elitesportsny.com/wp-content/uploads/2019/02/gettyimages-56613588-2-1362x766.jpg" alt="Rangers Card" class="card-image">
            <div class="card-content card">
                <h2 class="card-title">New York Rangers Stanley Cup</h2>
                <details><summary>Details</summary><slot></slot></details>
            </div>
        </div>
    </div>
    <meme-maker alt="New York Rangers" image-url="https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https%3A%2F%2Fbluelinestation.com%2Fwp-content%2Fuploads%2Fimagn-images%2F2017%2F07%2F12893669-850x560.jpeg" top-text="New York" bottom-text="Rangers">
</meme-maker>
    `;
    }
}
customElements.define('openwc-mycard', OpenwcMycard);