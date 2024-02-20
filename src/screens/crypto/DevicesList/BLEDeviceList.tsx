import React, {useEffect, useState} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useLayout } from 'hooks';
import { Images } from 'assets/images';
import CryptoItem from './CryptoItem';
import BLEItem from "./BLEItem";
import BleService, {Peripheral} from "../../../../BleService";
import Toast from "react-native-toast-message";

interface HotTodayProps {
  data: Array<any>
}

const BLEDeviceList: React.FC<HotTodayProps> = ({data}) => {
  const { width } = useLayout();

  const renderItem = React.useCallback(({ item }: { item: any }) => {
    return <BLEItem item={item} style={styles.item} />;
  }, []);

  return (
    <View style={[styles.container, { width }]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        scrollEnabled={false}
      />
    </View>
  );
};

export default BLEDeviceList;

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 4 + 56 + 8,
  },
  item: {
    marginBottom: 8,
  },
});
