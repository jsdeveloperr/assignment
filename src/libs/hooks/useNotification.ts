import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../../store/store';
import {
  notificationsActions,
  NotificationState,
} from '../stores/reducers/notifications.slice';

export const useNotification = () => {
  const dispatch = useDispatch();

  const displayNotification = (notification: NotificationState) => {
    dispatch(notificationsActions.addNotification(notification));
  };

  const clearNotification = () => {
    dispatch(notificationsActions.clearNotification());
  };

  const notification = useSelector((state: RootState) => state.notifications);

  return { notification, displayNotification, clearNotification } as const;
};
