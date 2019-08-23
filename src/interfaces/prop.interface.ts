import { PropsTypeEnum } from "../enums/PropsType.enum";

export interface PropInterface {
  name: string,
  type: PropsTypeEnum,
  require?: boolean,
  default?: any,
}
