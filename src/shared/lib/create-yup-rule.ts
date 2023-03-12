import { Rule } from 'effector-forms'
import * as yup from 'yup'

export function createRule<V, T = any>({
  schema,
  name,
}: {
  schema: yup.SchemaOf<T>
  name: string
}): Rule<V> {
  return {
    name,
    validator: (v: V) => {
      try {
        schema.validateSync(v)
        return {
          isValid: true,
          value: v,
        }
      } catch (error) {
        return {
          isValid: false,
          value: v,
          errorText: (error as Error).message,
        }
      }
    },
  }
}
