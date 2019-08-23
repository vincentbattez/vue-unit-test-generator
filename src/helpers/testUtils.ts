import { Wrapper } from '@vue/test-utils'
import Vue from "vue"

import { ConfigPropInterface } from "../interfaces/props/ConfigProp.interface";
import { PropsTypeEnum } from "../enums/PropsType.enum";

export function testProps(wrapper: Wrapper<Vue>, props: ConfigPropInterface[]): any {
  props.map((prop: ConfigPropInterface) => {
    const propName = _getPropNameFromProp(prop);

    return test(propName, () => {
      // Given
      const mockedValue = _setMockedValue(prop);

      // When
      const componentPropValue = wrapper.props()[propName];

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
export function buildPropsData(props: ConfigPropInterface[]): object {
  let builder = {};

  props.map((prop) => {
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
function _setMockedValue (prop: ConfigPropInterface): any {
  const propType = String(_getTypeFromProp(prop));

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
function _getPropNameFromProp(prop: ConfigPropInterface): string {
  return prop.name;
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
function _getTypeFromProp(prop: ConfigPropInterface): PropsTypeEnum {
  return prop.type;
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
function _isRequireProp(prop: ConfigPropInterface): boolean {
  return prop.require === true;
}
