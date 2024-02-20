import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import Text from './Text';
import { LinearGradient } from 'expo-linear-gradient';

interface TagCurrencyProps {
  style?: StyleProp<ViewStyle>;
  currency: string;
}

const TagCurrency: React.FC<TagCurrencyProps> = ({ style, currency }) => {
  const state = {
    colors: ['#CFE1FD', '#FFFDE1'],
    start: { x: 1, y: 1 },
    end: { x: 0, y: 0.33 },
  };
  return (
    <View style={style}>
      <LinearGradient {...state} style={styles.container}>
        <Text status="black" category="h6">
          {currency}
        </Text>
      </LinearGradient>
    </View>
  );
};

export default TagCurrency;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
});
