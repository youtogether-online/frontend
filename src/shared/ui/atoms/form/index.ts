import { Error } from './error'
import { InternalForm } from './form'
import { Item } from './item'

export const Form = Object.assign(InternalForm, {
  Item,
  Error,
})
