import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List, ToggleButton } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateTransitTrain, updateTransitBus } from '../actions/transit';
import { BusPrediction } from './busLookUp/busPrediction';
import { TrainPrediction } from './trainLookUp/trainPrediction';

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
            style={styles.selectedTrain}
            onPress={selectTrain}
          />
          <TrainPrediction />
          <ToggleButton
            icon="bus"
            style={styles.unselectedBus}
            onPress={selectBus}
          />
        </View>
      ) : (
        <View style={styles.toggleContainer}>
          <ToggleButton
            icon="train"
            style={styles.unselectedTrain}
            onPress={selectTrain}
          />
          <BusPrediction />
          <ToggleButton
            icon="bus"
            style={styles.selectedBus}
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
    width: 368,
  },
  selectedTrain: {
    flex: 1,
    backgroundColor: '#b138ef',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  unselectedTrain: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#f3eaf4',
  },
  selectedBus: {
    flex: 1,
    backgroundColor: '#b138ef',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  unselectedBus: {
    flex: 1,
    backgroundColor: '#f3eaf4',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default ToggleButtonContainer;
