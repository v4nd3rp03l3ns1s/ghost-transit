import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List } from 'react-native-paper';

export function TrainStationsAccordion({ stations }) {
  console.log(stations, 'station accordion');
  return (
    <List.Accordion
      title="El Stations"
      left={props => <List.Icon {...props} icon="train" />}
      accessibilityLabel="El Stations">
      { stations ? stations.map((station) => (
        <List.Item title={station.stationName} />
      )) : null}
    </List.Accordion>
  );
}
