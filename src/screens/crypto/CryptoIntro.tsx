import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation } from '@ui-kitten/components';
import { Container } from 'components';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import IntroList from 'elements/App/IntroList';
import ThemeLogo from 'elements/App/ThemeLogo';

import { IntroButtonProps } from 'types/element-types';
import { CryptoStackParamList } from 'types/navigation-types';

const CryptoIntro = React.memo(() => {
  const { navigate } = useNavigation<NavigationProp<CryptoStackParamList>>();

  const data: IntroButtonProps[] = [
    {
      title: 'Home Crypto',
      onPress: () => {
        navigate('Crypto01');
      },
    },
    {
      title: 'Swap',
      onPress: () => {
        navigate('Crypto02');
      },
    },
    {
      title: 'Staking',
      onPress: () => {
        navigate('Crypto03');
      },
    },
    {
      title: 'Farming',
      onPress: () => {
        navigate('Crypto04');
      },
    },
    {
      title: 'Transfer',
      onPress: () => {
        navigate('Crypto05');
      },
    },
    {
      title: 'Pools',
      onPress: () => {
        navigate('Crypto06');
      },
    },
    {
      title: 'Overview',
      onPress: () => {
        navigate('Crypto07');
      },
    },
    {
      title: 'Minting',
      onPress: () => {
        navigate('Crypto08');
      },
    },
    {
      title: 'NFT',
      onPress: () => {
        navigate('Crypto09');
      },
    },
    {
      title: 'Withdraw',
      onPress: () => {
        navigate('Crypto10');
      },
    },
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation style={styles.topNavigation} accessoryLeft={<ThemeLogo />} />
      <IntroList data={data} title="Crypto" />
    </Container>
  );
});

export default CryptoIntro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
});
