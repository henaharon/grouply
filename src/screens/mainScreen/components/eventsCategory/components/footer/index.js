import React from 'react';
import {StyleSheet, Dimensions, View, ImageBackground} from 'react-native';
import {BigBoldText} from '../../../../../../uiComponents/fonts';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -20,
  },
  backgroundImage: {
    width: width,
    height: width * 0.28,
    justifyContent: 'flex-end',
  },
  textView: {
    width: width,
    height: height * 0.05,
    backgroundColor: 'white',
    opacity: 0.7,
    alignItems: 'center',
  },
});

export const Footer = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../../../images/footerImage.png')}
        style={styles.backgroundImage}>
        <View style={styles.textView}>
          <BigBoldText>כנס משאבי אנוש | 1/3/18</BigBoldText>
        </View>
      </ImageBackground>
    </View>
  );
};
