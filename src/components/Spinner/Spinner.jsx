import React from 'react';
import {SafeAreaView, StyleSheet, Modal, ActivityIndicator} from 'react-native';

export const Spinner = () => {
  return (
    <Modal transparent={true} visible={true} style={styles.backdrop}>
      <SafeAreaView style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={80} color="#E21717" />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});
