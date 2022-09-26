import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List } from 'react-native-paper';

import { trainService } from '../services/trainService';

const LookUpPage = () => {
  const [lines, setLines] = useState('');
  const [selectedLine, setSelectedLine] = useState('');
  const [selectedStation, setSelectedStation] = useState('');
  const [selectedStop, setSelectedStop] = useState('');
  const [ error, setError ] = useState(null);

  const trainLines = async () => {
    const retrievedLines = await trainService.getTrainLines();
    const cleanedLines = retrievedLines.map(({ lineName, trainColor }) => ({
      lineName: lineName,
      trainColor: trainColor,
    }));
    console.log(cleanedLines, 'cleaned');
    setLines(cleanedLines);
  }


  return (
    <View style={styles.lookUpContainer}>
      <List.Section title="Train Lookup" style={styles.lookUpCaptions}>
        <List.Accordion
          title="El Lines"
          left={props => <List.Icon {...props} icon="train" />}>
          {lines.map(({lineName}) => {
            <List.Item title={lineName} />;
          })}
          <List.Item title="Testing" />
        </List.Accordion>
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

export default LookUpPage;
