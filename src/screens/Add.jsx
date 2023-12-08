import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import notifee, {TriggerType} from '@notifee/react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Input from '../components/Input/Input';
import {Button} from '../components/Button';
import {TimeFormat} from '../utils/date';
import {useDispatch} from 'react-redux';
import {AddTodoService} from '../services';

const Add = ({navigation}) => {
  const dispatch = useDispatch();
  const date = new Date(Date.now());
  const [selectedDate, setSelectedDate] = useState(date);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema: yup.object().shape({
      title: yup.string().required('Title must be required'),
    }),
    onSubmit: async data => {
      console.log('my data', data);
      let dataStore = {
        title: data.title,
        time: TimeFormat(selectedDate),
      };
      console.log('dataStore', dataStore);
      await dispatch(AddTodoService(dataStore, navigation));
      await onCreateTriggerNotification();
    },
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log('A date has been picked: ', date);
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
        title: formik.values.title,
        body: 'Today at ' + TimeFormat(selectedDate),
        android: {
          channelId,
        },
      },
      trigger,
    );

    console.log(selectedDate.getTime());
  };
  console.log(selectedDate.getTime());
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.label}>Title</Text>
        <Input
          placeholder={'Enter your title'}
          value={formik.values.title}
          onChangeText={formik.handleChange('title')}
        />
        {formik.errors.title && formik.touched.title ? (
          <Text style={styles.error}>* {formik.errors.title}</Text>
        ) : null}
      </View>
      <View style={styles.view}>
        <Text style={styles.label}>Time</Text>
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
      <Button title={'Submit'} onPress={formik.handleSubmit} />
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
  error: {
    color: 'red',
    marginLeft: 20,
    fontSize: 16,
  },
});
