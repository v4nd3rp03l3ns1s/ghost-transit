import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderBar = () => {
  return (
    <View style={styles.headerBar}>
      <Text style={styles.titleText}>Station to Station</Text>
      <Text style={styles.subText}>CTA Mobile Tracking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: '#4d456b',
    flex: 0.1,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  titleText: {
    color: '#e5cedc',
    fontFamily: 'Menlo',
    fontSize: '20',
    fontWeight: '700',
    marginBottom: 5,
  },
  subText: {
    color: '#e5cedc',
    fontSize: '16',
    fontFamily: 'Menlo',
  }
});

export default HeaderBar;
