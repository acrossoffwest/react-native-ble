import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { NavigationAction, Container, SegmentedTab, Text } from 'components';
import { TopNavigation } from '@ui-kitten/components';

import { useLayout } from 'hooks';
import { useNavigation } from '@react-navigation/native';
import CryptoItem from './CryptoItem';
import { Images } from 'assets/images';
import ProductItem from './ProductItem';
import BottomTab from './BottomTab';

const data = [
  {
    image: Images.crypto.nft_7,
    name: 'Solana',
    amount: '4.2% ~ 5.6%',
  },
  {
    image: Images.crypto.nft_10,
    name: 'ETH',
    amount: '13.5% ~ 25.6%',
  },
  {
    image: Images.crypto.nft_9,
    name: 'BNB',
    amount: '41.2% ~ 57.6%',
  },
];

const Crypto03 = React.memo(() => {
  const { width } = useLayout();
  const { goBack } = useNavigation();

  const [index, setIndex] = React.useState<number>(0);

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View>
        <FlatList
          data={[1, 2]}
          renderItem={renderItem}
          horizontal
          snapToInterval={width - (42 + 16) + 8}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled={false}
          style={{ flexGrow: 0 }}
          contentContainerStyle={styles.contentNft}
          keyExtractor={(i, idx) => `${idx}`}
        />
        <Text category="h3" marginTop={48} marginLeft={16} marginBottom={16}>
          All Product
        </Text>
      </View>
    );
  }, []);

  const renderItem = React.useCallback(({ item }: { item: any }) => {
    return <CryptoItem item={item} onPress={goBack} />;
  }, []);

  const renderProductItem = React.useCallback(({ item }: { item: any }) => {
    return <ProductItem item={item} onPress={goBack} />;
  }, []);

  return (
    <Container>
      <TopNavigation
        title="Staking"
        accessoryLeft={<NavigationAction icon="brackets-square" />}
        accessoryRight={<NavigationAction icon="wallet" />}
      />
      <SegmentedTab
        tabs={['Your Staking', 'Available']}
        selectedTab={index}
        onTabChange={setIndex}
        style={styles.segmentedTab}
      />
      <FlatList
        data={data}
        renderItem={renderProductItem}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        ListHeaderComponent={listHeaderComponent}
      />
      <BottomTab />
    </Container>
  );
});

export default Crypto03;

const styles = StyleSheet.create({
  segmentedTab: {
    marginLeft: 16,
    marginVertical: 16,
  },
  traderContent: {
    paddingLeft: 16,
  },
  contentNft: {
    paddingLeft: 16,
    paddingRight: 8,
  },
  content: {},
});
