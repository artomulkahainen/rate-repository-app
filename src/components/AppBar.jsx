import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary
    // ...
  },
  // ...
});

const AppBar = ({title}) => {
  return <View style={styles.container}><Text style={{color: 'white'}}>{title}</Text></View>;
};

export default AppBar;