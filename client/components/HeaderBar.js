import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderBar = () => {
  return (
    <View style={styles.headerBar}>
      <Text>Station to Station</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: '#5d536b',
  },
});

export default HeaderBar;
