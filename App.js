import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import MainReducer from './store/reducers/mainReducer';

enableScreens();

const rootReducer = combineReducers({
  meals: MainReducer
});

const store = createStore(rootReducer);

const fetchFont = () => {
  return Font.loadAsync({
    'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf')
  });
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFont} onFinish={() => setFontLoaded(true)} />;
  }

  StatusBar.setBarStyle('dark-content', true);
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MealsNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
