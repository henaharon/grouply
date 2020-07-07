import React from 'react';
import {StyleSheet, Dimensions, View, Image} from 'react-native';
import {MedText} from '../../../../uiComponents/fonts';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    top: height * 0.02,
    width: width * 0.98,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  },
  burger: {
    width: width * 0.1,
    height: width * 0.1,
  },
  burgerView: {
    width: width * 0.16,
    height: width * 0.09,
    alignItems: 'flex-end',
  },
  logo: {
    width: width * 0.2,
    height: width * 0.09,
  },
});

export const Header = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../../images/logo.png')}
      />

  <MedText style={styles.text}>{`שלום, ${props.store.userName}`}</MedText>
      <View style={styles.burgerView}>
        <Image
          style={styles.burger}
          source={require('../../../../images/burger.png')}
        />
      </View>
    </View>
  );
};
