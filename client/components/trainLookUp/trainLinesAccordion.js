import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateTrainLine, updateStationList, updateTrainStation, updateTrainStop } from '../../actions/train';
import { trainService } from '../../services/trainService';

export function TrainLinesAccordion({ lines }) {
  const dispatch = useDispatch();
  const trainLine = useSelector((state) => state.train.trainLine);

  const handlePress = async function (line) {
    dispatch(updateTrainLine(line));
    dispatch(updateTrainStation({}));
    dispatch(updateTrainStop({}));
    const trainStationList = await trainService.getTrainStations(line.lineName);
    dispatch(updateStationList(trainStationList));
  };

  return (
    <List.Accordion
      title={trainLine.fullName || 'El Lines'}
      left={props => <List.Icon {...props} icon="train" />}
      accessibilityLabel="El Lines"
    >
      <ScrollView height="45%">
        {lines
          ? lines.map((line) => (
              <List.Item
                key={line._id}
                title={line.fullName}
                onPress={() => handlePress(line)}
              />
            ))
          : null}
      </ScrollView>
    </List.Accordion>
  );
}
