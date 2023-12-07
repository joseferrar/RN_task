import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useSelector, useDispatch} from 'react-redux';
import {GetTodoService} from '../services';
import Card from '../components/Card/Card';
import notifee, {TriggerType} from '@notifee/react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = ({navigation}) => {
  const {todo} = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTodoService());
  }, []);

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
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.fab}
        onPress={() => navigation.navigate('Add')}>
        <Image source={require('../images/pencil.png')} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EFE5',
  },
  fab: {
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 70,
    backgroundColor: '#393E46',
    borderRadius: 100,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  img: {
    width: 40,
    height: 40,
  },
});
