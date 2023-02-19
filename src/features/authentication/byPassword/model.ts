import { createForm } from "effector-forms";
import { createRule } from "@/shared/lib/create-yup-rule";
import * as yup from "yup";
import { createEffect, forward } from "effector";

export const signInByPasswordForm = createForm({
  validateOn: ["submit"],
  fields: {
    email: {
      init: "",
      rules: [
        createRule<string>({
          name: "email",
          schema: yup.string().required("field.required").email("field.email")
        })
      ]
    },
    password: {
      init: "",
      rules: [
        createRule<string>({
          name: "password",
          schema: yup.string().required("field.required")
        })
      ]
    }
  }
});

export const signInByPasswordFx = createEffect();

forward({ from: signInByPasswordForm.formValidated, to: signInByPasswordFx });