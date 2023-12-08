import notifee, {TriggerType} from '@notifee/react-native';

const onCreateTriggerNotification = async (title, body, date) => {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  const trigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date,
  };
  await notifee.createTriggerNotification(
    {
      title: title,
      body: body,
      android: {
        channelId,
      },
    },
    trigger,
  );

  console.log(date.getTime());
};

export {onCreateTriggerNotification};
