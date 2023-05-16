import { useState } from "react";

import { IconEyeNone, IconEyeOpen } from "@/shared/ui";

import { InternalInput, type InternalInputProps } from "./input";

type PasswordProps = Omit<InternalInputProps, "postfix">;

export const Password = ({ ...inputProps }: PasswordProps) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleChangePasswordShownMode = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  return (
    <InternalInput
      type={isPasswordShown ? "text" : "password"}
      id="current-password"
      autoComplete="current-password"
      {...inputProps}
      postfix={
        <button type="button" onClick={handleChangePasswordShownMode}>
          {isPasswordShown ? <IconEyeOpen /> : <IconEyeNone />}
        </button>
      }
    />
  );
};
