import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LookUpPage = () => {
  return (
    <View style={styles.lookUpContainer}>
      <Text style={styles.lookUpCaptions}>Look up CTA</Text>
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