import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: height * 0.28, 
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  text: {
    fontSize: width * 0.035,
    color: 'darkgrey',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  button: {
    width: width * 0.23,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: width * 0.17,
    height: width * 0.15,
  },
  brownLine: {
    width: width * 0.23,
    borderBottomWidth: 3,
    borderColor: 'grey',
    position: 'absolute',
    bottom: '1%',
  },
});

export default styles;
