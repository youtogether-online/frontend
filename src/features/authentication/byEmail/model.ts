import { createForm } from "effector-forms";
import { createRule } from "@/shared/lib/create-yup-rule";
import * as yup from "yup";
import { createEffect, createEvent, createStore, forward } from "effector";
import { emailValidation } from "@/shared/config/validation";

export const getCodeForm = createForm({
  validateOn: ["submit"],
  fields: {
    email: {
      init: "",
      rules: [
        createRule<string>({
          name: "email",
          schema: yup.string().required("field.required").email("field.email").max(emailValidation.max, "field.max")
        })
      ]
    }
  }
});

export const sendCodeForm = createForm({
  validateOn: ["submit"],
  fields: {
    code: {
      init: "",
      rules: [
        createRule<string>({
          name: "code",
          schema: yup.string().required("field.required")
        })
      ]
    }
  }
});

type signInSteps = "getCode" | "sendCode"

export const returnToGetCodeEvent = createEvent();

export const sendCodeFx = createEffect();
export const getCodeFx = createEffect(() => {
});

export const $currentSignInStep = createStore<signInSteps>("getCode")
  .on(getCodeFx.done, () => "sendCode")
  .on(returnToGetCodeEvent, () => "getCode");

forward({ from: getCodeForm.formValidated, to: getCodeFx });

forward({ from: sendCodeForm.formValidated, to: sendCodeFx });