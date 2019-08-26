import Hello from '../../src/components/Hello'
import VueTestGenerator from '../../../src/services/VueTestGenerator';

const myAutomaticTest = {
  component: Hello,
  props: [
    {
      name: 'named',
      type: 'string',
      required: true,
    },
    {
      name: 'title',
      type: 'boolean',
      required: true,
    }
  ],
  data: [],
  computed: []
};


const vtg = new VueTestGenerator(myAutomaticTest);

describe("Tests auto-generate", () => {
  vtg.generate('props');
});
