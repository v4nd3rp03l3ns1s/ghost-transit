import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateTrainStop } from '../../actions/train';
import { trainService } from '../../services/trainService';

export function TrainStopsAccordion({ stops }) {
  const dispatch = useDispatch();

  const handlePress = async function (stopID) {
    dispatch(updateTrainStop(stopID));
  };

  return (
    <List.Accordion
      title="El Stops"
      left={props => <List.Icon {...props} icon="octagon" />}
      accessibilityLabel="El Stops">
      { stops ? stops.map((stop) => (
        <List.Item
          key={stop._id}
          title={stop.stopName}
          onPress={() => handlePress(stop.stopID)}
        />
      )) : null}
    </List.Accordion>
  );
}
