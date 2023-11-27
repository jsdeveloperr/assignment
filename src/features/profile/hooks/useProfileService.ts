import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { profileActions, selectProfile } from '../store';
import { Profile } from '../types';

export type ProfileServiceOperators = {
  profile: Profile;
  fetchAllProfile: () => void;
};

export const useProfileService = (): Readonly<ProfileServiceOperators> => {
  const dispatch = useAppDispatch();

  return {
    profile: useAppSelector(selectProfile),
    fetchAllProfile: useCallback(() => {
      dispatch(profileActions.fetchAll());
    }, [dispatch]),
  };
};

export default useProfileService;
