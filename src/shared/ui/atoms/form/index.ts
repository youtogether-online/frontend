import { InternalForm } from './form'
import { Item } from './item'
import { Status } from './status'

export const Form = Object.assign(InternalForm, {
  Item,
  Status,
})
