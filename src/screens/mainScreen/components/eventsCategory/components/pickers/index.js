import React, {PureComponent} from 'react';
import {inject, observer} from 'mobx-react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {HorizontalSpaceP} from '../../../../../../uiComponents/verticalSpace';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const emptyPlaceholder = {};

@inject('rootStore')
@observer
export class YearAndMonthPickers extends PureComponent {
  render() {
    return (
      <View style={styles.pickersView}>
        <MonthPicker store={this.props.rootStore} />
        <HorizontalSpaceP width={0.02} />
        <YearPicker store={this.props.rootStore} />
      </View>
    );
  }
}

const MonthPicker = props => {
  return (
    <RNPickerSelect
      placeholder={emptyPlaceholder}
      items={[
        {label: 'ינואר', value: '1'},
        {label: 'פברואר', value: '2'},
        {label: 'מרץ', value: '3'},
        {label: 'אפריל', value: '4'},
        {label: 'מאי', value: '5'},
        {label: 'יוני', value: '6'},
        {label: 'יולי', value: '7'},
        {label: 'אוגוסט', value: '8'},
        {label: 'ספטמבר', value: '9'},
        {label: 'אוקטובר', value: '10'},
        {label: 'נובמבר', value: '11'},
        {label: 'דצמבר', value: '12'},
      ]}
      onValueChange={value => props.store.setMonth(value)}
      style={{
        ...pickerStyle,
        iconContainer: {
          top: 10,
          left: 7,
        },
      }}
      useNativeAndroidPickerStyle={false}
      Icon={() => {
        return <Icon name="down" size={18} color="white" />;
      }}
    />
  );
};

const YearPicker = props => {
  return (
    <RNPickerSelect
      placeholder={emptyPlaceholder}
      items={[
        {label: '2020', value: '2020'},
        {label: '2019', value: '2019'},
        {label: '2018', value: '2018'},
        {label: '2017', value: '2017'},
      ]}
      onValueChange={value => props.store.setYear(value)}
      style={{
        ...pickerStyle,
        iconContainer: {
          top: 10,
          left: 7,
        },
      }}
      useNativeAndroidPickerStyle={false}
      Icon={() => {
        return <Icon name="down" size={20} color="white" />;
      }}
    />
  );
};

const pickerStyle = StyleSheet.create({
  inputAndroid: {
    height: height * 0.055,
    width: width * 0.35,
    fontSize: width * 0.035,
    borderRadius: 8,
    borderColor: 'white',
    fontWeight: 'bold',
    paddingRight: 30,
    borderColor: 'white',
    borderWidth: 1,
    textAlign: 'right',
    color: 'white',
  },
});

const styles = StyleSheet.create({
  pickersView: {
    backgroundColor: '#767676',
    height: height * 0.075,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
