
import { Wrapper } from '@vue/test-utils'
import Vue from "vue"

import { PropsInterface } from './props.interface'

export interface ComponentConfigInterface {
  component: Wrapper<Vue>,
  props?: PropsInterface,
  data?: any,
  computed?: any,
}
