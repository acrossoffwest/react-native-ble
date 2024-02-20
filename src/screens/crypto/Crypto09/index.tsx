import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationAction, Container, Text, HStack } from 'components';
import { TopNavigation, Icon, Button, useTheme } from '@ui-kitten/components';
import { useLayout } from 'hooks';
import { Images } from 'assets/images';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Crypto09 = React.memo(() => {
  const theme = useTheme();
  const { top, bottom } = useLayout();
  const { goBack } = useNavigation();

  return (
    <Container useSafeArea={false} style={[styles.container, { paddingTop: top }]}>
      <TopNavigation
        style={{ backgroundColor: 'transparent' }}
        accessoryLeft={<NavigationAction status="control" />}
        accessoryRight={<NavigationAction status="control" icon="heart" />}
      />
      <Text category="h0" status="white" marginTop={16} marginLeft={24}>
        {`Tramkam\nCyberpunk`}
      </Text>
      <HStack itemsCenter mt={20} ml={24} mr={16}>
        <LinearGradient
          colors={['#CFE1FD', '#FFFDE1']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.left}>
          <Image source={Images.crypto.binance} style={styles.binance} />
          <Text category="body" status="black" marginLeft={8}>
            0.013 BNB
          </Text>
        </LinearGradient>
        <HStack gap={8} itemsCenter style={styles.right}>
          <Icon pack="assets" name="clock" style={styles.icon} />
          <Text category="subhead" status="white">
            23:14:58
          </Text>
        </HStack>
      </HStack>
      <View style={styles.content}>
        <Image source={Images.crypto.nft_2} style={styles.image} />
      </View>
      <View style={[styles.viewButton, { bottom: bottom + 8 }]}>
        <LinearGradient
          colors={['#CFE1FD', '#FFFDE1']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonLinear}>
          <Button style={styles.button} onPress={goBack}>
            {() => (
              <HStack itemsCenter gap={8}>
                <Text category="h5" status="black">
                  Place Bid
                </Text>
                <Icon
                  pack="assets"
                  name="caret-right"
                  style={{ tintColor: theme['text-black-color'] }}
                />
              </HStack>
            )}
          </Button>
        </LinearGradient>
      </View>
    </Container>
  );
});

export default Crypto09;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D727E',
  },
  left: {
    flexDirection: 'row',
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    paddingLeft: 8,
    paddingRight: 12,
  },
  right: {
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#2A394750',
  },
  binance: {
    width: 24,
    height: 24,
    borderRadius: 24,
    objectFit: 'contain',
  },
  viewButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  buttonLinear: {
    borderRadius: 16,
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  icon: {
    width: 16,
    height: 16,
  },
  content: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});
