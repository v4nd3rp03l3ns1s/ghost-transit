import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { trainService } from '../services/trainService';

const LookUpPage = () => {
  return (
    <View style={styles.lookUpContainer}>
      <Text style={styles.lookUpCaptions}>Look up CTA</Text>
      {/* <Dropdown label="Select El Line" data={trainService.getTrainLines} /> */}
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
