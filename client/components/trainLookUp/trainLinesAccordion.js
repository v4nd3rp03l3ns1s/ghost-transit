import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List } from 'react-native-paper';

export function TrainLinesAccordion({ lines }) {
  console.log(lines, 'line accordion');
  return (
    <List.Accordion
      title="El Lines"
      left={props => <List.Icon {...props} icon="train" />}
      accessibilityLabel="El Lines">
      { lines ? lines.map((line) => (
        <List.Item title={line.fullName} />
      )) : null}
    </List.Accordion>

  )
}
