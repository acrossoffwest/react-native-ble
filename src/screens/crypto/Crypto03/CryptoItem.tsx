import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { HStack, Text, VStack } from 'components';
import { Avatar, Icon, Layout, useTheme } from '@ui-kitten/components';
import { Images } from 'assets/images';
import { useLayout } from 'hooks';

interface CryptoItemProps {
  style?: ViewStyle;
  item: any;
  onPress?(): void;
}

const CryptoItem: React.FC<CryptoItemProps> = ({ style, onPress }) => {
  const theme = useTheme();
  const { width } = useLayout();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        { backgroundColor: theme['background-basic-color-2'], width: width - (42 + 16) },
        style,
      ]}
      onPress={onPress}>
      <View style={styles.header}>
        <HStack gap={8} itemsCenter>
          <Avatar source={Images.crypto.nft_6} size="24" />
          <Text category="body">USDT</Text>
        </HStack>
        <HStack gap={16}>
          <Icon pack="assets" name="radio-active" />
          <Icon pack="assets" name="health" />
        </HStack>
      </View>
      <Text marginTop={16} category="subhead" status="platinum">
        Locked
      </Text>
      <Text category="h2">5,680.00 USDT</Text>
      <Layout level="3" style={styles.line} />
      <HStack>
        <VStack gap={4}>
          <Text category="subhead" status="platinum">
            Time end
          </Text>
          <Text category="h6">21 Dec 2023</Text>
        </VStack>
        <VStack gap={4} justify="flex-end">
          <Text right category="subhead" status="platinum">
            Est. APR
          </Text>
          <Layout level="primary" style={styles.box}>
            <Text category="c1" status="white">
              6,472.19 USDT (+25%)
            </Text>
          </Layout>
        </VStack>
      </HStack>
      {/* <View>
        <Text category="h6">{amount}</Text>
        <Text category="c1" status="platinum">
          {value}
        </Text>
      </View> */}
    </TouchableOpacity>
  );
};

export default CryptoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    marginRight: 8,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    height: 1,
    width: '100%',
    marginVertical: 16,
  },
  box: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
