import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { HStack, Text } from 'components';
import { Avatar, useTheme } from '@ui-kitten/components';
import {Images} from "../../../assets/images";

interface CryptoItemProps {
  style?: ViewStyle;
  item: any;
  onPress?(): void;
}

const BLEItem: React.FC<CryptoItemProps> = ({ style, item, onPress }) => {
  const theme = useTheme();
  const { name, code } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}
      onPress={onPress}>
      <HStack gap={12}>
        <Avatar source={Images.ble.ble} size="40" />
        <View>
          <Text category="h6">{name}</Text>
          <Text category="c1" status="platinum">
            {code.substring(0, 30)}{code.length > 30 ? '...' : ''}
          </Text>
        </View>
      </HStack>
    </TouchableOpacity>
  );
};

export default BLEItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
});
