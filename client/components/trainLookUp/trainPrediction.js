import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Button } from 'react-native';
import { List } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateTrainPredict } from '../../actions/train';
import { trainService } from '../../services/trainService';

export function TrainPrediction({ stop }) {
  const dispatch = useDispatch();

  const trainStop = useSelector((state) => state.train.trainStop);
  const trainPredict = useSelector((state) => state.train.trainPrediction);

  const getPredictions = async function (stp) {
    const prediction = await trainService.getTrainPredict(stp);
    const nextTrain = prediction['0'];
    console.log(nextTrain);
    dispatch(updateTrainPredict(nextTrain));
  };

  const countdownCalculate = function (scheduledTime) {
    const scheduledDate = new Date(scheduledTime);
    const countdown = Math.abs(scheduledDate - Date.now());
    const countdownMin = Math.floor((countdown / 1000 / 60) << 0);
    if (countdownMin === 0) 'Approaching';
    if (countdownMin === 1) '1 minute';
    return countdownMin + ' minutes';
  }

  return (
    <View>
      {trainStop ? (
        <Button
          title="Refresh Prediction"
          onPress={() => getPredictions(trainStop)}
        />
      ) : null}
      {trainPredict ? (
        <Text>{trainPredict.runID}  {countdownCalculate(trainPredict.countdown)}</Text>
      ) : (
        <Text>No train predicted.</Text>
      )}
    </View>
  )
}