import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const NotFound = () => {
  const {loading} = useSelector(state => state.common);
  return (
    <View style={styles.container}>
      {loading ? null : <Text style={styles.error}>No Data Found.</Text>}
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EFE5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
  },
});
