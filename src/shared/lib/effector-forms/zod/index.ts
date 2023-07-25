import { type Rule } from "effector-forms";
import { type z, type ZodError } from "zod";

export function createRule<V>({
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
        return {
          isValid: false,
          value: v,
          errorText: (error as ZodError).issues[0].message,
        };
      }
    },
  };
}
