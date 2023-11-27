import { Env } from '../../../config/Env';
import makeApi from '../../../libs/core/configureAxios';
import { Profile } from '../types';

const api = makeApi(`${Env.API_BASE_URL}`);

const PROFILE_URL =
  'https://linkedin-cv-crawler.beta-limited.workers.dev/interview';

export const getProfile = (): Promise<Profile> =>
  api.get(PROFILE_URL, {
    headers: {
      'Session-ID': localStorage.getItem('session_Id'),
    },
  });
