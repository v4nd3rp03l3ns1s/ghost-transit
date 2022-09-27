import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateTrainStation, updateStopList, updateTrainStop, updateTrainPredict } from '../../actions/train';
import { trainService } from '../../services/trainService';

export function TrainStationsAccordion({ stations }) {
  const dispatch = useDispatch();
  const trainLine = useSelector((state) => state.train.trainLine);
  const trainStation = useSelector((state) => state.train.trainStation);

  const handlePress = async function (stationObj) {
    dispatch(updateTrainStation(stationObj));
    dispatch(updateTrainStop(''));
    dispatch(updateTrainPredict(''));
    const trainStopList = await trainService.getTrainStops(trainLine.lineName);
    const filteredStops = [];
    trainStopList.forEach((stop) => {
      if (stop.stationID === stationObj.stationID) {
        filteredStops.push(stop);
      }
    });
    dispatch(updateStopList(filteredStops));
  };

  return (
    <List.Accordion
      title={trainStation.stationName || 'Select El Station'}
      style={styles.listParent}
      left={props => <List.Icon {...props} icon="bank-outline" color={trainLine.trainColor} style={styles.listIcon}/>}
      accessibilityLabel="El Stations"
    >
      <ScrollView height="38%">
        {stations
          ? stations.map((station) => (
              <List.Item
                key={station._id}
                title={station.stationName}
                style={styles.listItem}
                onPress={() => handlePress(station)}
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
