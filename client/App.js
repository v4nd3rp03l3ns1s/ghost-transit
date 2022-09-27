import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Provider as PaperProvider, ToggleButton } from 'react-native-paper';

//redux imports
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './state/store';
import { useSelector, useDispatch } from 'react-redux';

//component imports
import HeaderBar from './components/HeaderBar';
import LookUpContainer from './components/lookUpContainer';
import TrainLookUpContainer from './components/trainLookUp/trainLookUpContainer';
import ToggleButtonContainer from './components/ToggleButtonContainer';

const App = () => {

  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <PaperProvider>
          <SafeAreaView style={styles.safeArea}>
            <HeaderBar />
            <LookUpContainer />
            <ToggleButtonContainer />
          </SafeAreaView>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#4d456b',
    flex: 1,
  },
});

export default App;
