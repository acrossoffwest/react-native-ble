import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {
  NavigationAction,
  Container,
  SegmentedTab,
  Text,
  LinearGradientText,
  VStack,
} from 'components';
import { Avatar, TopNavigation, useTheme } from '@ui-kitten/components';

import { useNavigation } from '@react-navigation/native';
import { Images } from 'assets/images';
import CryptoItem from './CryptoItem';

const data = [
  {
    images: [Images.crypto.nft_9, Images.crypto.nft_8],
    name: 'BTC/BNB',
    amount: '40x',
    apy: '39.80%',
    earn: 'BNB + Fees',
    available_stake: 248,
    liquidity: '$62.8',
  },
  {
    images: [Images.crypto.nft_9, Images.crypto.nft_8],
    name: 'BTC/BNB',
    amount: '25x',
    apy: '39.80%',
    earn: 'BNB + Fees',
    available_stake: 248,
    liquidity: '$62.8',
  },
];

const Crypto04 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  const [index, setIndex] = React.useState<number>(0);

  const renderItem = React.useCallback(({ item }: { item: any }) => {
    return <CryptoItem item={item} onPress={goBack} />;
  }, []);

  return (
    <Container>
      <TopNavigation
        accessoryLeft={<NavigationAction icon="search" />}
        accessoryRight={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={goBack}
            style={[styles.header, { borderColor: theme['border-basic-color-2'] }]}>
            <Text category="subhead" marginRight={8}>
              8x...768a
            </Text>
            <Avatar size="24" source={Images.avatar.avatar_08} />
          </TouchableOpacity>
        }
      />
      <VStack gap={8} mt={24} mb={8}>
        <LinearGradientText
          category="header3"
          colors={['#CFE1FD', '#FFFDE1']}
          text={`Farming and earn`}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
        <LinearGradientText
          category="header3"
          colors={['#CFE1FD', '#FFFDE1']}
          text={`more assets`}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
      </VStack>
      <SegmentedTab
        tabs={['Your Farms', 'All', 'Available']}
        selectedTab={index}
        onTabChange={setIndex}
        style={styles.segmentedTab}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
    </Container>
  );
});

export default Crypto04;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
  },
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
  content: {
    paddingHorizontal: 16,
  },
  titleText: {
    fontSize: 36,
    lineHeight: 36,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginLeft: 16,
  },
});
