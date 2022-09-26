import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderBar = () => {
  return (
    <View style={styles.headerBar}>
      <Text style={styles.titleText}>Station to Station</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: '#5d536b',
    flex: 0.1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  titleText: {
    color: '#f3eaf4',
    fontFamily: 'Menlo',
    fontSize: '14',
    fontWeight: '700',
    marginLeft: 10,
    marginTop: 35,
  },
});

export default HeaderBar;
