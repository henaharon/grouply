import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {YearAndMonthPickers} from './components/pickers'
import { Events } from './components/listContent'
import {Footer} from './components/footer'
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
        width: width
  }
});

export const EventsCategory = () => {
  return (
    <View style={styles.container}>
      <YearAndMonthPickers />
      <Events />
      <Footer />
    </View>
  );
};
