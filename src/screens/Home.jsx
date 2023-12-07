import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useSelector, useDispatch} from 'react-redux';
import {AddTodoService, GetTodoService} from '../services';
import Card from '../components/Card/Card';
import messaging from '@react-native-firebase/messaging';
import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';

const Home = () => {
  const {todo} = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTodoService());
  }, []);

  const mydata = {
    title: 'gta',
    time: '5.30',
  };
  console.log('data', todo);

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log(
      'Message handled in the background!',
      (remoteMessage.sentTime = 1701968977),
    );
  });

  async function onCreateTriggerNotification() {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    const date = new Date(Date.now());
    date.setHours(10);
    date.setMinutes(37);

    // Create a time-based trigger
    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Meeting with Jane',
        body: 'Today at 10:09am',
        android: {
          channelId,
     
        },
      },
      trigger,
    );

    console.log(date.getTime());
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {/* <Button title="create" onPress={() => dispatch(AddTodoService(mydata))} /> */}
      <FlatList
        data={todo}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            title={item?.title}
            date={item?.time}
            onPress={onCreateTriggerNotification}
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EFE5',
  },
});
