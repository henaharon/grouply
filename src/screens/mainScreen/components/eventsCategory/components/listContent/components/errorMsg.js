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

export const ErrorMsg = (props) => {
  return (
    <View style={styles.container}>
      {props.errorCode == 1 ? <BigBoldText>חיבור אינטרנט חלש, נסה שנית.</BigBoldText> : null}
      {props.errorCode == 2 ? <BigBoldText>נתקלנו בבעיה נסה שנית מאוחר יותר.</BigBoldText> : null}
    </View>
  );
};
