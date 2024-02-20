import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import {
  NavigationAction,
  Container,
  Text,
  LinearGradientText,
  SegmentedTab,
  HStack,
  ProgressBar,
} from 'components';
import { TopNavigation, Layout, Icon, Button } from '@ui-kitten/components';
import { Images } from 'assets/images';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Crypto10 = React.memo(() => {
  const { goBack } = useNavigation();

  const [selectedTab, setSelectedTab] = React.useState<number>(0);
  const logos = ['globe-simple', 'discord', 'twitter-logo', 'telegram', 'instagram-logo'];

  return (
    <Container>
      <TopNavigation
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleText}>
          <LinearGradientText
            category="header0"
            colors={['#CFE1FD', '#FFFDE1']}
            text="New Project and Launching IDOs"
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          />
        </View>
        <SegmentedTab
          style={styles.tab}
          tabs={['All', 'Upcoming', 'Finish']}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />
        <Layout level="2" style={styles.box}>
          <Image source={Images.crypto.nft_3} style={styles.image} />
          <Text category="h3" marginTop={24} marginLeft={24}>
            Tramkam Mobile App
          </Text>
          <HStack ph={8} mt={8} style={styles.row} itemsCenter>
            <Layout style={styles.box1}>
              <Text status="black" category="c1">
                Live
              </Text>
            </Layout>
            <Image source={Images.crypto.nft_4} style={styles.imageBinance} />
          </HStack>
          <HStack gap={16} itemsCenter justify="flex-start" mt={16} mh={24}>
            {logos.map((name, index) => {
              return <Icon key={index} pack="assets" name={name} style={styles.icon} />;
            })}
          </HStack>
          <HStack gap={8} mt={16} mh={24} itemsCenter justify="flex-start">
            {['Whitepaper', 'Tokenomics'].map((item, index) => {
              return (
                <Layout key={index} style={styles.box2}>
                  <Text category="c1" status="platinum">
                    {item}
                  </Text>
                </Layout>
              );
            })}
          </HStack>
          <ProgressBar
            style={styles.progressBar}
            height={4}
            progress={0.3}
            containColor="#FFFFFF20"
            progressColor="#106AF3"
          />
          <HStack mh={24} mt={12}>
            <HStack>
              <Text category="subhead">1,690</Text>
              <Text category="subhead" status="platinum">
                /25,800 USDT
              </Text>
            </HStack>
            <Text category="h6">13%</Text>
          </HStack>
          <Text category="subhead" status="platinum" marginTop={8} marginHorizontal={24}>
            0/6,700 TMA
          </Text>
          <Button
            children="Buy Now"
            accessoryRight={<Icon pack="assets" name="caret-right" />}
            style={styles.button}
            onPress={goBack}
          />
        </Layout>
      </ScrollView>
    </Container>
  );
});

export default Crypto10;

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
  binance: {
    width: 24,
    height: 24,
    borderRadius: 24,
    objectFit: 'contain',
  },
  titleText: {
    marginTop: 24,
    marginLeft: 24,
  },
  button: {
    position: 'absolute',
    bottom: -24,
    left: 24,
    right: 24,
  },
  tab: {
    marginLeft: 24,
    marginTop: 24,
  },
  box: {
    borderRadius: 16,
    marginTop: 24,
    marginHorizontal: 24,
    paddingBottom: 40,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 16,
  },
  box1: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: '#F6D938',
  },
  imageBinance: {
    width: 32,
    height: 32,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    objectFit: 'contain',
  },
  row: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  box2: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  progressBar: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
