/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './screens/Home';
import {ProductDetails} from './screens/ProductDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductDataContextProvider} from './contexts/productDataContext';

const StackNavigator = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ProductDataContextProvider>
        <StackNavigator.Navigator initialRouteName="Home">
          <StackNavigator.Screen name="Home" component={Home} />
          <StackNavigator.Screen
            name="ProductDetails"
            component={ProductDetails}
          />
        </StackNavigator.Navigator>
      </ProductDataContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    fontSize: 40,
  },
});

export default App;
