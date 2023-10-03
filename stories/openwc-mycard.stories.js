import { html } from 'lit';
import '../src/openwc-mycard.js';

export default {
  title: 'OpenwcMycard',
  component: 'openwc-mycard',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <openwc-mycard
      style="--openwc-mycard-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </openwc-mycard>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
