
import { LitElement, html, css } from 'lit';

class OpenwcMycard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
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
  }
}
  `;
  constructor() {
    super();
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
                <p class="card-description hidden">
                    On this card, there is an iconic picture of the New York Rangers Stanley Cup win in 1994. This was the last time they won the Stanley Cup, where they bested the Vancouver Canucks in a seven-game series. They won with an electric goal in overtime of game 7, which resulted in a final score of 2-1 Rangers.
                </p>
                <a href="#" class="details-button">Details</a>
                <button class="color-toggle-button">Toggle Color</button>
                <button class="change-title-button">Change Title</button>
            </div>
        </div>
    </div>
    <button id="btn">Add Another Card</button>
    <button id="deleteBtn">Delete Last Card</button>
    `;
    }
}
customElements.define('openwc-mycard', OpenwcMycard);