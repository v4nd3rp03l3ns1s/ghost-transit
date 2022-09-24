import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

//component imports
import HeaderBar from './components/HeaderBar';
import LookUpPage from './components/LookUpPage';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderBar />
      <LookUpPage />
    </SafeAreaView>
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
