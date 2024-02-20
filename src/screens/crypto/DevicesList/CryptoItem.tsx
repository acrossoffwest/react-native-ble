import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { HStack, Text } from 'components';
import { Avatar, useTheme } from '@ui-kitten/components';

interface CryptoItemProps {
  style?: ViewStyle;
  item: any;
  onPress?(): void;
}

const CryptoItem: React.FC<CryptoItemProps> = ({ style, item, onPress }) => {
  const theme = useTheme();
  const { image, name, code, value, amount } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}
      onPress={onPress}>
      <HStack gap={12}>
        <Avatar source={image} size="40" />
        <View>
          <Text category="h6">{name}</Text>
          <Text category="c1" status="platinum">
            {code}
          </Text>
        </View>
      </HStack>
      <View>
        <Text category="h6">{amount}</Text>
        <Text category="c1" status="platinum">
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CryptoItem;

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
