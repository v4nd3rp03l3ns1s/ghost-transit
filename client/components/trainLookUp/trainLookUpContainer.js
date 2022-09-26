import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List } from 'react-native-paper';

//redux imports
import { useSelector, useDispatch } from 'react-redux';

//import sub components
import { TrainLinesAccordion } from './trainLinesAccordion';
import { TrainStationsAccordion } from './trainStationsAccordion';

//import services
import { trainService } from '../../services/trainService';

const TrainLookUpContainer = () => {
  const [lines, setLines] = useState('');
  const [selectedLine, setSelectedLine] = useState('');
  const [stations, setStations] = useState('');
  const [selectedStation, setSelectedStation] = useState('');
  const [stops, setStops] = useState('');
  const [selectedStop, setSelectedStop] = useState('');
  const [error, setError] = useState(null);

  //redux states
  const trainLine = useSelector(state => state.trainLine);
  const trainStation = useSelector(state => state.trainStation);
  const trainStop = useSelector(state => state.trainStop);

  const trainLines = async () => {
    try {
      const retrievedLines = await trainService.getTrainLines();
      setLines(retrievedLines);
    } catch (err) {
      console.error('Train Lines call', err);
    }
  };
  const trainStations = async () => {
    try {
      console.log('inside trainLines call');
      const retrievedLines = await trainService.getTrainStations();
      setStations(retrievedLines);
    } catch (err) {
      console.error('Train Stations call', err);
    }
  }

  useEffect(() => {
    trainLines();
  }, []);

  return (
    <View style={styles.lookUpContainer}>
      <List.Section title="Train Lookup" style={styles.lookUpCaptions}>
        <TrainLinesAccordion lines={lines} selectedLine={selectedLine} />
        {stations ? <TrainStationsAccordion stations={stations} /> : null}
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
