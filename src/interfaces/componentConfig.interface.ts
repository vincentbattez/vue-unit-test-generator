import { Wrapper } from '@vue/test-utils'
import Vue from "vue"

import { PropInterface } from './prop.interface'

export interface ComponentConfigInterface {
  component: any,
  props?: any,
  data?: any,
  computed?: any,
}
