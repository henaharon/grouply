import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {View, Dimensions, Animated} from 'react-native';
import styled from 'styled-components';
import {Header} from './components/header/header';
import {NavController} from './components/nav/navController';
import {VerticalSpaceP} from '../../uiComponents/verticalSpace';
import {EventsCategory} from './components/eventsCategory';
import {EmptyView} from './components/emptyView';

const width = Dimensions.get('window').width;

@inject('rootStore')
@observer
export class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      listDisplayed: new Animated.Value(-width * 3)
    };
  }
  listController = listNum => {
    let Xvalue;
    switch (listNum) {
      case 1:
        Xvalue = 0;
        break;
      case 2:
        Xvalue = -width;
        break;
      case 3:
        Xvalue = -width * 2;
        break;
      case 4:
        Xvalue = -width * 3;
        break;
      case 5:
        Xvalue = -width * 4;
        break;
      case 6:
        Xvalue = -width * 5;
        break;
    }
    Animated.timing(this.state.listDisplayed, {
      toValue: Xvalue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  async componentDidMount() {
    await this.props.rootStore.getEvents();
  }

  render() {
    return (
      <BaseView>
        <Header store={this.props.rootStore}/>
        <VerticalSpaceP height={0.05} />
        <NavController changeListDisplayed={this.listController} />
        <Animated.View
          style={{
            flexBasis: 500,
            flexDirection: 'row',
            left: this.state.listDisplayed,
          }}>
          <EmptyView />
          <EmptyView />
          <EmptyView />
          <EventsCategory />
        </Animated.View>
      </BaseView>
    );
  }
}

const BaseView = styled(View)`
    background-color: white;
`;
