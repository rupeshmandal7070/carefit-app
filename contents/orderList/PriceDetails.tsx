import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const PriceDetails = () => {
    const router = useRouter();
  return (
    <View>
       <View style={{width:'100%',alignItems:'center'}}>

   
<View style={{borderTopWidth:2,width:'100%',borderBottomWidth:2,paddingBottom:20,borderColor:'gray'}}>
    <View style={{marginTop:20,flexDirection:'row',justifyContent:'flex-start'}}>
        <Text style={{fontSize:16,textAlign:'left'}}>PRICE DETAILS : (1 Item)</Text>
    </View>

    <View style={{marginTop:20,width:'90%',alignItems:'center'}}>
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


<View style={{width:'90%',borderBottomWidth:2,borderColor:'gray'}}>
   <Text style={{fontSize:18,fontWeight:'600',marginVertical:10}}>Track Order</Text>
</View>
 <View style={{width:'90%',marginTop:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
    <View>
       <Text style={{color:'gray'}}>Wed 23 Nov</Text>
       <Text style={{color:'gray'}}>Order ID:827389589</Text>
    </View>
    <View>
    <Text style={{color:'gray'}}>Amt:₹559</Text>
    </View>
 </View>
</View>
    </View>
  )
}

export default PriceDetails
