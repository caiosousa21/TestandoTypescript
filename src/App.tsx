import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Login from './components/Login'
import NavBar from './components/NavBar'
import {Provider} from 'react-redux'
import store from './store'

export default class App extends React.Component<{},{}> {
  
  render() {
    return (
      <Provider store={store}>
      <View style={styles.app}>
        {/* <Login styles={styles.login}/>
        <NavBar styles={styles.navbar}/> */}
      </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  app:{
    flex:1,
    justifyContent:'space-between'
  },
  login: {
    
  },
  navbar: {
  },
});