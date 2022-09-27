import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateTrainStop, updateTrainPredict } from '../../actions/train';
import { trainService } from '../../services/trainService';

export function TrainStopsAccordion({ stops }) {
  const dispatch = useDispatch();
  const trainLine = useSelector((state) => state.train.trainLine);
  const trainStop = useSelector((state) => state.train.trainStop);

  const handlePress = async function (stop) {
    dispatch(updateTrainStop(stop));
    getPredictions(stop);
  };

  const getPredictions = async function (stp) {
    const prediction = await trainService.getTrainPredict(stp.stopID);
    const nextTrain = prediction['0'];
    dispatch(updateTrainPredict(nextTrain));
  };

  return (
    <List.Accordion
      title={trainStop.stopName || 'Select El Stop'}
      style={styles.listParent}
      left={props => <List.Icon {...props} style={styles.listIcon} icon="arrow-down-bold-hexagon-outline" color={trainLine.trainColor} />}
      accessibilityLabel="El Stops"
    >
      <ScrollView height="29%">
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
