import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { HapticTab } from '@/components/HapticTab';
import { useColorScheme } from '@/hooks/useColorScheme';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
       
        headerShown: false,
      
        tabBarShowLabel: false,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          android: {
            position: 'absolute', // Keeps it floating
            backgroundColor: colorScheme === 'dark' ? '#d2d2d2' : '#ffffff', // Background color
            borderRadius: 30, // Makes the tabs rounded
            marginHorizontal: 20, // Adds spacing on the sides
            height: 60, // Sets the height of the tab bar
            width: '90%', // Optional width adjustment
            alignSelf: 'center', // Centers the tab bar
            // shadowColor: '#000', // Adds shadow for iOS
            // shadowOpacity: 0.1,
           
            // shadowOffset: { width: 0, height: 5 },
            marginVertical:10
          },
          default: {
            backgroundColor: colorScheme === 'dark' ? '#1e1e1e' : '#ffffff',
            borderRadius: 20,
            height: 60,
          },
        }),
        tabBarIconStyle: {
          justifyContent: 'center', // Centers the icon vertically
          alignItems: 'center',   // Centers the icon horizontally
          flex: 1,               // Ensures the icon takes up the full space
        },
  
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View >
              {focused ? (
                <View style={styles.activeIconContainer}>
                     <Feather name="home" size={24} color="#5900a6" />
                </View>
              ) : (
                <Feather name="home" size={24} color="gray" />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color,focused }) =>
          (
            <View>
              {
                focused ? (
                  <View style={styles.activeIconContainer}>
                      <Ionicons name="grid-outline" size={24} color="#5900a6" />
                  </View>
                ):(
                 <Ionicons name="grid-outline" size={24} color="gray" />
                )
              }
            </View>
            
         
          )
        }}
      />



<Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <View style={styles.activeIconContainer}>
                   <Ionicons name="person" size={24} color="#5900a6" />
                </View>
              ) : (
                <Ionicons name="person" size={24} color="gray" />
              )}
            </View>
          ),
        }}
      />

<Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <View style={styles.activeIconContainer}>
                   <Ionicons name="cart-outline" size={27} color="#5900a6" />
                </View>
              ) : (
                <Ionicons name="cart-outline" size={27} color="gray" />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  
  activeIconContainer: {
    backgroundColor: '#faf9f9', // Background color for active icon
    borderRadius: 30, // Rounded border for active icon
    borderWidth: 1, // Border width for active icon
    borderColor: '#ffffff', // Border color for active icon
    width:55,
    height:55,
    justifyContent:'center',
    alignItems:'center',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
