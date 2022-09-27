import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List, IconButton, Button } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateBusPredict } from '../../actions/bus';
import { busService } from '../../services/busService';

export function BusPrediction({ stop }) {
  const dispatch = useDispatch();

  const busRoute = useSelector((state) => state.bus.busRoute);
  const busStop = useSelector((state) => state.bus.busStop);
  const busPredict = useSelector((state) => state.bus.busPrediction);

  const getPredictions = async function (stp) {
    const prediction = await busService.getBusPredict(stp);
    const nextBus = prediction['0'];
    dispatch(updateBusPredict(nextBus));
  };

  const countdownCalculate = function (scheduledTime) {
    if (scheduledTime === 0) {
      return 'Approaching';
    }
    if (scheduledTime === 1) {
      return '1 minute';
    }
    return scheduledTime + ' minutes';
  };

  return (
    <View>
      <Button style={styles.predictTextContainer} onPress={() => getPredictions(busStop)}>
        {busPredict ? (
          <Text style={styles.predictBottomText}>{countdownCalculate(busPredict.countdown)}</Text>
        ) : (
          <Text style={styles.predictBottomText}>None</Text>
        )}
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 60,
    height: 60,
    backgroundColor: '#272838',
    marginLeft: 84,
  },
  predictTextContainer: {
    backgroundColor: '#7d6b91',
    width: 138,
    height: 42,
    justifyContents: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  predictTopText: {
    color: '#7d6b91',
    fontWeight: '500',
    marginTop: 3,
    fontSize: 3,
  },
  predictBottomText: {
    color: '#f3eaf4',
    fontWeight: '500',
    fontSize: 16,
  },
});