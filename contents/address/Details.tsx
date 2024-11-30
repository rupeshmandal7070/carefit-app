import { FontAwesome6 } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Details = () => {
  return (
    <View>
        <View style={styles.content}>
            <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>

        <View>
        <Text style={styles.deliveryText}>
          Deliver To: <Text style={styles.nameText}>Sanjay Sharma</Text>
        </Text>
        <Text style={styles.description}>
          Yorem ipsum dolor sit amet, consectetur....
        </Text>
        <Text>Mobile No:9876543210</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.changeText}>Home</Text>
        </TouchableOpacity>
            </View>

            <TouchableOpacity style={{height:35,borderWidth:1,marginTop:20,justifyContent:'center',alignItems:'center'}}>
                 <Text>CHANGE ADDRESS</Text>
            </TouchableOpacity>
      </View>

      <View>

      </View>


      <View style={{flexDirection:'row',alignItems:'center'}}>
      <FontAwesome6 name="add" size={24} color="blue" />
        <Text style={{fontSize:18,color:'blue'}}> Add new address</Text>
      </View>


      <View style={{marginTop:20,alignItems:'center'}}>
      <TouchableOpacity  style={{width:'70%',height:40,backgroundColor:'red',borderRadius:3,justifyContent:'center',alignItems:'center'}}>
           <Text style={{textAlign:'center',color:'white',fontSize:18}}>CONTINUE</Text>
       </TouchableOpacity>
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#f9f9f9",
        borderRadius: 3,
        padding: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        elevation: 3,
        height:'auto',
      
        width:'90%',
       
        marginBottom:20,
        
      },
      deliveryText: {
        color: "gray",
        fontSize: 14,
        marginBottom: 4,
      },
      nameText: {
        color: "black",
        fontWeight: "bold",
        fontSize:16
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
    })
