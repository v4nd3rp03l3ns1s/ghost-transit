import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List, ToggleButton } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateTransitTrain, updateTransitBus } from '../actions/transit';

const ToggleButtonContainer = () => {
  const dispatch = useDispatch();
  const transitState = useSelector((state) => state.transit.mode);

  const selectTrain = function () {
    dispatch(updateTransitTrain());
  };
  const selectBus = function () {
    dispatch(updateTransitBus());
  };

  return (
    <View style={styles.metaContainer}>
      {transitState === 'train' ? (
        <View style={styles.toggleContainer}>
          <ToggleButton
            icon="train"
            style={styles.selectedButton}
            onPress={selectTrain}
          />
          <ToggleButton
            icon="bus"
            style={styles.toggleButton}
            onPress={selectBus}
          />
        </View>
      ) : (
        <View style={styles.toggleContainer}>
          <ToggleButton
            icon="train"
            style={styles.toggleButton}
            onPress={selectTrain}
          />
          <ToggleButton
            icon="bus"
            style={styles.selectedButton}
            onPress={selectBus}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  metaContainer: {
    alignItems: 'center',
  },
  toggleContainer: {
    flex: 0.2,
    marginTop: 20,
    flexDirection: 'row',
    width: 100,
  },
  selectedButton: {
    flex: 1,
    backgroundColor: '#e5cedc',
  },
  toggleButton: {
    flex: 1,
    backgroundColor: '#4d456b',
  }
});

export default ToggleButtonContainer;
