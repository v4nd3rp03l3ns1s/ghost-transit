import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateBusStop, updateBusPredict } from '../../actions/bus';
import { busService } from '../../services/busService';

export function BusStopsAccordion({ stops }) {
  const dispatch = useDispatch();
  const busRoute = useSelector((state) => state.bus.busRoute);
  const busStop = useSelector((state) => state.bus.busStop);

  const handlePress = async function (stop) {
    dispatch(updateBusStop(stop));
    getPredictions(stop);
  };

  const getPredictions = async function (stp) {
    const prediction = await busService.getBusPredict(stp);
    const nextBus = prediction['0'];
    dispatch(updateBusPredict(nextBus));
  };

  return (
    <List.Accordion
      title={busStop.stopName || 'Select Bus Stop'}
      style={styles.listParent}
      left={props => <List.Icon {...props} style={styles.listIcon} icon="arrow-down-bold-hexagon-outline" color={busRoute.routeColor} />}
      accessibilityLabel="Bus Stops"
    >
      <ScrollView height="31%">
        {stops
          ? stops.map((stop) => (
              <List.Item
                key={stop._id}
                title={stop.stopName}
                style={styles.listItem}
                onPress={() => handlePress(stop)}
              />
            ))
          : null}
      </ScrollView>
    </List.Accordion>
  );
}

const styles = StyleSheet.create({
  listParent: {
    backgroundColor: '#f3eaf4',
  },
  listIcon: {
    backgroundColor: '#4d456b',
    borderRadius: 40,
  },
  listItem: {
    backgroundColor: '#e5cedc',
  },
});