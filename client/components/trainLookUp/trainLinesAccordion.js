import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateTrainLine } from '../../actions/train';

export function TrainLinesAccordion({ lines }) {
  const dispatch = useDispatch();

  console.log(lines, 'line accordion');
  const handlePress = function (lineName) {
    dispatch(updateTrainLine(lineName));
  }

  return (
    <List.Accordion
      title="El Lines"
      left={props => <List.Icon {...props} icon="train" />}
      accessibilityLabel="El Lines">
      { lines ? lines.map((line) => (
        <List.Item
          key={line._id}
          title={line.fullName}
          onPress={() => dispatch(updateTrainLine(line.lineName))}
        />
      )) : null}
    </List.Accordion>
  );
}
