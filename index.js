/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import React, {Component} from 'react';
import App from './App';
import {Provider} from 'mobx-react';
import {name as appName} from './app.json';
import rootStore from './src/provider/rootStore'

class Application extends Component {
    render() {
      return (
        <Provider rootStore={rootStore}>
            <App />
        </Provider>
      )
    }
  }
AppRegistry.registerComponent(appName, () => Application);

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
  'componentWillReceiveProps has been renamed, and is not recommended for use.',
  'Picker has been extracted from react-native core and will be removed in a future release.'
])