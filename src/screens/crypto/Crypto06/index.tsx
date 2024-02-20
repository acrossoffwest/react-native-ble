import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationAction, Container, Text, HStack, SegmentedTab } from 'components';
import { Avatar, Icon, Layout, TopNavigation, useTheme } from '@ui-kitten/components';

import CryptoItem from './CryptoItem';

import { useNavigation } from '@react-navigation/native';
import { Images } from 'assets/images';

const data = [
  {
    image: Images.crypto.nft_7,
    name: 'SOL',
    price: '$124.86',
    value: '3.12%',
  },
  {
    image: Images.crypto.nft_9,
    name: 'BTC',
    price: '$3,578.90',
    value: '1.46%',
  },
  {
    image: Images.crypto.nft_8,
    name: 'USDC',
    price: '$435.90',
    value: '0.19%',
  },
  {
    image: Images.crypto.nft_10,
    name: 'ETH',
    price: '$1,234.56',
    value: '5.1%',
  },
  {
    image: Images.crypto.nft_8,
    name: 'BNB',
    price: '$798.64',
    value: '6.2%',
  },
];

const Crypto06 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  const [index, setIndex] = React.useState<number>(0);

  return (
    <Container>
      <TopNavigation
        accessoryLeft={
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
        accessoryRight={<NavigationAction status="placeholder" icon="search" />}
      />
      <ScrollView>
        <Text style={styles.text}>You have earn</Text>
        <HStack mt={4} gap={0} ml={16} justify="flex-start">
          <Text status="warning" category="h0">
            $13.4
          </Text>
          <Text style={styles.text1}> in 3 pools</Text>
        </HStack>
        <SegmentedTab
          tabs={['All Pools', 'Your Pools']}
          selectedTab={index}
          onTabChange={setIndex}
          style={styles.segmentedTab}
        />
        <View style={[styles.box, { borderColor: theme['border-basic-color-2'] }]}>
          <Text category="subhead">TVL</Text>
          <Text category="body" style={{ color: '#DCDBB8' }}>
            $3,456,978.00
          </Text>
        </View>
        <HStack gap={16} mt={16} mh={16}>
          <Layout level="2" style={styles.tab}>
            <Text category="body" status="grey">
              All Token
            </Text>
            <Icon
              pack="assets"
              name="caret-down"
              style={[styles.icon, { tintColor: theme['text-grey-color'] }]}
            />
          </Layout>
          <Layout level="2" style={styles.tab}>
            <Text category="body" status="grey">
              All Chain
            </Text>
            <Icon
              pack="assets"
              name="caret-down"
              style={[styles.icon, { tintColor: theme['text-grey-color'] }]}
            />
          </Layout>
        </HStack>
        <Layout level="2" style={styles.table}>
          <Layout
            level="3"
            style={[styles.tableHeader, { borderColor: theme['background-basic-color-1'] }]}>
            <View style={styles.boxToken}>
              <Text category="h6" status="platinum">
                Token
              </Text>
            </View>
            <View style={styles.boxPrice}>
              <Text category="h6" status="platinum" right>
                Price
              </Text>
            </View>
            <View style={styles.box24}>
              <Text category="h6" status="platinum" right>
                24h
              </Text>
            </View>
          </Layout>
          <View style={{ paddingHorizontal: 16 }}>
            {data.map((item, index) => {
              return <CryptoItem item={item} key={index} onPress={goBack} />;
            })}
          </View>
        </Layout>
      </ScrollView>
    </Container>
  );
});

export default Crypto06;

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
  text: {
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '400',
    marginTop: 24,
    marginLeft: 16,
  },
  text1: {
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '400',
  },
  box: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  tab: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 16,
    height: 16,
  },
  table: {
    borderRadius: 16,
    marginTop: 16,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  boxToken: {
    flex: 5,
  },
  boxPrice: {
    flex: 2.5,
    justifyContent: 'flex-end',
  },
  box24: {
    flex: 2.5,
    justifyContent: 'flex-end',
  },
});
