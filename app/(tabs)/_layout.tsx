import { Tabs } from 'expo-router';
import { React, useEffect } from 'react';
import { Platform } from 'react-native';
import { Stack, useNavigation } from 'expo-router';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  // options={{headerTitle:"indiceee"}}
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="films" />
        <Stack.Screen name="planets" />
        <Stack.Screen name="characters" />
    </Stack>
  );
}
