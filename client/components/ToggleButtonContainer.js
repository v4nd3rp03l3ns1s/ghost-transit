import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List, ToggleButton } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateTransitTrain, updateTransitBus } from '../actions/transit';

const ToggleButtonContainer = () => {
  const dispatch = useDispatch();

  const selectTrain = function () {
    dispatch(updateTransitTrain());
  };
  const selectBus = function () {
    dispatch(updateTransitBus());
  };

  return (
    <View style={styles.toggleContainer}>
      <ToggleButton
        icon='train'
        style={styles.toggleButton}
        onPress={selectTrain}
      />
      <ToggleButton
        icon='bus'
        style={styles.toggleButton}
        onPress={selectBus}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  toggleContainer: {
    height: .2,
    marginTop: 20,
    flexDirection: 'row',
  },
  toggleButton: {
    flex: 1,
    color: '#e5cedc',
  }
});

export default ToggleButtonContainer;
