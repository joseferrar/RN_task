import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import notifee, {TriggerType} from '@notifee/react-native';
import Input from '../components/Input/Input';
import {Button} from '../components/Button';
import {TimeFormat} from '../utils/date';

const Add = () => {
  const date = new Date(Date.now());
  const [selectedDate, setSelectedDate] = useState(date);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setSelectedDate(date);
    hideDatePicker();
  };

  const onCreateTriggerNotification = async () => {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: selectedDate.getTime(),
    };
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

    console.log(selectedDate.getTime());
  };

  console.log('selectedDate', selectedDate);
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.label}>Title</Text>
        <Input placeholder={'Enter your title'} />
      </View>
      <View style={styles.view}>
        <Text style={styles.label}>Date</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.DateContainer}
          onPress={showDatePicker}>
          <Text style={styles.DateText}>{TimeFormat(selectedDate)}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          locale="en_GB"
          date={selectedDate}
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <Button title={'Submit'} onPress={onCreateTriggerNotification} />
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EFE5',
  },
  view: {
    marginTop: 14,
  },
  label: {
    color: '#000',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 18,
  },
  DateContainer: {
    borderColor: '#6C63FF',
    marginBottom: 8,
    marginTop: 4,
    marginLeft: 14,
    marginRight: 14,
    borderWidth: 2,
    borderRadius: 12,
    padding: 15,
  },
  DateText: {
    color: '#000',
    fontSize: 18,
  },
});
