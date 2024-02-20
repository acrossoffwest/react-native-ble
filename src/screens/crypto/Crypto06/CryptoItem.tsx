import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { Text } from 'components';
import { Avatar } from '@ui-kitten/components';

interface CryptoItemProps {
  style?: ViewStyle;
  item: any;
  onPress?(): void;
}

const CryptoItem: React.FC<CryptoItemProps> = ({ item, style, onPress }) => {
  const { image, name, price, value } = item;

  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.container, style]} onPress={onPress}>
      <View style={styles.box}>
        <Avatar source={image} size="32" />
        <Text category="h5" marginLeft={8}>
          {name}
        </Text>
      </View>
      <View style={styles.box1}>
        <Text category="subhead">{price}</Text>
      </View>
      <View style={styles.box2}>
        <Text category="h6" status="warning">
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CryptoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
  },
  box: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box1: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  box2: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
