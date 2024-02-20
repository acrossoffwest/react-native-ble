import React from 'react';
import { View, StyleSheet, ViewStyle, Image } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { HStack, Text } from 'components';

interface TraderItemProps {
  style?: ViewStyle;
  item?: any;
}

const TraderItem = ({ item, style }: TraderItemProps) => {
  const { avatar, name, value } = item;

  return (
    <View style={[styles.container, style]}>
      <Image source={avatar} style={styles.avatar} />
      <View>
        <HStack itemsCenter gap={4}>
          <Text category="h6">{name}</Text>
          <Icon pack="assets" name="radio-active" style={styles.icon} />
        </HStack>
        <Text category="subhead" status="warning" marginTop={4}>
          {value}
        </Text>
      </View>
    </View>
  );
};

export default TraderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 24,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 48,
    marginRight: 12,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
