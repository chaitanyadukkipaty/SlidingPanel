import React from 'react';
import {Text, View, Dimensions, Animated, TouchableOpacity} from 'react-native';

import SlidingUpPanel from 'rn-sliding-up-panel';

const {height} = Dimensions.get('window');

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#b197fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    flex: 1,
    backgroundColor: '#b197fc',
    position: 'relative',
  },
  panelHeader: {
    height: 180,
    backgroundColor: '#b197fc',
    justifyContent: 'flex-end',
    padding: 24,
  },
  textHeader: {
    fontSize: 28,
    color: '#FFF',
  },
  fixButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    zIndex: 2,
  },
};

class BottomSheet extends React.Component {
  static defaultProps = {
    draggableRange: {
      top: Math.floor(height * 0.85),
      bottom: Math.floor(height * 0.35),
    },
  };

  _draggedValue = new Animated.Value(0);

  render() {
    return (
      <SlidingUpPanel
        ref={c => (this._panel = c)}
        draggableRange={this.props.draggableRange}
        animatedValue={this._draggedValue}
        snappingPoints={[Math.floor(height * 0.85)]}
        height={height}
        backdropOpacity={0}
        friction={0.5}>
        <View style={styles.panel}>
          <View style={styles.panelHeader}>
            <Animated.View>
              <Text style={styles.textHeader}>Sliding Up Panel</Text>
            </Animated.View>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.fixButton}
              onPress={() => console.log('InternalClick1')}>
              <Text style={{color: '#FFFFFF'}}>InternalButton1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.fixButton}
              onPress={() => console.log('InternalClick2')}>
              <Text style={{color: '#FFFFFF'}}>InternalButton2</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SlidingUpPanel>
    );
  }
}

export default BottomSheet;
