import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import notifee, {TriggerType} from '@notifee/react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Input from '../components/Input/Input';
import {Button} from '../components/Button';
import {TimeFormat} from '../utils/date';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodoService} from '../services';
import {showModal} from '../features/commonSlice';
import {onCreateTriggerNotification} from '../utils/notification';

const Add = ({navigation}) => {
  const {modal} = useSelector(state => state.common);
  const dispatch = useDispatch();
  const date = new Date(Date.now());
  const [selectedDate, setSelectedDate] = useState(date);

  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema: yup.object().shape({
      title: yup.string().required('Title must be required'),
    }),
    onSubmit: async data => {
      let dataStore = {
        title: data.title,
        time: TimeFormat(selectedDate),
      };
      await dispatch(AddTodoService(dataStore, navigation));
      await onCreateTriggerNotification(data.title, selectedDate);
    },
  });

  const showDatePicker = () => {
    dispatch(showModal(true));
  };

  const hideDatePicker = () => {
    dispatch(showModal(false));
  };

  const handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
  };

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
          isVisible={modal}
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
