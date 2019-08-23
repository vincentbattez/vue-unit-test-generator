import Hello from '../../src/components/Hello'
import VueTestGenerator from '../../../src/services/VueTestGenerator';

const myAutomaticTest = {
  component: Hello,
  props: [
    {
      name: 'named',
      type: 'string',
      require: true,
    },
    {
      name: 'title',
      type: 'boolean',
      default: false,
    }
  ],
  data: [],
  computed: []
};


const vtg = new VueTestGenerator(myAutomaticTest);

describe("Tests auto-generate", () => {
  vtg.generate('props');
});
