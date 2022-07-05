import { defaultHeader, API_URL, USER_TOKEN } from './utils';

export const getProfile = () =>
  fetch(`${API_URL}users/${USER_TOKEN}/profile/`, {
    method: 'GET',
    ...defaultHeader
  });

export const getAllParts = (url: string | null = null) =>
  fetch(url || `${API_URL}users/${USER_TOKEN}/allparts/?page_size=60`, {
    method: 'GET',
    ...defaultHeader
  });

export const getAllSets = (url: string | null = null) =>
  fetch(url || `${API_URL}users/${USER_TOKEN}/sets/?page_size=6`, {
    method: 'GET',
    ...defaultHeader
  });
