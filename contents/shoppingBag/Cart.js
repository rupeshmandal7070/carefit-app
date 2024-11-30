import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Cart = () => {
  return (
    <View style={{width:'100%',alignItems:'center'}}>
       <View style={styles.content}>
        <View>
        <Text style={styles.deliveryText}>
          Deliver To: <Text style={styles.nameText}>Sanjay Sharma</Text>
        </Text>
        <Text style={styles.description}>
          Yorem ipsum dolor sit amet, consectetur....
        </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.content2}>
         <Text style={{fontSize:18,}}>Availabel Offers</Text>
         <Text style={{fontSize:16}}>Lorem sdjg kjsdj bdsb</Text>
         <Text style={styles.changeText2}>Show more</Text>
      </View> */}

      <View style={styles.content3}>

        <View style={{flexDirection:'row',gap:10}}>
            <View style={{height:80,width:70,borderWidth:1}}>

            </View>
            <View style={{width:'75%'}}>
               <Text style={{fontSize:18}} numberOfLines={1}>My first fitness product for kshdk kbkdf hgdkjgfgb</Text>
               {/* <Text style={styles.description2}>
                    Yorem ipsum dolor sit amet, consectetur skdhg kshkd  ksjdhfjh....
                </Text> */}
                 <View style={{flexDirection:'row',gap:30,marginTop:3,marginBottom:5}}>
            <View>
            <Text style={{fontSize:15,}}>Size : M, Pink</Text>
            </View>
            <View>
            <Text style={{fontSize:15,}}>Qty : 2</Text>
            </View>
        </View>

                <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>₹559</Text>
          <Text style={styles.originalPrice}>₹559</Text>
          <Text style={styles.discount}>-70%</Text>
        </View>

       

        <Text style={{fontSize:16,color:'gray'}}>7 Days return policy</Text>
            </View>

        </View>


        <View style={{width:'100%',height:40,borderWidth:1,marginTop:15,flexDirection:'row',borderColor: 'rgba(0,0,0,0.2)',}}>
              <TouchableOpacity style={{width:'50%',height:40,justifyContent:'center',alignItems:'center',flexDirection:'row',display:'flex'}}>
                <View style={{justifyContent:'center',alignItems:'center',width:'100%',flexDirection:'row',gap:10}}>
                <MaterialIcons name="delete-outline" size={24} color="red" />
                   <Text style={{color:'red'}}>Remove</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
    style={{
      width: '50%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderLeftWidth: 1,
      borderLeftColor: 'rgba(0,0,0,0.2)', 
      flexDirection:'row',
      gap:10
    }}
  >
   <MaterialIcons name="favorite-border" size={24} color="black" />
    <Text style={{textAlign:'center'}}>Wishlist</Text>
  </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Cart


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
        flexDirection:'row',
        width:'90%',
        justifyContent:'space-between',
        marginBottom:20,
        
      },

      content3: {
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
        marginTop:20,
       
      },

      content2: {
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
      description2: {
        color: "gray",
        fontSize: 14,
        marginBottom: 4,
        
      },
      changeText: {
        color: "red",
        fontSize: 14,
        fontWeight: "bold",
      },
      changeText2: {
        color: "red",
        fontSize: 12,
        marginTop:10
      },
      priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
      },
      discountedPrice: {
        color: 'blue',
        fontSize: 16,
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
})
