import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateTrainLine, updateStationList } from '../../actions/train';
import { trainService } from '../../services/trainService';

//services imports
import { getTrainStations } from '../../services/trainService';

export function TrainLinesAccordion({ lines }) {
  const dispatch = useDispatch();

  const handlePress = function (lineName) {
    dispatch(updateTrainLine(lineName));
    const trainStationList = trainService.getTrainStations(lineName);
    dispatch(updateStationList(trainStationList));
  };

  return (
    <List.Accordion
      title="El Lines"
      left={props => <List.Icon {...props} icon="train" />}
      accessibilityLabel="El Lines">
      { lines ? lines.map((line) => (
        <List.Item
          key={line._id}
          title={line.fullName}
          onPress={() => handlePress(line.lineName)}
        />
      )) : null}
    </List.Accordion>
  );
}
