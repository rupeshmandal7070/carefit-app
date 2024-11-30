import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

const PriceDetail = () => {
    const router = useRouter();
  return (

    <View style={{width:'100%',alignItems:'center'}}>

   
    <View style={{borderTopWidth:1,width:'90%',borderBottomWidth:1,paddingBottom:20}}>
        <View style={{marginTop:20}}>
            <Text style={{fontSize:16}}>PRICE DETAILS : (1 Item)</Text>
        </View>

        <View style={{marginTop:20,width:'100%',alignItems:'center'}}>
           <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
               <Text style={{fontSize:16}}>Total MRP</Text>
               <Text style={{fontSize:16}}>₹559</Text>
           </View>

           <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
               <Text style={{fontSize:16}}>Discount MRP</Text>
               <Text style={{fontSize:16,color:'blue'}}>₹559</Text>
           </View>

           <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
               <Text style={{fontSize:16}}>Coupon Discount</Text>
               <Text style={{fontSize:16,color:'red'}}>Apply Coupon</Text>
           </View>

           <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
               <Text style={{fontSize:16}}>Shipping Fee</Text>
               <Text style={{fontSize:16,color:'gray'}}>₹55</Text>
           </View>
        </View>
    </View>



    <View style={{width:'90%',flexDirection:'row',justifyContent:'center',paddingBottom:20}}>
    <View style={{marginTop:20,width:'90%'}}>
    <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
               <Text style={{fontSize:18}}>Total Amount</Text>
               <Text style={{fontSize:18,color:'black'}}>₹559</Text>
           </View>
        </View>
    </View>


       <TouchableOpacity onPress={()=>router.push('/address')} style={{width:'60%',height:40,backgroundColor:'red',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
           <Text style={{textAlign:'center',color:'white',fontSize:18}}>Place Order</Text>
       </TouchableOpacity>
    </View>
  )
}

export default PriceDetail
