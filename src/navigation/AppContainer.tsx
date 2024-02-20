import React from 'react';
import { View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@ui-kitten/components';
import { CryptoStackParamList } from 'types/navigation-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './root-navigation';
import { Host } from 'react-native-portalize';
import DevicesList from "../screens/crypto/DevicesList";

enableScreens();

const Stack = createNativeStackNavigator<CryptoStackParamList>();
const AppContainer = () => {
  const themes = useTheme();
  return (
    <Host>
      <NavigationContainer ref={navigationRef}>
        <View style={{ backgroundColor: themes['background-basic-color-1'], flex: 1 }}>
          <DevicesList></DevicesList>
        </View>
      </NavigationContainer>
    </Host>
  );
};

export default AppContainer;
