import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { List, ToggleButton } from 'react-native-paper';

const ToggleButtonContainer = () => {

  return (
    <View style={styles.toggleContainer}>
      <ToggleButton
        icon='train'
        style={styles.toggleButton}
      />
      <ToggleButton
        icon='bus'
        style={styles.toggleButton}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  toggleContainer: {
    height: .2,
    marginTop: 20,
    flexDirection: 'row',
  },
  toggleButton: {
    flex: 1,
    color: '#e5cedc',
  }
});

export default ToggleButtonContainer;