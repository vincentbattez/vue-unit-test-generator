import { PropsTypeEnum } from "../../enums/PropsType.enum";

export interface ConfigPropInterface {
  name: string,
  type: PropsTypeEnum,
  require?: boolean,
  default?: any,
}
