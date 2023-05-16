import { type Rule } from "effector-forms";
import { type z, type ZodError } from "zod";

export function createRule<V, T = any>({
  schema,
  name,
}: {
  schema: z.Schema<any, any, V>;
  name: string;
}): Rule<V> {
  return {
    name,
    validator: (v: V) => {
      try {
        schema.parse(v);
        return {
          isValid: true,
          value: v,
        };
      } catch (error) {
        const { message } = error as ZodError;

        return {
          isValid: false,
          value: v,
          errorText: message,
        };
      }
    },
  };
}
