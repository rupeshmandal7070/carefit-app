import { Feather, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'

import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MyOrders from './MyOrders'
import PriceDetails from './PriceDetails'
import VerticalStepper from './VerticalStepper'

const OrderList = () => {
    const router = useRouter();
  return (
    <View>
      <View style={{width:'100%',backgroundColor:'#fff',display:'flex',alignItems:'center'}}>
    <View style={{width:'90%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:10}}>
      <TouchableOpacity onPress={()=>router.back()} style={{flexDirection:'row',gap:10,alignItems:'center'}}>
      <Feather name="arrow-left" size={24} color="black" />
      <Text style={{fontSize:16,fontWeight:'bold'}}>Order List</Text>
      </TouchableOpacity>
     

      <View style={{display:'flex',flexDirection:'row',gap:10}}>
      <MaterialIcons name="favorite-border" size={24} color="black" />

    
      </View>
    </View>
    
<ScrollView style={{width:'100%',marginBottom:75}} showsVerticalScrollIndicator={false}>
    <View style={{width:'100%',alignItems:'center'}}>
      <MyOrders/>
      <PriceDetails/>
      <VerticalStepper/>
    </View>
</ScrollView>
    </View>
    </View>
  )
}

export default OrderList


