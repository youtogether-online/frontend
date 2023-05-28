import { Caption } from "./caption";
import { Control } from "./control";
import { Field } from "./field";
import { InternalForm } from "./form";
import { Label } from "./label";
import { Validation } from "./validation";

export const Form = Object.assign(InternalForm, {
  Label,
  Caption,
  Validation,
  Field,
  Control,
});
