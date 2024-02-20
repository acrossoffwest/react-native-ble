import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { NavigationAction, Container, Text, LinearGradientText, VStack, HStack } from 'components';
import {
  Avatar,
  Button,
  Icon,
  Input,
  Layout,
  TopNavigation,
  useTheme,
} from '@ui-kitten/components';

import { useNavigation } from '@react-navigation/native';
import { Images } from 'assets/images';
import BottomTab from './BottomTab';
import { useLayout } from 'hooks';

const Crypto05 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { bottom } = useLayout();

  return (
    <Container>
      <TopNavigation
        accessoryLeft={<Text category="h3">Transfer</Text>}
        accessoryRight={<NavigationAction icon="faders-horizontal" />}
      />
      <ScrollView>
        <HStack gap={8} style={styles.header}>
          <Avatar size="32" source={Images.crypto.binance} />
          <View style={{ width: '50%' }}>
            <LinearGradientText
              category="header3"
              colors={['#CFE1FD', '#FFFDE1']}
              text="2.013 BNB"
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              textStyle={styles.titleText}
            />
          </View>
        </HStack>
        <HStack justify="center" itemsCenter gap={8} mt={16}>
          <Text status="platinum" category="footnote">
            Balance: 24 BNB
          </Text>
          <Layout level="primary" style={styles.box}>
            <Text status="white">MAX</Text>
          </Layout>
        </HStack>
        <VStack gap={8} mh={24} mt={24}>
          <Text status="platinum">To Address</Text>
          <Input
            placeholder="0x812"
            accessoryRight={() => (
              <Icon
                pack="assets"
                name="wallet"
                style={{ tintColor: theme['text-basic-color'], width: 16, height: 16 }}
              />
            )}
          />
        </VStack>
        <View style={[styles.box1, { borderColor: theme['border-basic-color-2'] }]}>
          <HStack>
            <Text category="subhead">You will receive</Text>
            <HStack itemsCenter gap={8}>
              <Text category="body" style={{ color: '#DCDBB8' }}>
                2.002 BNB
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
      </ScrollView>
      <Button
        onPress={goBack}
        children="Send now"
        accessoryRight={<Icon pack="assets" name="caret-right" />}
        style={[styles.button, { bottom: bottom + 49 + 16 }]}
      />
      <BottomTab />
    </Container>
  );
});

export default Crypto05;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },
  titleText: {
    fontSize: 36,
    lineHeight: 36,
    fontWeight: '400',
    width: '100%',
    fontFamily: 'SpaceGrotesk-Regular',
  },
  box: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  box1: {
    marginTop: 24,
    marginHorizontal: 24,
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
  },
  button: {
    position: 'absolute',
    left: 24,
    right: 24,
  },
});
