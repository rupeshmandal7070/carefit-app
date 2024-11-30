import { Feather, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Stepper from '../shoppingBag/Stepper'
import Details from './Details'
import { useRouter } from 'expo-router'

const Address = () => {
  const router = useRouter();
  return (
    <View style={{flex:1,backgroundColor:'#fff',}}>
       <View style={{width:'100%',backgroundColor:'#fff',display:'flex',alignItems:'center'}}>
    <View style={{width:'90%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:10}}>
      <TouchableOpacity onPress={()=>router.back()} style={{flexDirection:'row',gap:10,alignItems:'center'}}>
      <Feather name="arrow-left" size={24} color="black" />
      <Text style={{fontSize:16,fontWeight:'bold'}}>Address</Text>
      </TouchableOpacity>
     

      <View style={{display:'flex',flexDirection:'row',gap:10}}>
      <MaterialIcons name="favorite-border" size={24} color="black" />

    
      </View>
    </View>

    <Stepper/>
    <Details/>
    </View>
    </View>
  )
}

export default Address
