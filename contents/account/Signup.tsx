import { Feather, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


const Signup = () => {
    const router = useRouter();
  return (
    <View style={{flex:1,backgroundColor:'#fff',width:'100%',alignItems:'center'}}>
        <View style={{width:'90%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:10}}>
      <TouchableOpacity onPress={()=>router.back()} style={{flexDirection:'row',gap:10,alignItems:'center'}}>
      <Feather name="arrow-left" size={24} color="black" />
      <Text style={{fontSize:16,fontWeight:'bold'}}>Signup</Text>
      </TouchableOpacity>
     

      <View style={{display:'flex',flexDirection:'row',gap:10}}>
      <MaterialIcons name="favorite-border" size={24} color="black" />

    
      </View>
    </View>
        <View style={{width:'85%',marginTop:10}}>


      
        <View style={{marginVertical:10}}>
         <Text>Full Name</Text>
        <TextInput placeholder='Email'  style={styles.searchInput}/>
        </View>

        <View>
         <Text>Email</Text>
        <TextInput placeholder='Email'  style={styles.searchInput}/>
        </View>


        <View style={{marginVertical:10}}>
         <Text>Password</Text>
        <TextInput placeholder='Password'  style={styles.searchInput}/>
        </View>


        <TouchableOpacity   style={{width:'100%',height:40,backgroundColor:'red',borderRadius:3,justifyContent:'center',alignItems:'center',marginTop:10}}>
           <Text style={{textAlign:'center',color:'white',fontSize:18}}>Signup</Text>
              </TouchableOpacity>


              <View style={{alignItems:'center',marginVertical:20,justifyContent:'center',flexDirection:'row'}}>
                <Text style={{textAlign:'center',alignItems:'center'}}>Already have an account!
                </Text>
                    <TouchableOpacity>
                    <Text style={{color:'blue',}}>Login</Text>
                    </TouchableOpacity>
              </View>
        </View>
    </View>
  )
}

export default Signup


const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: 'rgba(0,0,0,0.03)',
        height: 45,
        width: '100%',
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'rgba(0,0,0,0.3)',
      },
})
