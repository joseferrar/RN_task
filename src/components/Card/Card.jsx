import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Card = ({title, date, foodtype, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.mainCardView}>
        <View style={styles.cardview}>
          <View style={{marginLeft: 12, marginBottom: 12}}>
            <View style={{}}>
              <Text style={styles.title}>
                {foodtype ? foodtype + '-' + title : title}
              </Text>
              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    elevation: 8,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingLeft: 1,
    paddingRight: 1,
    marginTop: 12,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    lineHeight: 24,
    margin: 6,
  },
  date: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
    lineHeight: 24,
    margin: 6,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
