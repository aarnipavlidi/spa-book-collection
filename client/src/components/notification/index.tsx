import { notificationProps } from '../../types/hooks/notification.props';

interface NotificationProps {
  variant?: 'primary';
  styling?: string;
  defaultLabel: string;
  notification: notificationProps;
}

const Notification: React.FC<NotificationProps> = ({ variant = 'primary', styling, defaultLabel, notification }) => {
  return (
    <>
      {
        variant === 'primary' && !notification.message && <div className={`${'text-md text-center font-pier-sans rounded-lg'} ${styling}`}>
          <span>
            {defaultLabel}
          </span>
        </div>
      }
      {
        variant === 'primary' && notification.message && <div className={`${'text-md text-center font-pier-sans rounded-lg'} ${notification.status ? 'text-green-900 bg-green-50' : 'text-red-900 bg-red-50'} ${styling}`} role="alert">
          <span>
            {notification.message}
          </span>
        </div>
      }
    </>
  );
};

export default Notification;
