import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List } from 'react-native-paper';

export function TrainStationsAccordion({ lines }) {
  console.log(lines, 'line accordion');
  return (
    <List.Accordion
      title="El Stations"
      left={props => <List.Icon {...props} icon="train" />}
      accessibilityLabel="El Stations">
      { lines ? lines.map((line) => (
        <List.Item title={line.fullName} />
      )) : null}
    </List.Accordion>
  );
}
