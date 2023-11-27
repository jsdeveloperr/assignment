/**
 * Environment variables
 */
export const Env = {
  NODE_ENV: process.env.NODE_ENV,
  REDUX_LOGGER: process.env.VITE_HOST_REDUX_LOGGER,
  API_BETALIMITED: process.env.VITE_HOST_API_BETALIMITED,
  API_TALK_URL: process.env.VITE_HOST_API_TALK_URL,
  API_BASE_URL: '/api',

  isProd() {
    return this.NODE_ENV === 'production';
  },
  isDev() {
    return this.NODE_ENV === 'development';
  },
  isReduxLogger() {
    return String(this.REDUX_LOGGER) === 'true';
  },
};

export default Env;
