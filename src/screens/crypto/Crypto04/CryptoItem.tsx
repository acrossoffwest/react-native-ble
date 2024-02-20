import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { HStack, Text, VStack } from 'components';
import { Avatar, Layout, useTheme } from '@ui-kitten/components';
import { useLayout } from 'hooks';

interface CryptoItemProps {
  style?: ViewStyle;
  item: any;
  onPress?(): void;
}

const CryptoItem: React.FC<CryptoItemProps> = ({ item, style, onPress }) => {
  const theme = useTheme();
  const { width } = useLayout();
  const { images, apy, earn, available_stake, liquidity, amount, name } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}
      onPress={onPress}>
      <View style={styles.header}>
        <HStack gap={-8} itemsCenter>
          {images.map((i: any, idx: number) => {
            return (
              <Avatar
                key={idx}
                source={i}
                size="32"
                style={[styles.image, { borderColor: theme['color-basic-1100'] }]}
              />
            );
          })}
          <Text category="h5" marginLeft={20}>
            {name}
          </Text>
        </HStack>
        <Layout level="warning" style={styles.box}>
          <Text status="black" category="c1">
            {amount}
          </Text>
        </Layout>
      </View>
      <Layout level="3" style={styles.line} />
      <View style={styles.bottom}>
        <VStack gap={4} style={[styles.box1, { width: (width - 32) / 2 }]}>
          <Text category="subhead" status="platinum">
            APY
          </Text>
          <Text category="h3">{apy}</Text>
        </VStack>
        <VStack gap={4} style={[styles.box1, { width: (width - 32) / 2 }]}>
          <Text category="subhead" status="platinum">
            EARN
          </Text>
          <Text category="h3">{earn}</Text>
        </VStack>
        <VStack gap={4} style={[styles.box1, { width: (width - 32) / 2 }]}>
          <Text category="subhead" status="platinum">
            Available Stake
          </Text>
          <Text category="h5">{available_stake}</Text>
        </VStack>
        <VStack gap={4} style={[styles.box1, { width: (width - 32) / 2 }]}>
          <Text category="subhead" status="platinum">
            Liquidity
          </Text>
          <Text category="h5">{liquidity}</Text>
        </VStack>
      </View>
    </TouchableOpacity>
  );
};

export default CryptoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    marginBottom: 8,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 16,
    paddingBottom: 24,
  },
  line: {
    height: 1,
    width: '100%',
  },
  box: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 16,
  },
  box1: {
    paddingTop: 16,
    paddingLeft: 24,
    paddingBottom: 8,
  },
  image: {
    borderWidth: 1,
  },
});
