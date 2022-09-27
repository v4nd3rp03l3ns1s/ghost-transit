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

  //redux states
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

  useEffect(() => {
    trainLines();
  }, [stationList, stopList, trainStop]);

  return (
    <View style={styles.lookUpContainer}>
      <ScrollView style={styles.lookUpScroll}>
        <List.Section style={styles.lookUpCaptions}>
          <TrainLinesAccordion lines={lines} style={styles.trainAccordion} selectedLine={selectedLine} />
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  lookUpContainer: {
    flex: 1,
    backgroundColor: '#7d6b91',
    marginHorizontal: 10,
    borderRadius: 15,
  },
  lookUpScroll: {
    height: '100%',
  },
  lookUpCaptions: {
    color: '#f3eaf4',
    fontFamily: 'Menlo',
    fontSize: 34,
    paddingHorizontal: 10,
  },
});

export default TrainLookUpContainer;
