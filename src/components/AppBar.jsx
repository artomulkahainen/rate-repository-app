import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <TouchableWithoutFeedback onPress={() => console.log('repos')}>
          <Link
            style={{ padding: 10 }}
            to='/'
            component={TouchableOpacity}
            activeOpacity={0.8}
          >
            <Text style={{ color: 'white' }}>Repositories</Text>
          </Link>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => console.log('signin')}>
          <Link
            style={{ padding: 10 }}
            to='/signin'
            component={TouchableOpacity}
            activeOpacity={0.8}
          >
            <Text style={{ color: 'white' }}>Signin</Text>
          </Link>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export default AppBar;
