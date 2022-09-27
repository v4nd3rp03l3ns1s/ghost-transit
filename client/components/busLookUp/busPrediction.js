import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List, IconButton } from 'react-native-paper';

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
    <View style={styles.predictContainer}>
      {busStop ? (
        <IconButton
          style={styles.buttonStyle}
          mode="outlined"
          compact="true"
          accesibilityLabel="Refresh prediction button"
          onPress={() => getPredictions(busStop)}
          icon="clock"
          color="#e5cedc"
        />
      ) : null}
      {busPredict ? (
        <View style={styles.predictTextContainer}>
          <Text style={styles.predictTopText} color={busRoute.routeColor}>Bus #{busPredict.vehicleID}</Text>
          <Text style={styles.predictBottomText}>{countdownCalculate(busPredict.countdown)}</Text>
        </View>
      ) : (
        <Text>No bus predicted.</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  predictContainer: {
    flexDirection: 'row',
    justifyContents: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonStyle: {
    width: 60,
    height: 60,
    backgroundColor: '#272838',
    marginLeft: 84,
  },
  predictTextContainer: {
    backgroundColor: '#f3eaf4',
    width: 120,
    height: 60,
    borderRadius: 25,
    justifyContents: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  predictTopText: {
    color: '#7d6b91',
    fontWeight: '700',
  },
  predictBottomText: {
    color: '#272838',
    fontWeight: '700',
  },
});