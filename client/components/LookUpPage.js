import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { trainService } from '../services/trainService';

const LookUpPage = () => {
  const [selectedLine, setSelectedLine] = useState('');
  const trainLines = trainService.getTrainLines();

  return (
    <View style={styles.lookUpContainer}>
      <Text style={styles.lookUpCaptions}>Look up CTA</Text>
      {/* <Picker
        itemStyle={styles.dropDownItem}
        mode="dropdown"
        selectedValue={selectedLine}
        onValueChange={(value) => {
          setSelectedLine(value);
        }}
      >
        {trainLines.map((item, index) => {
          return (
            <Picker.Item
              label={item.lineName}
              value={item.lineName}
              key={index}
            />
          );
        })}
      </Picker> */}
    </View>
  );
};

const styles = StyleSheet.create({
  lookUpContainer: {
    flex: 0.8,
    backgroundColor: '#7d6b91',
    marginHorizontal: 10,
  }
});

export default LookUpPage;
