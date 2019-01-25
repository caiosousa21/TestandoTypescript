import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
export default class App extends React.Component {
    render() {
        return (<Provider store={store}>
      <View style={styles.app}>
        
      </View>
      </Provider>);
    }
}
const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: 'space-between'
    },
    login: {},
    navbar: {},
});
