import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import {
  NavigationAction,
  Container,
  Text,
  LinearGradientText,
  CurrencyText,
  HStack,
  ProgressBar,
} from 'components';
import { useTheme, TopNavigation, Icon, Layout } from '@ui-kitten/components';
import { useBoolean } from 'hooks';
import { Images } from 'assets/images';
import { EFormat } from 'types/component-types';

const Crypto07 = React.memo(() => {
  const theme = useTheme();

  const [secure, { toggle }] = useBoolean(true);

  const images = [
    Images.crypto.crypto_01,
    Images.crypto.crypto_02,
    Images.crypto.crypto_03,
    Images.crypto.crypto_04,
    Images.crypto.crypto_01,
    Images.crypto.crypto_02,
    Images.crypto.crypto_03,
    Images.crypto.crypto_04,
  ];

  const data = [
    {
      icon: 'health',
      name: 'Earn',
      value: '5,680.00 USDT',
      sub_value: '~$5,679',
      increase: '+25%',
    },
    {
      icon: 'health',
      name: 'Spot',
      value: '1,246.80 USDT',
      sub_value: '~$5,679',
      increase: '+16%',
    },
    {
      icon: 'food',
      name: 'Future',
      value: '680.00 USDT',
      sub_value: '~$679',
      increase: '+12%',
    },
    {
      icon: 'shopping',
      name: 'Margin',
      value: '568.00 USDT',
      sub_value: '~$567',
      increase: '+9%',
    },
    {
      icon: 'health',
      name: 'NFT',
      value: '1,680.00 USDT',
      sub_value: '~$4,678',
      increase: '+4%',
    },
    {
      icon: 'health',
      name: 'Bots',
      value: '808.00 USDT',
      sub_value: '~$5,678',
      increase: '+2%',
    },
  ];

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View style={styles.headerList}>
        <LinearGradientText
          text={
            <Text category="h0" marginBottom={24} marginLeft={16}>
              Overview
            </Text>
          }
        />
        <View style={styles.row}>
          <Text status="platinum" category="subhead" marginRight={4}>
            Total Value
          </Text>
          <Icon
            pack="assets"
            name="caret-down"
            style={[styles.arrowDown, { tintColor: theme['text-platinum-color'] }]}
          />
        </View>
        <View style={styles.row1}>
          <HStack itemsCenter gap={4}>
            {secure ? (
              <CurrencyText formatType={EFormat.SECURE} category="h2">
                0
              </CurrencyText>
            ) : (
              <CurrencyText marginRight={4} category="h2">
                245.69
              </CurrencyText>
            )}
            <TouchableOpacity activeOpacity={0.7} onPress={toggle}>
              <Icon
                pack="assets"
                name={secure ? 'eye' : 'eye-slash'}
                style={[styles.icon, { tintColor: theme['text-platinum-color'] }]}
              />
            </TouchableOpacity>
          </HStack>
          <HStack
            itemsCenter
            gap={8}
            style={[styles.row2, { borderColor: theme['border-basic-color-3'] }]}>
            {images.map((item, index) => {
              return index < 4 && <Image source={item} key={index} style={styles.image} />;
            })}
            {images.length > 4 && (
              <Text category="subhead" status="platinum">
                +{images.length - 4}
              </Text>
            )}
          </HStack>
        </View>
        <Text status="warning" marginTop={8} marginLeft={16}>
          -1.24% ($2.4)
        </Text>
      </View>
    );
  }, [secure]);

  const renderItem = React.useCallback(({ item, index }: { item: any; index: number }) => {
    const { icon, name, value, sub_value, increase } = item;

    const is_active = index === 0;

    return (
      <Layout
        level={is_active ? 'primary' : '2'}
        style={[
          styles.item,
          {
            marginLeft: index % 2 === 0 ? 8 : 0,
          },
        ]}>
        <HStack itemsCenter justify="flex-start" gap={4}>
          <Icon pack="assets" name={icon} />
          <Text category="body" status={is_active ? 'white' : 'basic'}>
            {name}
          </Text>
        </HStack>
        <Text category="h4" marginTop={24} status={is_active ? 'white' : 'basic'}>
          {value}
        </Text>
        <Text category="subhead" status={is_active ? 'white' : 'platinum'} marginBottom={16}>
          {sub_value}
        </Text>
        <ProgressBar
          progress={0.3}
          containColor={is_active ? '#FFFFFF20' : '#414F5B'}
          progressColor={is_active ? '#FFFFFF' : '#106AF3'}
        />
        <Layout
          level="primary"
          style={[
            styles.box,
            { borderColor: is_active ? theme['color-basic-1100'] : 'transparent' },
          ]}>
          <Text category="c1" status="white">
            {increase}
          </Text>
        </Layout>
      </Layout>
    );
  }, []);

  return (
    <Container>
      <TopNavigation
        accessoryLeft={<NavigationAction status="placeholder" icon="nut" />}
        accessoryRight={
          <View style={styles.header}>
            <NavigationAction status="placeholder" icon="search" marginRight={6} />
            <NavigationAction status="placeholder" icon="bell-ringing" />
          </View>
        }
      />

      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        ListHeaderComponent={listHeaderComponent}
        keyExtractor={(item, index) => `${index}`}
      />
    </Container>
  );
});

export default Crypto07;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  tab: {},
  content: {
    flex: 1,
  },
  tabView: {
    marginBottom: 8,
  },
  contentTab: {
    paddingLeft: 8,
  },
  arrowDown: {
    width: 16,
    height: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  icon: {
    width: 16,
    height: 16,
  },
  row1: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  image: {
    width: 16,
    height: 16,
    borderRadius: 16,
    objectFit: 'cover',
  },
  row2: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 99,
    padding: 8,
  },
  item: {
    flex: 1,
    borderRadius: 24,
    padding: 16,
    marginRight: 8,
    marginTop: 8,
  },
  box: {
    borderRadius: 99,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginTop: 16,
    borderWidth: 1,
  },
  headerList: {
    marginBottom: 40,
  },
});
