import { Tabs } from 'expo-router';
import { useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Stack, useNavigation } from 'expo-router';

export default function TabLayout() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="characters/[id]"/>
      <Stack.Screen name="planets/[id]" />
      <Stack.Screen name="films/[id]" />
    </Stack>
  );

}