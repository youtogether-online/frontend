import { apiInstance } from "../base";

const BASE_URL = "/auth";

type SignInParams = {
  email: string
  password?: string
}

export const signIn = (params: SignInParams) => {
  return apiInstance.post(`/${BASE_URL}/sign-in`, { params });
};

type CheckCodeParams = {
  code: string
}

export const checkCode = (params: CheckCodeParams) => {
  return apiInstance.post(`/${BASE_URL}/check-code`, { params });
};