import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useLayout } from 'hooks';
import { Images } from 'assets/images';
import CryptoItem from './CryptoItem';

const data = [
  {
    image: Images.crypto.nft_7,
    name: 'Solana',
    code: 'SLN',
    amount: '$18.62',
    value: '+5.2%',
  },
  {
    image: Images.crypto.nft_10,
    name: 'Etherum',
    code: 'ETH',
    amount: '$1,678.34',
    value: '+2.8%',
  },
  {
    image: Images.crypto.nft_8,
    name: 'Simple earn',
    code: 'BNB',
    amount: '$225',
    value: '+3.1%',
  },
  {
    image: Images.crypto.nft_9,
    name: 'Simple earn',
    code: 'BTC',
    amount: '$27,689.34',
    value: '+5.4%',
  },
];

interface HotTodayProps {}

const HotToday: React.FC<HotTodayProps> = () => {
  const { width } = useLayout();

  const renderItem = React.useCallback(({ item }: { item: any }) => {
    return <CryptoItem item={item} style={styles.item} />;
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

export default HotToday;

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
