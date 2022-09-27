import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

//redux imports
import { useSelector, useDispatch } from 'react-redux';

//import sub components
import { TrainLinesAccordion } from './trainLinesAccordion';
import { TrainStationsAccordion } from './trainStationsAccordion';
import { TrainStopsAccordion } from './trainStopsAccordion';
import { TrainPrediction } from './trainPrediction';

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
  const trainLine = useSelector((state) => state.train.trainLine);
  const trainStation = useSelector((state) => state.train.trainStation);
  const trainStop = useSelector((state) => state.train.trainStop);
  const stationList = useSelector((state) => state.train.stationList);
  const stopList = useSelector((state) => state.train.stopList);
  const trainPredict = useSelector((state) => state.train.trainPrediction);

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
  }, [stationList, stopList, trainStop]);

  console.log(trainStop, 'stop');

  return (
    <View style={styles.lookUpContainer}>
      <ScrollView style={styles.lookUpScroll}>
        <List.Section style={styles.lookUpCaptions}>
          <TrainLinesAccordion lines={lines} selectedLine={selectedLine} />
          {stationList ? (
            <TrainStationsAccordion stations={stationList} />
          ) : (
            <Text>dev: no Station selected</Text>
          )}
          {stopList ? (
            <TrainStopsAccordion stops={stopList} />
          ) : (
            <Text>dev error: no stops</Text>
          )}
        </List.Section>
        <TrainPrediction />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  lookUpContainer: {
    flex: 0.80,
    backgroundColor: '#7d6b91',
    marginHorizontal: 10,
  },
  lookUpScroll: {
    height: '100%',
  },
  lookUpCaptions: {
    color: '#f3eaf4',
    fontFamily: 'Menlo',
  }
});

export default TrainLookUpContainer;
