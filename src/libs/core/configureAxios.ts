import axios from 'axios';

export const getSessionId = () =>
  localStorage.getItem('session_Id') !== null
    ? localStorage.getItem('session_Id')
    : null;

export const getAuthorizationHeader = () => getSessionId();

export default function makeApi(baseURL: string) {
  const api = axios.create({
    baseURL,
    headers: {
      'Session-ID': getAuthorizationHeader(),
    },
  });

  api.defaults.headers.post['Content-Type'] = 'application/json';
  api.defaults.headers.put['Content-Type'] = 'application/json';
  api.defaults.headers.delete['Content-Type'] = 'application/json';
  const sessionId = localStorage.getItem('session_Id');

  api.defaults.headers.common['Session-ID'] =
    localStorage.getItem('session_Id');

  api.interceptors.request.use(
    config => {
      if (sessionId) {
        // eslint-disable-next-line no-param-reassign
        config.headers = {
          ...config.headers,
          'Session-ID': `${sessionId}`,
        };
      }

      return config;
    },
    error => Promise.reject(error)
  );

  api.interceptors.response.use(
    response => response.data, // return data object
    error => Promise.reject(error)
  );
  return api;
}
