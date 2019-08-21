enum PropsType {
  'string',
  'boolean',
  'number',
  'object',
  'array',
  null
}

export interface PropsInterface {
  type: PropsType,
  require?: boolean,
  default?: any,
}
