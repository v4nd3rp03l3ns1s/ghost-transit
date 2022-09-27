import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Provider as PaperProvider, ToggleButton } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import TrainLookUpContainer from './trainLookUp/trainLookUpContainer';

const LookUpContainer = () => {
  const transitState = useSelector((state) => state.transit.mode);

  return (
    <View style={styles.container}>
      {transitState === 'train' ? (
        <TrainLookUpContainer />
      ) : (
        <Text>Bus filler</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
  }
});

export default LookUpContainer;
