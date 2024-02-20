import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  SplashScreen: undefined;
  Onboarding: RouteProp<OnboardingStackParamList> | undefined;
  Auth: RouteProp<AuthStackParamList> | undefined;
  Social: RouteProp<SocialStackParamList> | undefined;
  Profile: RouteProp<ProfileStackParamList> | undefined;
  Finance: { screen: keyof FinanceStackParamList };
  Food: RouteProp<FoodStackParamList> | undefined;
  ECommerce: { screen: keyof ECommerceStackParamList };
  Reading: { screen: keyof ReadingStackParamList };
  FitnessHealth: RouteProp<FitnessHealthStackParamList> | undefined;
  Crypto: { screen: keyof CryptoStackParamList };
};

export type OnboardingStackParamList = {
  OnboardingIntro: undefined;
  Onboarding01: undefined;
  Onboarding02: undefined;
  Onboarding03: undefined;
  Onboarding04: undefined;
  Onboarding05: undefined;
  Onboarding06: undefined;
  Onboarding07: undefined;
  Onboarding08: undefined;
  Onboarding09: undefined;
  Onboarding10: undefined;
  Onboarding11: undefined;
};

export type AuthStackParamList = {
  AuthIntro: undefined;
  Auth01: undefined;
  Auth02: undefined;
  Auth03: undefined;
  Auth04: undefined;
  Auth05: undefined;
  Auth06: undefined;
  Auth07: undefined;
  Auth08: undefined;
  Auth09: undefined;
  Auth10: undefined;
};

export type SocialStackParamList = {
  SocialIntro: undefined;
  Social01: undefined;
  Social02: undefined;
  Social03: undefined;
  Social04: undefined;
  Social05: undefined;
  Social06: undefined;
  Social07: undefined;
  Social08: undefined;
  Social09: undefined;
  Social10: undefined;
  Social11: undefined;
  Social12: undefined;
  Social13: undefined;
  Social14: undefined;
  Social15: undefined;
  Social16: undefined;
  Social17: undefined;
};

export type ProfileStackParamList = {
  ProfileIntro: undefined;
  Profile01: undefined;
  Profile02: undefined;
  Profile03: undefined;
  Profile04: undefined;
  Profile05: undefined;
  Profile06: undefined;
  Profile07: undefined;
  Profile08: undefined;
  Profile09: undefined;
  Profile10: undefined;
  Profile11: undefined;
  Profile12: undefined;
};

export type FinanceStackParamList = {
  FinanceIntro: undefined;
  Finance01: undefined;
  Finance02: undefined;
  Finance03: undefined;
  Finance04: undefined;
  Finance05: undefined;
  Finance06: undefined;
  Finance07: undefined;
  Finance08: undefined;
  Finance09: undefined;
  Finance10: undefined;
  Finance11: undefined;
  Finance12: undefined;
  Finance13: undefined;
  Finance14: undefined;
  Finance15: undefined;
  Finance16: undefined;
  Finance17: undefined;
  Finance18: undefined;
  Finance19: undefined;
  Finance20: undefined;
  Finance21: undefined;
  Finance22: undefined;
  Finance23: undefined;
};

export type ECommerceStackParamList = {
  ECommerceIntro: undefined;
  ECommerce01: undefined;
  ECommerce02: undefined;
  ECommerce03: undefined;
  ECommerce04: undefined;
  ECommerce05: undefined;
  ECommerce06: undefined;
  ECommerce07: undefined;
  ECommerce08: undefined;
  ECommerce09: undefined;
  ECommerce10: undefined;
};

export type FoodStackParamList = {
  FoodIntro: undefined;
  Food01: undefined;
  Food02: undefined;
  Food03: undefined;
  Food04: undefined;
  Food05: undefined;
  Food06: undefined;
  Food07: undefined;
  Food08: undefined;
  Food09: undefined;
  Food10: undefined;
};

export type ReadingStackParamList = {
  ReadingIntro: undefined;
  Reading01: undefined;
  Reading02: undefined;
  Reading03: undefined;
  Reading04: undefined;
  Reading05: undefined;
  Reading06: undefined;
  Reading07: undefined;
  Reading08: undefined;
  Reading09: undefined;
  Reading10: undefined;
};
export type FitnessHealthStackParamList = {
  FitnessHealthIntro: undefined;
  FitnessHealth01: undefined;
  FitnessHealth02: undefined;
  FitnessHealth03: undefined;
  FitnessHealth04: undefined;
  FitnessHealth05: undefined;
  FitnessHealth06: undefined;
  FitnessHealth07: undefined;
  FitnessHealth08: undefined;
  FitnessHealth09: undefined;
  FitnessHealth10: undefined;
};

export type CryptoStackParamList = {
  CryptoIntro: undefined;
  Crypto01: undefined;
  Crypto02: undefined;
  Crypto03: undefined;
  Crypto04: undefined;
  Crypto05: undefined;
  Crypto06: undefined;
  Crypto07: undefined;
  Crypto08: undefined;
  Crypto09: undefined;
  Crypto10: undefined;
};
