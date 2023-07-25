import {
  Children,
  type ComponentPropsWithoutRef,
  type ElementType,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SlotConfig = Record<string, ElementType<any>>;

type SlotElements<Type extends SlotConfig> = {
  [Property in keyof Type]: ReactElement<ComponentPropsWithoutRef<Type[Property]>, Type[Property]>;
};

/**
 * Extract components from `children` so we can render them in different places,
 * allowing us to implement components with SSR-compatible slot APIs.
 * Note: We can only extract direct children, not nested ones.
 */
export function useSlots<T extends SlotConfig>(
  children: ReactNode,
  config: T,
): [Partial<SlotElements<T>>, ReactNode[]] {
  // Object mapping slot names to their elements
  // eslint-disable-next-line unicorn/no-useless-undefined
  const slots: Partial<SlotElements<T>> = mapValues(config, () => undefined);

  // Array of elements that are not slots
  const rest: ReactNode[] = [];

  const keys = Object.keys(config) as Array<keyof T>;
  const values = Object.values(config);

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      rest.push(child);
      return;
    }

    // eslint-disable-next-line unicorn/prefer-array-index-of
    const index = values.findIndex((value) => {
      return child.type === value;
    });

    // If the child is not a slot, add it to the `rest` array
    if (index === -1) {
      rest.push(child);
      return;
    }

    const slotKey = keys[index];

    // If slot is already filled, ignore duplicates
    if (slots[slotKey]) {
      // console.warn(
      //   true,
      //   // This is not user message
      //   // eslint-disable-next-line string-to-lingui/missing-lingui-transformation
      //   `Found duplicate "${String(slotKey)}" slot. Only the first will be rendered.`,
      // );
      return;
    }

    // If the child is a slot, add it to the `slots` object
    slots[slotKey] = child as ReactElement<ComponentPropsWithoutRef<T[keyof T]>, T[keyof T]>;
  });

  return [slots, rest];
}

/** Map the values of an object */
function mapValues<T extends Record<string, unknown>, V>(obj: T, fn: (value: T[keyof T]) => V) {
  // eslint-disable-next-line unicorn/no-array-reduce
  return Object.keys(obj).reduce<Record<keyof T, V>>((result, key: keyof T) => {
    result[key] = fn(obj[key]);
    return result;
    // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter, @typescript-eslint/consistent-type-assertions
  }, {} as Record<keyof T, V>);
}
