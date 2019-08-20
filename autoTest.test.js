import { shallowMount } from '@vue/test-utils'
import { testProps, buildPropsData } from "./helpers/testUtils";
import Hello from './Hello.vue'

const myAutomaticTest = {
  props: {
    named: {
      type: 'string',
      require: true,
    },
    title: {
      type: 'string',
      default: 'popo',
    },
  }
};
let wrapper;

wrapper = shallowMount(Hello, {
  propsData: buildPropsData(myAutomaticTest.props)
});

// eslint-disable-next-line no-console
console.log('-----', buildPropsData(myAutomaticTest.props));

// beforeEach(() => {
//   wrapper = shallowMount(Hello, {
//     propsData: buildPropsData(myAutomaticTest.props)
//   })
// });
//
// afterEach(() => {
//   wrapper.destroy()
// });

describe('Component: Hello', () => {
  const props = myAutomaticTest.props;

  describe('props', () => {
    testProps(wrapper, props)
  })
});
