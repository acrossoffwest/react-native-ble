import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  NavigationAction,
  Container,
  Text,
  HStack,
  ProgressBar,
  LinearGradientText,
} from 'components';
import { useTheme, TopNavigation, Layout, Icon, Button } from '@ui-kitten/components';
import { useCounter, useLayout } from 'hooks';
import { Images } from 'assets/images';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Crypto08 = React.memo(() => {
  const theme = useTheme();
  const { width, top } = useLayout();
  const { count, increment, decrement } = useCounter(0, 2);
  const { goBack } = useNavigation();

  return (
    <Container useSafeArea={false}>
      <LinearGradient
        colors={['#106AF3', '#112332']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ paddingTop: top }}>
        <TopNavigation
          style={{ backgroundColor: 'transparent' }}
          accessoryLeft={<NavigationAction status="placeholder" />}
          accessoryRight={
            <LinearGradient
              colors={['#CFE1FD', '#FFFDE1']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={styles.right}>
              <Image source={Images.crypto.binance} style={styles.binance} />
              <Text category="body" status="black" marginLeft={8}>
                113 BNB
              </Text>
            </LinearGradient>
          }
        />
        <View style={[styles.imageView, { width: width - 16 * 2 }]}>
          <Layout level="primary" style={styles.hide} />
          <Image source={Images.crypto.nft_1} style={styles.nft} />
        </View>
      </LinearGradient>
      <HStack itemsCenter mt={16} mh={16} mb={16}>
        <ProgressBar
          style={styles.progressBar}
          height={8}
          progress={0.3}
          containColor="#FFFFFF20"
          progressColor="#F6D938"
        />
        <Layout level="primary" style={styles.box}>
          <Text status="white" category="c1">
            108/456
          </Text>
        </Layout>
      </HStack>
      <LinearGradientText
        category="header3"
        colors={['#CFE1FD', '#FFFDE1']}
        text="Mint Tramkam"
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        textStyle={styles.titleText}
      />
      <HStack itemsCenter gap={12} justify="flex-start" mh={16} mt={16}>
        <Image source={Images.avatar.avatar_01} style={styles.avatar} />
        <HStack gap={4} itemsCenter>
          <Text category="subhead" status="platinum">
            Create by
          </Text>
          <Text category="h6">Albert Flores</Text>
          <Icon pack="assets" name="radio-active" style={styles.icon} />
        </HStack>
      </HStack>
      <HStack mt={24} mh={16} itemsCenter level="2" border={20}>
        <TouchableOpacity activeOpacity={0.7} onPress={decrement}>
          <Layout level={count === 0 ? '6' : 'primary'} style={styles.action}>
            <Icon
              pack="assets"
              name="minus"
              style={[styles.icon, { tintColor: theme['text-white-color'] }]}
            />
          </Layout>
        </TouchableOpacity>
        <LinearGradientText
          category="header3"
          colors={['#CFE1FD', '#FFFDE1']}
          text={count.toString()}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
        />
        <TouchableOpacity activeOpacity={0.7} onPress={increment}>
          <Layout level={count === 2 ? '6' : 'primary'} style={styles.action}>
            <Icon
              pack="assets"
              name="plus"
              style={[styles.icon, { tintColor: theme['text-white-color'] }]}
            />
          </Layout>
        </TouchableOpacity>
      </HStack>
      <Button
        children="Mint now with 12BNB"
        accessoryRight={<Icon pack="assets" name="caret-right" />}
        style={styles.button}
        onPress={goBack}
      />
    </Container>
  );
});

export default Crypto08;

const styles = StyleSheet.create({
  right: {
    flexDirection: 'row',
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    paddingLeft: 8,
    paddingRight: 12,
  },
  content: {
    flex: 1,
  },
  binance: {
    width: 24,
    height: 24,
    borderRadius: 24,
    objectFit: 'contain',
  },
  nft: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 16,
    marginLeft: 16,
  },
  imageView: {
    marginTop: 16,
    aspectRatio: 1 / 1,
  },
  hide: {
    position: 'absolute',
    left: 24,
    right: 0,
    top: -8,
    borderRadius: 16,
    height: 100,
  },
  box: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
  },
  progressBar: {
    flex: 1,
    maxWidth: '60%',
  },
  titleText: {
    marginLeft: 16,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 24,
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  action: {
    width: 56,
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 24,
    marginHorizontal: 16,
  },
});
