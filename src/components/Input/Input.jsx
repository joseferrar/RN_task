import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const Input = props => {
  const {
    value,
    onChangeText,
    disabled,
    placeholder,
    style,
    color,
    secureTextEntry,
  } = props;

  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      editable={disabled}
      placeholderTextColor={'#9BA4B5'}
      secureTextEntry={secureTextEntry}
      style={[styles.input, {color: color}, style]}
      onChangeText={onChangeText}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: '#6C63FF',
    // width: "95%",
    marginBottom: 8,
    marginTop: 4,
    marginLeft: 14,
    marginRight: 14,
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    fontFamily: 'Poppins-Light',
    paddingStart: 18,
  },
});
