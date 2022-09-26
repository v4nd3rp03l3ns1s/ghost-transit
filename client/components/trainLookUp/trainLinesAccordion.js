import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateTrainLine } from '../../actions/train';

export function TrainLinesAccordion({ lines }) {
  const dispatch = useDispatch();

  function handleSelect(selectedLine) {
    dispatch(updateTrainLine(selectedLine));
  }

  console.log(lines, 'line accordion');
  return (
    <List.Accordion
      title="El Lines"
      left={props => <List.Icon {...props} icon="train" />}
      accessibilityLabel="El Lines">
      { lines ? lines.map((line) => (
        <List.Item
          title={line.fullName}
          onPress={handleSelect(line.lineName)}
        />
      )) : null}
    </List.Accordion>
  );
}
