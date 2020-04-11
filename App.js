import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import BottomSheet from './BottomSheet';
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  fixButton: {
    position: 'absolute',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    bottom: 50,
    zIndex: 2,
  },
};
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fixButton}
          onPress={() => console.log('Click1')}>
          <Text style={{color: '#FFFFFF'}}>Button</Text>
        </TouchableOpacity>
        <BottomSheet />
      </View>
    );
  }
}

export default App;
