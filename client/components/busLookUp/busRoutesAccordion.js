import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

//redux and state management imports
import { useSelector, useDispatch } from 'react-redux';
import { updateBusRoute, updateDirectionList, updateBusDirection, updateBusStop, updateBusPredict } from '../../actions/bus';
import { busService } from '../../services/busService';

export function BusRoutesAccordion({ routes }) {
  const dispatch = useDispatch();
  const busRoute = useSelector((state) => state.bus.busRoute);

  const handlePress = async function (route) {
    dispatch(updateBusRoute(route));
    dispatch(updateBusDirection(''));
    dispatch(updateBusStop(''));
    dispatch(updateBusPredict(''));
    const busDirectionList = await busService.getBusDirections(route.routeID);
    console.log(busDirectionList, typeof busDirectionList, 'dl');
    dispatch(updateDirectionList(busDirectionList));
  };

  return (
    <List.Accordion
      title={busRoute.routeName || 'Bus Routes'}
      style={styles.listParent}
      left={props => <List.Icon {...props} style={styles.listIcon} icon="bus" color={busRoute.routeColor} />}
      accessibilityLabel="Bus Routes"
    >
      <ScrollView height="22%">
        {routes
          ? routes.map((route) => (
            <List.Item
              key={route._id}
              title={route.routeID + ': ' + route.routeName}
              style={styles.listItem}
              onPress={() => handlePress(route)}
            />
          ))
        : null}
      </ScrollView>
    </List.Accordion>
  )
}

const styles = StyleSheet.create({
  listParent: {
    backgroundColor: '#f3eaf4',
  },
  listIcon: {
    backgroundColor: '#4d456b',
    borderRadius: 40,
  },
  listItem: {
    backgroundColor: '#e5cedc',
  },
});