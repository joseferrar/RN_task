import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useSelector, useDispatch} from 'react-redux';
import {AddTodoService, GetTodoService} from '../services';

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
  return (
    <View>
      <Text>Home</Text>
      <Button title="create" onPress={() => dispatch(AddTodoService(mydata))} />
      {todo &&
        todo?.map((item, i) => (
          <Text style={{color: '#000'}} key={i}>
            {item?.title}
          </Text>
        ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
