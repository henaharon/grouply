import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

import {
  MedBoldText,
  SmallBoldText,
} from '../../../../../../../uiComponents/fonts';
import { HorizontalSpaceP } from '../../../../../../../uiComponents/verticalSpace';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const CardItem = props => {
    const { title, short_description, picture, dates } = props.item;
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Icon name="left" size={20} color="#767676" />
      <View style={styles.textContentView}>
        <MedBoldText>{dates[0]}</MedBoldText>
        <SmallBoldText>{title}</SmallBoldText>
        <Text numberOfLines={2} ellipsizeMod="tail">{short_description}</Text>
      </View>
      <HorizontalSpaceP width={0.02} />
      <Image style={styles.imageSize} source={{uri: picture}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.95,
    height: height * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left'

  },
  textContentView: {
    width: width * 0.55,
    alignItems: 'flex-end',


},
imageSize: {
    width: width * 0.31 ,
    height: undefined,
    aspectRatio : 5 / 3.33
  }
});
