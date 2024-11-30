// screens/ProductDetail.js

import { Feather, Fontisto, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import ProductSlider from  './Productslider'

const ProductDetail = ({ route }) => {
//   const { product } = route.params; // Get product data passed during navigation
const router = useRouter();

  return (
    <>
    <View style={{width:'100%',backgroundColor:'#fff',display:'flex',alignItems:'center'}}>

    <ScrollView style={{width:'90%',marginBottom:10}}  showsVerticalScrollIndicator={false}>
    <View style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:10}}>
      <TouchableOpacity onPress={()=>router.back()}>
      <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
     

      <View style={{display:'flex',flexDirection:'row',gap:10}}>
      <MaterialIcons name="favorite-border" size={24} color="black" />

      <Feather name="shopping-bag" size={24} color="black" onPress={()=>router.push('/shopping-bag')}/>
      </View>
    </View>

   
    <View style={{height:290,width:'100%',marginTop:15}}>
       <Swiper autoplay={false}>
           <Image style={{height:250,width:'100%',borderRadius:10}} source={{
            uri:'https://img.freepik.com/premium-photo/still-life-perfectly-ordered-fitness-gym-accessories_910608-11409.jpg?ga=GA1.1.681071774.1670583833&semt=ais_hybrid'
           }}/>
            <Image style={{height:250,width:'100%',borderRadius:10}} source={{
             uri:'https://img.freepik.com/premium-photo/still-life-perfectly-ordered-fitness-gym-accessories_910608-11409.jpg?ga=GA1.1.681071774.1670583833&semt=ais_hybrid'
           }}/>
            <Image style={{height:250,width:'100%',borderRadius:10}} source={{
             uri:'https://img.freepik.com/premium-photo/still-life-perfectly-ordered-fitness-gym-accessories_910608-11409.jpg?ga=GA1.1.681071774.1670583833&semt=ais_hybrid'
           }}/>
            <Image style={{height:250,width:'100%',borderRadius:10}} source={{
            uri:'https://img.freepik.com/premium-photo/still-life-perfectly-ordered-fitness-gym-accessories_910608-11409.jpg?ga=GA1.1.681071774.1670583833&semt=ais_hybrid'
           }}/>

          <Image style={{height:250,width:'100%',borderRadius:10}} source={{
           uri:'https://img.freepik.com/premium-photo/still-life-perfectly-ordered-fitness-gym-accessories_910608-11409.jpg?ga=GA1.1.681071774.1670583833&semt=ais_hybrid'
           }}/>
       </Swiper>
    </View>

    <View style={{width:'100%'}}>
        <Text style={styles.title}>This is fitness product</Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>₹559</Text>
          <Text style={styles.originalPrice}>₹559</Text>
          <Text style={styles.discount}>-70%</Text>
        </View>
        <Text style={styles.description}>This is fitness product</Text>
    </View>


    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'90%',alignItems:'center',marginBottom:20}}>
    <Text style={styles.title}>Size:Onesize</Text>
    <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
    </View>

    <View style={{width:'100%',borderTopWidth:1,borderColor:'gray',alignItems:'center',borderBottomWidth:1}}>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'90%',alignItems:'center',marginBottom:5}}>
    <Text style={styles.title}>Brand</Text>
      <Text style={{fontSize:16,color:'gray'}}>Puma</Text>
    </View>

    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'90%',alignItems:'center',marginBottom:5}}>
    <Text style={styles.title}>Weight</Text>
      <Text style={{fontSize:16,color:'gray'}}>Puma</Text>
    </View>

    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'90%',alignItems:'center',marginBottom:5}}>
    <Text style={styles.title}>Color</Text>
      <Text style={{fontSize:16,color:'gray'}}>Puma</Text>
    </View>

    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'90%',alignItems:'center',marginBottom:5}}>
    <Text style={styles.title}>Material</Text>
      <Text style={{fontSize:16,color:'gray'}}>Puma</Text>
    </View>

    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'90%',alignItems:'center',marginBottom:5}}>
    <Text style={styles.title}>Dimensions</Text>
      <Text style={{fontSize:16,color:'gray'}}>Material</Text>
    </View>
    </View>

    <View style={{width:'100%',marginTop:10,borderBottomWidth:1,borderColor:'gray'}}>
    <Text style={styles.title}>About this item:</Text>
    <Text style={{color:'gray',marginBottom:10}}>Multi Workout Equipment: The simple but effective pelvic floor trainer is an excellent home fitness exerciser for strengthening the core, arms, back, calves, triceps, legs, buttocks, as well as the pelvic floor muscles. The thigh master is easy to use inside and out, targeting different body parts for different movements, making it versatile
How It Works: This easy-to-use Kegel exerciser can activate the leg muscles in a short period of time, helping to tone and tighten the muscles of the thighs, buttocks and lower abdomen, and long-term use can make your legs thinner. It helps you strengthen the muscles of your whole body, burn your fat, this kegel exerciser is an excellent product to keep in shape
     See more </Text>
    </View>

    <View style={{width:'100%',alignItems:'center',marginTop:20}}>
       <View style={{width:'100%',flexDirection:'row',gap:10}}>
       <Fontisto name="shopping-bag-1" size={24} color="black" />
        <Text style={{fontSize:18}}>You may also like this:</Text>
       </View>
    <ProductSlider/>
    </View>
    </ScrollView>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
 
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color:'gray'
   
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    flexWrap: 'wrap',
  },
  discountedPrice: {
    color: '#e91e63',
    fontSize: 15,
    fontWeight: 'bold',
  },
  originalPrice: {
    marginLeft: 10,
    textDecorationLine: 'line-through',
    color: '#999',
  },
  discount: {
    marginLeft: 10,
    color: '#e91e63',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#ffd700',
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
    width: '40%',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductDetail;
