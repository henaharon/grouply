import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  Animated,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import styles from './navControllerStyle';

const width = Dimensions.get('window').width;

export class NavController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSelectedButton: 4,
      brownLineX: new Animated.Value(width * 0.23 * 6 * 0.5),
    };
  }

  onButtonClick = num => {
    if (num === this.state.curSelectedButton) {
      return;
    }
    let Xvalue;
    switch (num) {
      case 1:
        Xvalue = width * 0.23 * 6 * 0.01;
        break;
      case 2:
        Xvalue = width * 0.23 * 6 * 0.165;
        break;
      case 3:
        Xvalue = width * 0.23 * 6 * 0.335;
        break;
      case 4:
        Xvalue = width * 0.23 * 6 * 0.5;
        break;
      case 5:
        Xvalue = width * 0.23 * 6 * 0.67;
        break;
      case 6:
        Xvalue = width * 0.23 * 6 * 0.83;
        break;
    }
    this.setState({curSelectedButton: num}, () => {
      this.props.changeListDisplayed(num);
      Animated.timing(this.state.brownLineX, {
        toValue: Xvalue,
        duration: 250,
        useNativeDriver: false,
      }).start();
    });
  };

  render() {
    return (
      <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onButtonClick(1)}>
          <Image
            style={styles.image}
            source={require('../../../../images/conferenceIcon.png')}
          />
          <Text style={[styles.text, {color: this.state.button1color}]}>
            כנסים
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onButtonClick(2)}>
          <Image
            style={styles.image}
            source={require('../../../../images/magazineIcon.png')}
          />

          <Text style={[styles.text, {color: this.state.button2color}]}>
            מגזין
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onButtonClick(3)}>
          <Image
            style={styles.image}
            source={require('../../../../images/extrasIcon.png')}
          />

          <Text style={[styles.text, {color: this.state.button3color}]}>
            צ'ופרים
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onButtonClick(4)}>
          <Image
            style={styles.image}
            source={require('../../../../images/eventsIcon.png')}
          />

          <Text style={[styles.text, {color: this.state.button3color}]}>
            לוח אירועים
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onButtonClick(5)}>
          <Image
            style={styles.image}
            source={require('../../../../images/pollIcon.png')}
          />

          <Text style={[styles.text, {color: this.state.button3color}]}>
            סקרים
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onButtonClick(6)}>
          <Image
            style={styles.image}
            source={require('../../../../images/businessIcon.png')}
          />

          <Text style={[styles.text, {color: this.state.button3color}]}>
            עסקים
          </Text>
        </TouchableOpacity>
        <Animated.View
          style={[styles.brownLine, {left: this.state.brownLineX}]}
        />
      </ScrollView>
    );
  }
}
