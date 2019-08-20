import { Wrapper } from '@vue/test-utils'
import Vue from "vue"

export function testProps(wrapper: Wrapper<Vue>, props: any): any {
  Object.entries(props).map((prop) => {
    const propName = _getPropNameFromProp(prop);

    return test(propName, () => {
      // Given
      const mockedValue = _setMockedValue(prop);

      // When
      const componentPropValue = wrapper.props()[propName];
      // eslint-disable-next-line no-console
      console.log("-----wrapper.props()[propName]:", wrapper.props()[propName]);

      // Then
      expect(componentPropValue).toBe(mockedValue)
    })
  })
}

/**
 *
 * @param props
 *
 * @example return example:
 * {
 *   my_prop_title: 'my string',
 *   my_prop_number: 123,
 * }
 */
export function buildPropsData(props: object): object {
  let builder = {};

  Object.entries(props).map((prop) => {
    if (!_isRequireProp(prop)) {
      return
    }

    const propName = _getPropNameFromProp(prop);
    const defaultValue = _setMockedValue(prop);

    return builder[propName] = defaultValue
  });

  return builder
}

/**
 *
 * @param prop
 * @returns {string | number | object | array | null}
 *
 * @example return example:
 * 'mock string' ||
 * true ||
 * 123 ||
 * {
 *   mockString:'my string',
 *   mockBoolean: true
 * } ||
 * [
 *   'mock array 1',
 *   'mock array 2'
 * ]
 * @private
 */
function _setMockedValue (prop: any): any {
  const propType = _getTypeFromProp(prop);

  return (
    propType === 'string'
      ? 'mock string' :
    propType === 'boolean'
      ? true :
    propType === 'number'
      ? 123 :
    propType === 'object'
      ? { mockString:'my string', mockBoolean: true } :
    propType === 'array'
      ? ['mock array 1', 'mock array 2'] :
    null
  );
}

/**
 *
 * @param prop
 * @returns {*}
 * @private
 *
 * @example return example:
 * 'my_prop_title'
 */
function _getPropNameFromProp(prop: any): any {
  return prop[0];
}

/**
 *
 * @param prop
 * @returns {*}
 * @private
 *
 * @example return example:
 * 'string'
 */
function _getTypeFromProp(prop: any): any {
  return prop[1].type;
}


/**
 *
 * @param prop
 * @returns {*}
 * @private
 *
 * @example return example:
 * true
 */
function _isRequireProp(prop: any): any {
  return prop[1].require === true;
}




// const myAutomaticTest = {
//   props: {
//     named: {
//       type: 'string',
//       require: true,
//     },
//     title: {
//       type: 'string',
//       default: 'popo',
//     },
//   }
// };
//
// console.log(
//   buildPropsData(myAutomaticTest.props)
// )
