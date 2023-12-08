import firestore from '@react-native-firebase/firestore';
import {addTodoList, deleteTodoList, getTodoList} from '../features/todoSlice';
import {Alert} from 'react-native';
import {showLoading} from '../features/commonSlice';

const GetTodoService = () => async dispatch => {
  try {
    dispatch(showLoading(true));
    const todoData = await firestore().collection('todo').get();
    const myData = await todoData.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }));
    dispatch(getTodoList(myData));
    dispatch(showLoading(false));
  } catch (err) {
    Alert.alert(err);
  }
};

const AddTodoService = (data, navigation) => async dispatch => {
  try {
    dispatch(showLoading(true));
    await firestore().collection('todo').add(data);
    dispatch(addTodoList(data));
    await dispatch(GetTodoService());
    dispatch(showLoading(false));
    navigation.goBack();
  } catch (err) {
    Alert.alert(err);
  }
};

const DeleteTodoService = id => async dispatch => {
  try {
    dispatch(showLoading(true));
    await firestore().collection('todo').doc(id).delete();
    dispatch(deleteTodoList(id));
    await dispatch(GetTodoService());
    dispatch(showLoading(false));
  } catch (err) {
    Alert.alert(err);
  }
};
export {GetTodoService, AddTodoService, DeleteTodoService};
