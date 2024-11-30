import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Main Tabs */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Product Detail Screen - Separate from Tabs */}
        <Stack.Screen 
          name="product-detail" 
          options={{ 
            headerShown:false,
            title: 'Product Details',
            presentation: 'modal', // Optional for a modal-style transition
          }} 
        />

   <Stack.Screen 
          name="shopping-bag" 
          options={{ 
            headerShown:false,
            title: 'Shopping Bag',
            presentation: 'modal', // Optional for a modal-style transition
          }} 
        />

<Stack.Screen 
          name="address" 
          options={{ 
            headerShown:false,
            title: 'Address',
            presentation: 'modal', // Optional for a modal-style transition
          }} 
        />

<Stack.Screen 
          name="order-list" 
          options={{ 
            headerShown:false,
            title: 'Order List',
            presentation: 'modal', // Optional for a modal-style transition
          }} 
        />

<Stack.Screen 
          name="login" 
          options={{ 
            headerShown:false,
            title: 'Order List',
            presentation: 'modal', // Optional for a modal-style transition
          }} 
        />

<Stack.Screen 
          name="signup" 
          options={{ 
            headerShown:false,
            title: 'Order List',
            presentation: 'modal', // Optional for a modal-style transition
          }} 
        />

        {/* Not-Found Page */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    </ThemeProvider>
  );
}
