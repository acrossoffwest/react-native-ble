import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationAction, Container, Text, HStack, LinearGradientText, VStack } from 'components';
import { useTheme, TopNavigation, Icon, Layout, Avatar, Button } from '@ui-kitten/components';

import { useLayout } from 'hooks';
import { Images } from 'assets/images';
import BottomTab from './BottomTab';
import { useNavigation } from '@react-navigation/native';

const Crypto01 = React.memo(() => {
  const theme = useTheme();
  const { width } = useLayout();
  const { goBack } = useNavigation();

  return (
    <Container>
      <Layout>
        <TopNavigation
          accessoryLeft={<NavigationAction icon="dots-nine" />}
          accessoryRight={<NavigationAction icon="gear-six" />}
        />
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Swap Token"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
        <View style={{ height: 16 }} />
      </Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Layout level="2" style={styles.box}>
          <HStack
            pt={16}
            ph={16}
            pb={42}
            style={{ borderBottomWidth: 1, borderColor: theme['border-basic-color-3'] }}>
            <VStack>
              <Text category="h2">0.02468</Text>
              <Text category="subhead" status="platinum">
                $2,568.43
              </Text>
            </VStack>
            <View style={{ alignItems: 'flex-end' }}>
              <Layout style={styles.row}>
                <Avatar source={Images.crypto.nft_9} size="16" />
                <Text category="body" marginHorizontal={8}>
                  BTC
                </Text>
                <Icon
                  pack="assets"
                  name="caret-down"
                  style={[[styles.icon, { tintColor: theme['text-platinum-color'] }]]}
                />
              </Layout>
              <HStack itemsCenter mt={8}>
                <Text category="subhead" status="platinum" marginRight={8}>
                  Available:
                </Text>
                <Text category="subhead">0.13456</Text>
              </HStack>
            </View>
          </HStack>
          <HStack ph={16} pt={42} pb={16}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.action, { left: (width - 32) / 2 - 32 }]}>
              <Icon
                pack="assets"
                name="arrow-down-up"
                style={{ tintColor: theme['text-black-color'] }}
              />
            </TouchableOpacity>
            <VStack>
              <Text category="h2">2,568.43</Text>
              <Text category="subhead" status="platinum">
                $2,568.43
              </Text>
            </VStack>
            <View style={{ alignItems: 'flex-end' }}>
              <Layout style={styles.row}>
                <Avatar source={Images.crypto.nft_6} size="16" />
                <Text category="body" marginHorizontal={8}>
                  USDT
                </Text>
                <Icon
                  pack="assets"
                  name="caret-down"
                  style={[[styles.icon, { tintColor: theme['text-platinum-color'] }]]}
                />
              </Layout>
              <HStack itemsCenter mt={8}>
                <Text category="subhead" status="platinum" marginRight={8}>
                  Available:
                </Text>
                <Text category="subhead">3,267.84</Text>
              </HStack>
            </View>
          </HStack>
        </Layout>
        <View style={[styles.box1, { borderColor: theme['border-basic-color-2'] }]}>
          <HStack>
            <Text category="subhead">Minimum will receive</Text>
            <HStack itemsCenter gap={8}>
              <Text category="body" style={{ color: '#DCDBB8' }}>
                2,568.43 USDT
              </Text>
              <Icon
                pack="assets"
                name="caret-down"
                style={{ width: 16, height: 16, tintColor: theme['text-basic-color'] }}
              />
            </HStack>
          </HStack>
          <VStack gap={8} mt={16}>
            <HStack itemsCenter>
              <Text category="c1" status="platinum">
                Slippage
              </Text>
              <Text category="c1" status="platinum">
                0.5%
              </Text>
            </HStack>
            <HStack itemsCenter>
              <Text category="c1" status="platinum">
                Gas
              </Text>
              <Text category="c1" status="platinum">
                0.0001 BNB
              </Text>
            </HStack>
            <HStack itemsCenter>
              <Text category="c1" status="platinum">
                Fee
              </Text>
              <Text category="c1" status="platinum">
                --
              </Text>
            </HStack>
            <HStack itemsCenter>
              <Text category="c1" status="platinum">
                Gas cost
              </Text>
              <Text category="c1" status="platinum">
                0.001 BNB
              </Text>
            </HStack>
          </VStack>
        </View>
        <Button
          children="Preview Swap"
          style={styles.button}
          accessoryRight={<Icon pack="assets" name="caret-right" />}
          onPress={goBack}
        />
      </ScrollView>
      <BottomTab />
    </Container>
  );
});

export default Crypto01;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 28,
    lineHeight: 28,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginLeft: 16,
    paddingBottom: 8,
  },
  box: {
    borderRadius: 16,
    marginTop: 16,
    marginHorizontal: 16,
  },
  row: {
    borderRadius: 24,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
  action: {
    top: -32,
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#F6D938',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    marginTop: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
  },
  button: {
    marginTop: 40,
    marginHorizontal: 16,
  },
});
