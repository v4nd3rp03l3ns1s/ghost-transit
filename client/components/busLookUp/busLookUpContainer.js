import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

//redux imports
import { useSelector, useDispatch } from 'react-redux';

//import sub components
import { BusRoutesAccordion } from './busRoutesAccordion';
import { BusDirectionsAccordion } from './busDirectionsAccordion.js';
import { BusStopsAccordion } from './busStopsAccordion';
import { BusPrediction } from './busPrediction';

//import services
import { busService } from '../../services/busService';

const BusLookUpContainer = () => {
  const [routes, setRoutes] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');

  //redux states
  const busStop = useSelector((state) => state.bus.busStop);
  const directionList = useSelector((state) => state.bus.directionList);
  const busStopList = useSelector((state) => state.bus.busStopList);

  const busRoutes = async () => {
    try {
      console.log('in bus routes');
      const retrievedRoutes = await busService.getBusRoutes();
      setRoutes(retrievedRoutes);
    } catch (err) {
      console.error('Bus Routes call', err);
    }
  };

  useEffect(() => {
    busRoutes();
  }, [directionList, busStopList, busStop]);

  return (
    <View style={styles.lookUpContainer}>
      <ScrollView style={styles.lookUpScroll}>
        <List.Section style={styles.lookUpCaptions}>
          <BusRoutesAccordion routes={routes} style={styles.busAccordion} selectedRoute={selectedRoute} />
          {directionList ? (
            <BusDirectionsAccordion directions={directionList} />
          ) : (
            <Text>dev: no Route selected</Text>
          )}
          {busStopList ? (
            <BusStopsAccordion stops={busStopList} />
          ) : (
            <Text>dev error: no stops</Text>
          )}
        </List.Section>
        <BusPrediction />
      </ScrollView>
    </View>
  );
};

const styles =StyleSheet.create({

});

export default BusLookUpContainer;