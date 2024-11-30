import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

const Account = () => {

    const router = useRouter();
  return (
    <View style={{width:'100%',alignItems:'center',marginTop:10}}>
        <View style={{width:'90%'}}>
          <Text style={{fontSize:24,fontWeight:'500'}}>Account</Text>

          <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center'}}>
            <Text>Please Login to get exclusive offer</Text>
            <TouchableOpacity onPress={()=>router.push('/login')}  style={{width:'30%',height:35,backgroundColor:'red',borderRadius:3,justifyContent:'center',alignItems:'center'}}>
           <Text style={{textAlign:'center',color:'white',fontSize:18}}>Login</Text>
              </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default Account
