import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
        width: "100%"
  },

});

export const EmptyView = () => {
  return (
    <View style={styles.container} />
  );
};
