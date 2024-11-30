import { Feather, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Stepper from './Stepper'
import Cart from './Cart'
import PriceDetail from './PriceDetail'
import ProductSlider from '../productDetails/Productslider'
import Fontisto from '@expo/vector-icons/Fontisto';

const ShoppingBag = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);

    const steps = ["Bag", "Address", "Payment"];
  return (
    <View>
       <View style={{width:'100%',backgroundColor:'#fff',display:'flex',alignItems:'center'}}>

    <ScrollView showsVerticalScrollIndicator={false} style={{width:'100%',marginBottom:10,marginTop:10}}>

    <View style={{width:'100%',backgroundColor:'#fff',display:'flex',alignItems:'center'}}>

      
    <View style={{width:'90%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:10}}>
      <TouchableOpacity onPress={()=>router.back()} style={{flexDirection:'row',gap:10,alignItems:'center'}}>
      <Feather name="arrow-left" size={24} color="black" />
      <Text style={{fontSize:16,fontWeight:'bold'}}>Shopping Bag</Text>
      </TouchableOpacity>
     

      <View style={{display:'flex',flexDirection:'row',gap:10}}>
      <MaterialIcons name="favorite-border" size={24} color="black" />

    
      </View>
    </View>

    <Stepper/>
    </View>

      <View>
    <Cart/>
    <PriceDetail/>
    <View style={{width:'100%',marginTop:20,alignItems:'center',flexDirection:'column'}}>
       <View style={{width:'90%',flexDirection:'row',gap:10}}>
       <Fontisto name="shopping-bag-1" size={24} color="black" />
        <Text style={{fontSize:18}}>You may also like this:</Text>
       </View>
       <View style={{width:'95%'}}>
    <ProductSlider/>
       </View>
    </View>
      </View>
    </ScrollView>


    </View>
    
    </View>
  )
}

export default ShoppingBag


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#fff",
    },
    stepperContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    stepContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    line: {
      height: 2,
      width: 30,
      backgroundColor: "#ddd",
      marginHorizontal: 4,
    },
    activeLine: {
      backgroundColor: "blue",
    },
    circle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "#ddd",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    activeCircle: {
      borderColor: "blue",
    },
    innerCircle: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: "blue",
    },
    label: {
      marginLeft: 5,
      color: "#666",
      fontSize: 14,
    },
    activeLabel: {
      color: "black",
      fontWeight: "bold",
    },
    content: {
      backgroundColor: "#f9f9f9",
      borderRadius: 8,
      padding: 16,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 5,
      elevation: 3,
    },
    deliveryText: {
      color: "gray",
      fontSize: 14,
      marginBottom: 4,
    },
    nameText: {
      color: "black",
      fontWeight: "bold",
    },
    description: {
      color: "gray",
      fontSize: 12,
      marginBottom: 8,
    },
    changeText: {
      color: "red",
      fontSize: 14,
      fontWeight: "bold",
    },
    scrollViewContent: {
      paddingBottom: 20, // Adds space at the bottom to ensure smooth scrolling
      paddingHorizontal: 10,
    },
  });
