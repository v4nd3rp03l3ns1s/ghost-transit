import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

//component imports
import HeaderBar from './components/HeaderBar';
import TrainLookUpContainer from './components/trainLookUp/trainLookUpContainer';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.safeArea}>
        <HeaderBar />
        <TrainLookUpContainer />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#272838',
    flex: 1,
  },
});

export default App;
