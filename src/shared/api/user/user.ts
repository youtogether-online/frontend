import { User } from "@/shared/api";

const BASE_URL = "user";

type GetUserByIdParams = {
  id: string
}

export const getUserById = (params: GetUserByIdParams): User => {
  // return apiInstance.get(`/${BASE_URL}/getUserById`, { ...params });

  return {
    id: "1",
    username: "frkam",
    avatar: "https://feature-sliced.design/img/brand/logo-primary.png",
    biography: "I`m software developer",
    userRole: "user",
    email: "ge***p@gmail.com",
    language: "ru",
    theme: "white",
    name: "dmitri"
  };
};

export const getMyUserData = (): User => {
  // return apiInstance.get(`/${BASE_URL}/getMyUserData`);

  return {
    id: "2",
    username: "mvznfcoqe",
    avatar: "https://feature-sliced.design/img/brand/logo-primary.png",
    biography: "I`m software developer 2",
    userRole: "user",
    email: "ge***p@gmail.com",
    language: "ru",
    theme: "dark",
    name: "dmitri"
  };
};