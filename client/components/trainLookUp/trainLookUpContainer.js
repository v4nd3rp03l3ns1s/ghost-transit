import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List } from 'react-native-paper';
import { TrainLinesAccordion } from './trainLinesAccordion';

import { trainService } from '../../services/trainService';

const TrainLookUpContainer = () => {
  const [lines, setLines] = useState('');
  const [selectedLine, setSelectedLine] = useState('');
  const [selectedStation, setSelectedStation] = useState('');
  const [selectedStop, setSelectedStop] = useState('');
  const [error, setError] = useState(null);

  const trainLines = async () => {
    try {
      console.log('inside trainLines call');
      const retrievedLines = await trainService.getTrainLines();
      setLines(retrievedLines);
    } catch (err) {
      console.log('trainlines', err);
    }
  };

  useEffect(() => {
    trainLines();
  }, []);

  return (
    <View style={styles.lookUpContainer}>
      <List.Section title="Train Lookup" style={styles.lookUpCaptions}>
        <TrainLinesAccordion lines={lines} />
        <List.Accordion
          title="El Stations"
          left={props => <List.Icon {...props} icon="factory" />}>
          <List.Item title="Testing" />
        </List.Accordion>
        <List.Accordion
          title="El Stops"
          left={props => <List.Icon {...props} icon="octagon" />}>
          <List.Item title="Testing" />
        </List.Accordion>
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  lookUpContainer: {
    flex: 0.8,
    backgroundColor: '#7d6b91',
    marginHorizontal: 10,
  },
  lookUpCaptions: {
    color: '#f3eaf4',
    fontFamily: 'Menlo',
  }
});

export default TrainLookUpContainer;
