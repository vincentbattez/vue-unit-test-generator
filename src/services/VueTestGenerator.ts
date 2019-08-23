import { shallowMount } from '@vue/test-utils'
import { ComponentConfigInterface } from '../interfaces/componentConfig.interface'
import { buildPropsData } from "../helpers/testUtils";
import { defaultsDeep } from 'lodash'

enum TestTypeEnum {
  'props',
  'data',
  'computed',
}


export default class VueTestGenerator {
  private readonly config: ComponentConfigInterface;
  private readonly options: any;

  private component: any;
  private readonly mock: any;
  private readonly expectedValue: any;

  constructor (config: ComponentConfigInterface, options: any) {
    this.config = config;
    this.options = options;

    this.expectedValue = defaultsDeep(options.expectedValue, {
      string: 'mock string',
      boolean: true,
      number: 123,
      object: {
        mockString:'my string',
        mockBoolean: true
      },
      array: [
        'mock array 1',
        'mock array 2'
      ],
      default: null
    });
    this.component = {
      vueInstance: {},
      propCollection: []
    };
    this.mock = {
      propCollection: config.props,
      dataCollection: config.data,
      computedCollection: config.computed,
    };
    this.init();
  }

  init () {
    // beforeEach

    // afterEach
  }

  generate (type: string) {
    this._buildComponent({
      propsData: buildPropsData(this.config.props)
    });

    describe(`Component: ${this.config.component.name}`, () => {
      if (type === 'props') {
        this._propCollectionTest(this.mock.propCollection)
      }
    })
  }

  private _propCollectionTest (mockPropCollection: any) {
    describe('props', () => {
      test('prop 1', () => {
        expect(true).toBe(true)
      })
    })
  }

  private _buildComponent(options: any) {
    // set vueInstance
    this.component.vueInstance = shallowMount(
      this.config.component,
      options
    );

    // set props
    this.component.propCollection = this.component.vueInstance.props()
  }
}



