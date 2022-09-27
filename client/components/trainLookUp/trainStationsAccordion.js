import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateTrainStation, updateStopList } from '../../actions/train';
import { trainService } from '../../services/trainService';

export function TrainStationsAccordion({ stations }) {
  const dispatch = useDispatch();
  const trainLine = useSelector((state) => state.train.trainLine);
  const trainStation = useSelector((state) => state.train.trainStation);

  const handlePress = async function (stationObj) {
    dispatch(updateTrainStation(stationObj));
    const trainStopList = await trainService.getTrainStops(trainLine.lineName);
    console.log('in station Obj', trainStopList);
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
      left={props => <List.Icon {...props} icon="home" color={trainLine.trainColor} />}
      accessibilityLabel="El Stations"
    >
      <ScrollView height="45%">
        {stations
          ? stations.map((station) => (
              <List.Item
                key={station._id}
                title={station.stationName}
                onPress={() => handlePress(station)}
              />
            ))
          : null}
      </ScrollView>
    </List.Accordion>
  );
}
