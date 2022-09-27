import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateTrainLine, updateStationList, updateTrainStation, updateTrainStop, updateTrainPredict } from '../../actions/train';
import { trainService } from '../../services/trainService';

export function TrainLinesAccordion({ lines }) {
  const dispatch = useDispatch();
  const trainLine = useSelector((state) => state.train.trainLine);

  const handlePress = async function (line) {
    dispatch(updateTrainLine(line));
    dispatch(updateTrainStation({}));
    dispatch(updateTrainStop({}));
    dispatch(updateTrainPredict(''));
    const trainStationList = await trainService.getTrainStations(line.lineName);
    dispatch(updateStationList(trainStationList));
  };

  return (
    <List.Accordion
      title={trainLine.fullName || 'El Lines'}
      style={styles.listParent}
      left={props => <List.Icon {...props} style={styles.listIcon} icon="train" color={trainLine.trainColor} />}
      accessibilityLabel="El Lines"
    >
      <ScrollView height="58%">
        {lines
          ? lines.map((line) => (
              <List.Item
                key={line._id}
                title={line.fullName}
                style={styles.listItem}
                onPress={() => handlePress(line)}
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
