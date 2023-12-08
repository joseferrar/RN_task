import notifee, {TriggerType} from '@notifee/react-native';
import {TimeFormat} from './date';

const onCreateTriggerNotification = async (title, body) => {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  const trigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: body.getTime(),
  };
  await notifee.createTriggerNotification(
    {
      title: title,
      body: 'Today at ' + TimeFormat(body),
      android: {
        channelId,
      },
    },
    trigger,
  );
};

export {onCreateTriggerNotification};
