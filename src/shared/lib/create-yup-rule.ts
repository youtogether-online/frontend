import { Rule } from 'effector-forms'
import i18next from 'i18next'
import * as yup from 'yup'

interface ValidationMessage {
  key: string
  values: {
    [key: string]: number
  }
}

interface ValidationError {
  message: ValidationMessage
}

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
        const { message } = error as ValidationError

        return {
          isValid: false,
          value: v,
          errorText: i18next.t(message.key, message.values),
        }
      }
    },
  }
}
