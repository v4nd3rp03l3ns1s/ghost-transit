import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { trainService } from '../services/trainService';

const LookUpPage = () => {
  return (
    <View style={styles.lookUpContainer}>
      <Text style={styles.lookUpCaptions}>Look up CTA</Text>
      <Dropdown label="Select El Line" data={trainService.getTrainLines} />
    </View>
  );
};

const styles = StyleSheet.create({
  lookUpContainer: {
    flex: 0.8,
    backgroundColor: '#7d6b91',
    marginHorizontal: 10,
  }
});

export default LookUpPage;
