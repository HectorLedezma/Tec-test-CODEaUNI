import { Tabs } from 'expo-router';
import { useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Stack, useNavigation } from 'expo-router';

import {Characters} from './characters'

export default function TabLayout() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="characters"/>
      <Stack.Screen name="planets" />
      <Stack.Screen name="films" />
    </Stack>
  );

}