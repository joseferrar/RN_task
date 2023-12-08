import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({onPress, title, disabled, style}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {opacity: disabled ? 0.8 : 1}, style]}
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[styles.btnTitle, style]}>{title}</Text>
    </TouchableOpacity>
  );
};

const SmallButton = ({onPress, title, disabled, style, textStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.small_button, style]}
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[styles.small_text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export {Button, SmallButton};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    backgroundColor: '#03C988',
    paddingHorizontal: 50,
    paddingVertical: 12,
    margin: 22,
  },
  btnTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  small_button: {
    borderRadius: 12,
    backgroundColor: 'red',
    paddingVertical: 6,
    height: 32,
    marginTop: 6,
    width: 80,
  },
  small_text: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
