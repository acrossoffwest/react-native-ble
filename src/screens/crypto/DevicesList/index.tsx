import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView, TextBase} from 'react-native';
import { NavigationAction, Container, Text, HStack, LinearGradientText } from 'components';
import { useTheme, TopNavigation, ViewPager, Input, Icon, Button } from '@ui-kitten/components';

import SegmentedTab from './SegmentedTab';
import { useLayout, useToggle } from 'hooks';
import { Images } from 'assets/images';
import TraderItem from './TraderItem';
import HotToday from './HotToday';
import Trending from './Trending';
import Popular from './Popular';
import BottomTab from './BottomTab';
import BLEDeviceList from "./BLEDeviceList";
import BleService, {Peripheral} from "../../../../BleService";
import Toast from "react-native-toast-message";

const Crypto01 = React.memo(() => {
  const theme = useTheme();

  const [deviceSearch, setDeviceSearch] = React.useState<string>("");
  const [isScanning, setIsScanning] = useState<boolean>(true);
  const [peripherals, setPeripherals] = useState<[]>([]);

  const bleService = new BleService();

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
      console.log('p.advertising.localName 2', p.advertising.localName);
      if (p.advertising.localName) {
        const duplicate = peripherals.find(d => d.name === p.advertising.localName);
        if (duplicate) {
          return;
        }
        peripherals.push({
          name: p.advertising.localName,
          code: p.id,
          payload: p
        });
      }
    },
    bleManagerStopScan: () => {
      setIsScanning(false);

      Toast.show({
        type: 'success',
        text1: 'Scan stop..',
        position: 'bottom',
      });
    },
    bleManagerStartScan: () => {
      setIsScanning(true);
      console.log('scan: start;');
      setPeripherals([]);
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

  useState(() => {
    if (isScanning) {
      bleService.start()
        .then(() => bleService.scan())
        .then(() => {
          console.log('BLE Service: Scan completed.', bleService.getPeripherals().keys());
        });
    }
  });

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input
          accessoryLeft={() => (
            <Icon
              pack="assets"
              name="search"
              style={[styles.icon, { tintColor: theme['color-primary-500'] }]}
            />
          )}
          value={deviceSearch}
          onChangeText={(v) => setDeviceSearch(v)}
          placeholder="Enter device name…"
          style={styles.input}
        />
        <Button
            style={{marginTop: 20, marginHorizontal: 20}}
            onPress={() => {}}
        >Scan</Button>
        <BLEDeviceList data={peripherals.filter(v => v?.name?.toLowerCase()?.includes(deviceSearch.toLowerCase()))}/>
      </ScrollView>
      <BottomTab />
    </Container>
  );
});

export default Crypto01;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  tabView: {
    marginBottom: 8,
  },
  contentTab: {
    paddingLeft: 8,
  },
  input: {
    marginTop: 8,
    paddingHorizontal: 16,
    borderRadius: 48,
    height: 40,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 8,
    marginHorizontal: 4,
  },
  caret: {
    width: 16,
    height: 16,
  },
  eye: {
    width: 16,
    height: 16,
  },
  button1: {
    borderRadius: 24,
  },
  imageView: {
    width: '100%',
    height: 160,
    marginRight: 8,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentNft: {
    paddingLeft: 16,
    marginTop: 24,
  },
  buttonAction: {
    width: 64,
    height: 64,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    marginBottom: 24,
  },
  actionsView: {
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  traderContent: {
    paddingLeft: 16,
  },
  titleText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginLeft: 16,
  },
  title: {
    lineHeight: 24,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
  },
  viewTab: {
    flexDirection: 'row',
    marginTop: 32,
    marginHorizontal: 16,
  },
});
