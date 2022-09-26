import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateTrainStation, updateStopList } from '../../actions/train';
import { trainService } from '../../services/trainService';

export function TrainStationsAccordion({ stations }) {
  const trainLine = useSelector((state) => state.train.trainLine);
  const dispatch = useDispatch();

  const handlePress = async function (stationID) {
    dispatch(updateTrainStation(stationID));
    const trainStopList = await trainService.getTrainStops(trainLine);
    console.log(trainStopList);
    const filteredStops = [];
    trainStopList.forEach((stop) => {
      if (stop.stationID === stationID) {
        filteredStops.push(stop);
      }
    });
    dispatch(updateStopList(filteredStops));
  };

  return (
    <List.Accordion
      title="El Stations"
      left={props => <List.Icon {...props} icon="train" />}
      accessibilityLabel="El Stations">
      {stations
        ? stations.map((station) => (
          <List.Item
            key={station._id}
            title={station.stationName}
            onPress={() => handlePress(station.stationID)}
          />
        ))
      : null}
    </List.Accordion>
  );
}
