import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationAction, Container, Text, HStack, LinearGradientText } from 'components';
import { useTheme, TopNavigation, ViewPager, Input, Icon, Button } from '@ui-kitten/components';

import SegmentedTab from './SegmentedTab';
import { useLayout, useToggle } from 'hooks';
import { Images } from 'assets/images';
import TraderItem from './TraderItem';
import HotToday from './HotToday';
import Trending from './Trending';
import Popular from './Popular';
import BottomTab from './BottomTab';

const Crypto01 = React.memo(() => {
  const theme = useTheme();
  const { width } = useLayout();

  const [secureTextEntry, toggle] = useToggle(false);
  const [index, setIndex] = React.useState<number>(0);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const features = [
    {
      icon: 'download',
      onPress: () => {},
    },
    {
      icon: 'upload-simple',
      onPress: () => {},
    },
    {
      icon: 'robot',
      onPress: () => {},
    },
    {
      icon: 'gift',
      onPress: () => {},
    },
    {
      icon: 'money',
      onPress: () => {},
    },
    {
      icon: 'image-square',
      onPress: () => {},
    },
    {
      icon: 'users-four',
      onPress: () => {},
    },
    {
      icon: 'layout',
      onPress: () => {},
    },
  ];

  const data = [
    { avatar: Images.avatar.avatar_01, name: 'Albert Flores', value: '+1,568%' },
    { avatar: Images.avatar.avatar_08, name: 'Jacob Jones', value: '+1,236%' },
  ];

  return (
    <Container>
      <TopNavigation
        title={() => (
          <SegmentedTab
            tabs={['Trading', 'Wallet']}
            selectedTab={index}
            onTabChange={setIndex}
            style={styles.tab}
          />
        )}
        accessoryLeft={<NavigationAction icon="dots-nine" />}
        accessoryRight={
          <View style={styles.header}>
            <NavigationAction icon="notification" marginRight={6} />
            <NavigationAction icon="scan-1" />
          </View>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input
          accessoryLeft={() => (
            <Icon
              pack="assets"
              name="search"
              style={[styles.icon, { tintColor: theme['color-primary-500'] }]}
            />
          )}
          placeholder="Enter something…"
          style={styles.input}
        />
        <HStack mt={24} mh={16} itemsCenter>
          <View>
            <HStack gap={4} itemsCenter justify="flex-start">
              <Text category="subhead" status="platinum">
                Balance USDT
              </Text>
              <Icon
                pack="assets"
                name="caret-down"
                style={[styles.caret, { tintColor: theme['text-platinum-color'] }]}
              />
            </HStack>
            <HStack gap={4} itemsCenter mt={8}>
              <Text category="h4">5,680.00 USDT</Text>
              <TouchableOpacity activeOpacity={0.7} onPress={toggle}>
                <Icon
                  pack="assets"
                  name={secureTextEntry ? 'eye' : 'eye-slash'}
                  style={[styles.eye, { tintColor: theme['text-platinum-color'] }]}
                />
              </TouchableOpacity>
            </HStack>
          </View>
          <Button size="tiny" children="Deposit" style={styles.button1} />
        </HStack>
        <FlatList
          data={[Images.crypto.nft_5, Images.crypto.nft_5]}
          renderItem={({ item }) => {
            return (
              <View style={[styles.imageView, { width: width - 32 }]}>
                <Image source={item} style={styles.image} />
              </View>
            );
          }}
          horizontal
          snapToInterval={width - 32 + 8}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled={false}
          style={{ flexGrow: 0 }}
          contentContainerStyle={styles.contentNft}
          keyExtractor={(i, idx) => `${idx}`}
        />
        <View style={styles.actionsView}>
          {features.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={index}
                onPress={item.onPress}
                style={[
                  styles.buttonAction,
                  {
                    backgroundColor: theme['background-basic-color-2'],
                    width: (width - 48) / 4 - 12,
                    height: (width - 48) / 4 - 12,
                  },
                ]}>
                <Icon pack="assets" name={item.icon} />
              </TouchableOpacity>
            );
          })}
        </View>
        <LinearGradientText
          colors={['#CFE1FD', '#FFFDE1']}
          text="Top trader of week"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          textStyle={styles.titleText}
        />
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <TraderItem item={item} />;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0, marginTop: 16 }}
          contentContainerStyle={styles.traderContent}
          keyExtractor={(i, idx) => `${idx}`}
        />
        <HStack itemsCenter gap={24} justify="flex-start" mt={32} ml={16}>
          {['Hot Today', 'Trending', 'Popular'].map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={index}
                onPress={() => setSelectedIndex(index)}>
                <LinearGradientText
                  colors={
                    index === selectedIndex ? ['#CFE1FD', '#FFFDE1'] : ['#FFFFFF30', '#FFFFFF30']
                  }
                  text={item}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  textStyle={styles.title}
                />
              </TouchableOpacity>
            );
          })}
        </HStack>
        <ViewPager
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
          shouldLoadComponent={(index) => index === selectedIndex}
          style={styles.content}>
          <HotToday />
          <Trending />
          <Popular />
        </ViewPager>
      </ScrollView>
      <BottomTab />
    </Container>
  );
});

export default Crypto01;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  tabView: {
    marginBottom: 8,
  },
  contentTab: {
    paddingLeft: 8,
  },
  input: {
    marginTop: 8,
    paddingHorizontal: 16,
    borderRadius: 48,
    height: 40,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 8,
    marginHorizontal: 4,
  },
  caret: {
    width: 16,
    height: 16,
  },
  eye: {
    width: 16,
    height: 16,
  },
  button1: {
    borderRadius: 24,
  },
  imageView: {
    width: '100%',
    height: 160,
    marginRight: 8,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentNft: {
    paddingLeft: 16,
    marginTop: 24,
  },
  buttonAction: {
    width: 64,
    height: 64,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    marginBottom: 24,
  },
  actionsView: {
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  traderContent: {
    paddingLeft: 16,
  },
  titleText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
    marginLeft: 16,
  },
  title: {
    lineHeight: 24,
    fontWeight: '700',
    fontFamily: 'SpaceGrotesk-Bold',
  },
  viewTab: {
    flexDirection: 'row',
    marginTop: 32,
    marginHorizontal: 16,
  },
});
