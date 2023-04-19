import { Rule } from 'effector-forms'
import i18next from 'i18next'
import { z, ZodError } from 'zod'

export function createRule<V, T = any>({
  schema,
  name,
}: {
  schema: z.Schema<any, any, V>
  name: string
}): Rule<V> {
  return {
    name,
    validator: (v: V) => {
      try {
        schema.parse(v)
        return {
          isValid: true,
          value: v,
        }
      } catch (error) {
        const { code, ...options } = (error as ZodError).errors[0]

        return {
          isValid: false,
          value: v,
          errorText: i18next.t(code, {
            ns: 'validation',
            ...options,
          }),
        }
      }
    },
  }
}
