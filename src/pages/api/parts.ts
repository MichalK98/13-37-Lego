import { defaultHeader, API_URL, USER_TOKEN } from './utils';

export const getAllParts = (url = null) =>
  fetch(url || `${API_URL}users/${USER_TOKEN}/allparts/`, {
    method: 'GET',
    ...defaultHeader
  });
