import { shallowMount } from '@vue/test-utils'
import { ConfigInterface } from '../interfaces/Config.interface'
import { defaultsDeep } from 'lodash'
import { ConfigPropInterface } from "../interfaces/props/ConfigProp.interface";
import {ExpectedValueInterface} from "../interfaces/ExpectedValue.interface";
import {PropInterface} from "../interfaces/props/Prop.interface";
import {OptionInterface} from "../interfaces/Option.interface";
import {ConfigDto} from "../interfaces/dto/config.dto";

enum TestTypeEnum {
  'props',
  'data',
  'computed',
}


export default class VueTestGenerator {
  // DTO
  private config: any;
  private readonly options: any;

  // COMPUTED
  private expectedValue: ExpectedValueInterface;

  private mock: {
    propCollection: PropInterface[]
  };

  private readonly component: {
    vueInstance: any
    propCollection: PropInterface[]
  };

  constructor (
    config: ConfigDto,
    options?: OptionInterface | any
  ) {
    this.options = options;
    this.config = {
      component: config.component,
      propCollection: config.props,
      dataCollection: config.data,
      computedCollection: config.computed
    };
    this.expectedValue = this._buildExpectedValue(options);

    // Config data
    this.mock = {
      propCollection: this._adaptConfigPropCollectionToComponentPropCollection(config.props),
    };

    // Component data when is mounted
    this.component = {
      vueInstance: {},
      propCollection: []
    };

    this.init();
  }

  init () {
    // beforeEach

    // afterEach
  }

  /**
   *
   * @param {string} type
   */
  generate (type: string) {
    describe(`Component: ${this.config.component.name}`, () => {
      if (type === 'props') {
        this._testPropCollection(this.config.props)
      }
    })
  }

  /**
   *
   * @param mockPropCollection
   * @private
   */
  private _testPropCollection (mockPropCollection: PropInterface[]) {
    // eslint-disable-next-line no-console
    console.log(this.mock.propCollection)

    this._buildComponent({
      propsData: this._adaptPropCollectionToPropsData(this.mock.propCollection)
    });

    describe('props', () => {
      this.mock.propCollection.map((configAdaptedProp: PropInterface) => {
        test('prop.name', () => {
          console.log(configAdaptedProp);
          // When
          // const title = this.component.propCollection.title;
          //
          // // Then
          // expect(title).toBe('oui')
        })
      })
    })
  }

  /**
   *
   * @param options
   * @private
   */
  private _buildComponent(options: any) {
    // set vueInstance
    this.component.vueInstance = shallowMount(
      this.config.component,
      options
    );

    // set props
    this.component.propCollection = this.component.vueInstance.props()
  }


  /**
   *
   * @returns
   * @private
   */
  private _buildExpectedValue (options: OptionInterface): ExpectedValueInterface | any {
    const defaultExpectedValue = {
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
    };

    if (!options) {
      return defaultExpectedValue
    }

    return defaultsDeep(options.expectedValue, defaultExpectedValue)
  }

  /**
   *
   * @param {ConfigPropInterface[]} configPropCollection
   *
   * @returns {PropInterface[]}
   * @private
   */
  private _adaptConfigPropCollectionToComponentPropCollection (configPropCollection: ConfigPropInterface[]): PropInterface[] {
    let configPropsCollectionAdapted: any[] = [];

    configPropCollection.map(prop => {
      configPropsCollectionAdapted.push({
        name: prop.name,
        value: this._setMockedValue(prop)
      })
    });

    return configPropsCollectionAdapted;
  }

  /**
   *
   * @param {ConfigPropInterface} prop
   *
   * @returns {any}
   * @private
   */
  private _setMockedValue (prop: ConfigPropInterface): any {
    const propType = String(prop.type);

    return (
      propType === 'string'  ? this.expectedValue.string  :
      propType === 'boolean' ? this.expectedValue.boolean :
      propType === 'number'  ? this.expectedValue.number  :
      propType === 'object'  ? this.expectedValue.object  :
      propType === 'array'   ? this.expectedValue.array   :
      null
    );
  }

  private _adaptPropCollectionToPropsData (propCollection: PropInterface[]) {
    return propCollection.map(prop => {
      return {
        [prop.name]: prop.value
      }
    })[0]
  }
}



