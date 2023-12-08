import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SmallButton} from '../Button';

const Card = ({title, date, foodtype, onPress}) => {
  return (
    <View style={styles.mainCardView}>
      <View style={styles.cardview}>
        <View style={{marginLeft: 12, marginBottom: 12}}>
          <View>
            <Text style={styles.title}>
              {foodtype ? foodtype + '-' + title : title}
            </Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <SmallButton title={'Delete'} onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  mainCardView: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 4,
    flexDirection: 'row',
    paddingLeft: 1,
    paddingRight: 1,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    lineHeight: 24,
    margin: 4,
  },
  date: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
    lineHeight: 24,
    margin: 4,
  },
});
