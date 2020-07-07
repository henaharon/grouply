import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

export const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../../../../images/loader.gif')}
        style={styles.gifSize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  gifSize: {width: '50%', height: '50%', alignSelf: 'center'},
});
