import {StyleSheet, Text} from 'react-native';
import React from 'react';

const ErrorMsg = ({message}) => {
  return <Text style={styles.error}>* {message}</Text>;
};

export default ErrorMsg;

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginLeft: 20,
    fontSize: 16,
  },
});
