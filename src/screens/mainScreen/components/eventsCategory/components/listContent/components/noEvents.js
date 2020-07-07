import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BigBoldText} from '../../../../../../../uiComponents/fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const NoEvents = () => {
  return (
    <View style={styles.container}>
      <BigBoldText>אין אירועים בחודש זה.</BigBoldText>
    </View>
  );
};
