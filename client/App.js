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

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Testing with expo.</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
