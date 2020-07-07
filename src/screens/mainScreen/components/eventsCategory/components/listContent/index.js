import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {CardItem} from './components/cardItem';
import {LoadingIndicator} from './components/loadingIndicator';
import {NoEvents} from './components/noEvents';
import {ErrorMsg} from './components/errorMsg';

const width = Dimensions.get('window').width;

@inject('rootStore')
@observer
export class Events extends Component {
  renderSeparator = () => {
    return (
      <View
        style={styles.seperator}
      />
    );
  };

  renderFooter = () => {
    const {eventsList, loading} = this.props.rootStore;
    if (eventsList.length == 0 && !loading) return <NoEvents />
    return (
      <View
        style={styles.listItemView}
      />
    );
  };

  _renderMyList = item => <CardItem item={item} />;

  getList = () => {
    const {eventsList} = this.props.rootStore;
    const list = eventsList.slice();
    return list;
  };
  render() {
    const {loading, errorMsg} = this.props.rootStore;
    return (
      <View>
        {loading ? <LoadingIndicator /> : null}
        {errorMsg ? <ErrorMsg errorCode={errorMsg} /> : <View style={styles.container}>
            <FlatList
              data={this.getList()}
              renderItem={({item}) => <CardItem item={item} />}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={this.renderSeparator}
              ListFooterComponent={this.renderFooter}
            />
          </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.95,
    alignSelf: 'center',
    alignItems: 'center',
  },
  listItemView: {
    height: width * 0.32,
    borderColor: '#CED0CE',
  },
  seperator: {
    height: 3,
    width: '95%',
    backgroundColor: '#CED0CE',
    alignSelf: 'center',
  }
});
