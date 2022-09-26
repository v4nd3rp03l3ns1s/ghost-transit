import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

//redux imports
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './state/store';

//component imports
import HeaderBar from './components/HeaderBar';
import TrainLookUpContainer from './components/trainLookUp/trainLookUpContainer';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <PaperProvider>
          <SafeAreaView style={styles.safeArea}>
            <HeaderBar />
            <TrainLookUpContainer />
          </SafeAreaView>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#272838',
    flex: 1,
  },
});

export default App;
