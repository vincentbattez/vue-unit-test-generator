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
      type: 'string',
      default: "poro",
    }
  ],
  data: [],
  computed: []
};

//
// describe('Component: Hello', () => {
//   const props = myAutomaticTest.props;
//
//   describe('props', () => {
//     testProps(wrapper, props)
//   })
// });



const vtg = new VueTestGenerator(myAutomaticTest, {
  expectedValue: {
    string: 'toto'
  }
});

describe("t", () => {
  vtg.generate('props');
});
