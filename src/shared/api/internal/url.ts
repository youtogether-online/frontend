const API_URL = import.meta.env.VITE_API_URL;

export const getAuthSessionGetUrl = () => `${API_URL}/auth/session`;
export const getAuthSessionDeleteUrl = () => `${API_URL}/auth/session`;
export const getAuthEmailPostUrl = () => `${API_URL}/auth/email`;
export const getAuthPasswordPostUrl = () => `${API_URL}/auth/password`;

export const getEmailSendCodePostUrl = () => `${API_URL}/email/send-code`;

export const getUserGetByNameUrl = (name: string) => `${API_URL}/user/${name}`;
export const getUserCheckNameGetByNameUrl = (name: string) => `${API_URL}/user/check-name/${name}`;
export const getUserPatchUrl = () => `${API_URL}/user`;
export const getUserPasswordPatchUrl = () => `${API_URL}/user/password`;
export const getUserEmailPatchUrl = () => `${API_URL}/auth/email`;
export const getUserNamePatchUrl = () => `${API_URL}/auth/name`;
