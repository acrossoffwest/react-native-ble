import React from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Layout, useTheme } from '@ui-kitten/components';
import { Text } from 'components';

interface SegmentedTabProps {
  style?: ViewStyle;
  tabs: string[];
  selectedTab: number;
  onTabChange(index: number): void;
}

const SegmentedTab = ({ style, tabs, selectedTab, onTabChange }: SegmentedTabProps) => {
  const theme = useTheme();
  return (
    <View style={[styles.container, style]}>
      <Layout level="2" style={[styles.tabView, { borderColor: theme['border-basic-color-3'] }]}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabButton,
              selectedTab === index && { backgroundColor: theme['color-primary-500'] },
            ]}
            onPress={() => onTabChange(index)}>
            <Text category="subhead" status={selectedTab === index ? 'white' : 'platinum'}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </Layout>
    </View>
  );
};

export default SegmentedTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 32,
    width: '100%',
  },
  tabView: {
    height: '100%',
    borderRadius: 12,
    padding: 2,
    flexDirection: 'row',
    borderWidth: 1,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  animatedTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
