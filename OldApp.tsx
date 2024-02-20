import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Toast from 'react-native-toast-message';
import BleService, {Peripheral} from './BleService';

const bleService = new BleService();

export default function App(): React.JSX.Element {
  bleService: BleService;

  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [peripherals, setPeripherals] = useState<
      Map<Peripheral['id'], Peripheral>
  >([]);

  useEffect(() => {
    bleService.setEvents({
      bleManagerConnectPeripheral: e => {
        console.log('e.peripheral', e.peripheral)
        console.log('Connected', e)
      },
      bleManagerStartSuccess: () => {
        Toast.show({
          type: 'info',
          text1: 'BleManager started..',
        });
      },
      bleManagerDiscoverPeripheral: p => {
        console.log('p.advertising.localName', p.advertising.localName);
      },
      bleManagerStopScan: () => {
        setIsScanning(false);
        setPeripherals(bleService.getPeripherals());

        console.log('scan: stop;');
        Toast.show({
          type: 'success',
          text1: 'Scan stop..',
          position: 'bottom',
        });
      },
      bleManagerStartScan: () => {
        setIsScanning(true);
        console.log('scan: start;');
        Toast.show({
          type: 'info',
          text1: 'Scan start..',
          position: 'bottom',
        });
      },
      bleManagerDidUpdateValueForCharacteristic: a => {
        console.log('bleManagerDidUpdateValueForCharacteristic', a.value);
      },
    });

    return () => bleService.destroy();
  });

  return (
      <>
        <Toast />
        <View>
          <Text>Hello, World!!!!</Text>
          {isScanning ? <Text>SKANUJE!</Text> : <Text>Juz nie</Text>}
          <Button
              onPress={() => {
                bleService.scan();
              }}
              title="Scan!"
          />
          <FlatList
              data={[...peripherals.values()]}
              renderItem={({item}) => (
                  <>
                    <Text>id: {item.id}</Text>
                    <Text>name: {item.name}</Text>
                    <Button
                        onPress={() => {
                          bleService.connect(item);
                        }}
                        title="Connect!"
                    />
                    <Button
                        onPress={() => {
                          console.log(bleService.read(item));
                        }}
                        title="Read!"
                    />
                    <Text>-------</Text>
                  </>
              )}
          />
        </View>
      </>
  );
};
