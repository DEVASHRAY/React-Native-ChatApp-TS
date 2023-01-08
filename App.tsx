import React, {useEffect, type PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 6000);
  }, []);

  return <SafeAreaView></SafeAreaView>;
};

const styles = StyleSheet.create({});

export default App;
