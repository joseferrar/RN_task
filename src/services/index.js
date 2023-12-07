import firestore from '@react-native-firebase/firestore';
import {addTodoList, getTodoList} from '../features/todoSlice';
import {Alert} from 'react-native';

const GetTodoService = () => async dispatch => {
  try {
    const todoData = await firestore().collection('todo').get();
    const myData = await todoData.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }));
    dispatch(getTodoList(myData));
  } catch (err) {
    Alert.alert(err);
  }
};

const AddTodoService = data => async dispatch => {
  try {
    await firestore().collection('todo').add(data);
    dispatch(addTodoList(data));
    await dispatch(GetTodoService());
  } catch (err) {
    Alert.alert(err);
  }
};

export {GetTodoService, AddTodoService};
