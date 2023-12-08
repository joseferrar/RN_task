import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {DeleteTodoService, GetTodoService} from '../services';
import Card from '../components/Card/Card';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NotFound from '../components/Error/NotFound';

const Home = ({navigation}) => {
  const {todo} = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTodoService());
  }, []);

  console.log('todo', todo);
  return (
    <View style={styles.container}>
      {todo.length > 0 ? (
        <FlatList
          data={todo}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <Card
              title={item?.title}
              date={item?.time}
              onPress={() => dispatch(DeleteTodoService(item?.id))}
            />
          )}
        />
      ) : (
        <NotFound />
      )}
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
