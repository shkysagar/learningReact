import { httpPost } from './axios';

export const login = async (username, password) => {
  try {
    let response = await httpPost('login', {
      email: username,
      password: password,
    });
    let token = response.result.token;
    let user = response.result.user;
    let storage_user = {
      name: user.name,
      email: user.email,
      role: user.role,
      image: user.image ?? null,
    };
    localStorage.setItem('stack_8_token', token);
    localStorage.setItem('stack_8_user', JSON.stringify(storage_user));
    return response;
  } catch (error) {
    throw error;
  }
};
