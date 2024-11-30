import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import TopProducts from '../../contents/home/TopProducts';
import ProductCard from '../../contents/home/Products';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { AntDesign, Foundation, SimpleLineIcons } from '@expo/vector-icons';


const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const translateX = useState(new Animated.Value(-width * 0.7))[0];

  const toggleSidebar = () => {
    Animated.timing(translateX, {
      toValue: isOpen ? -width * 0.7 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}

      <ScrollView showsVerticalScrollIndicator={false}>

      
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar}>
          <Ionicons name="menu-outline" size={24} color="black" />
        </TouchableOpacity>

        <Image
          source={require('../../assets/images/carefit.png')}
          style={styles.logo}
        />

        <View style={styles.headerIcons}>
          <MaterialIcons name="favorite-border" size={24} color="black" />
          <Feather
            name="shopping-bag"
            size={24}
            color="black"
            onPress={() => router.push('/cart')}
          />
        </View>
      </View>


      


      {/* Search Section */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          <TextInput
            placeholder="Search..."
            style={styles.searchInput}
          />
          <Ionicons
            name="search-outline"
            size={22}
            color="rgba(0,0,0,0.4)"
            style={styles.searchIcon}
          />
        </View>

        <View style={styles.filterButton}>
          <FontAwesome name="sliders" size={24} color="white" />
        </View>
      </View>

      {/* Content Section */}
      <TopProducts />
      <ProductCard />
      </ScrollView>

      <Animated.View style={[styles.sidebar, { transform: [{ translateX }] }]}>
        <TouchableOpacity onPress={toggleSidebar} style={styles.closeButton}>
        <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.menuItems}>
          <View style={{flexDirection:'row',marginTop:20,alignItems:'center'}}>
            <Avatar rounded size='small' title='RM' containerStyle={{marginRight:10,zIndex:10,backgroundColor:'gray'}}/>
            <Text style={styles.menuText}>Rupesh Mandal</Text>
          </View>

          <View style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginTop:10,gap:5}}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
          <Text style={styles.menuText}>Sign Up</Text>
          </View>

          <TouchableOpacity onPress={()=>router.push('/order-list')} style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginTop:10,gap:5}}>
          <Ionicons name="cart-outline" size={24} color="black" />
          <Text style={styles.menuText}>Order List</Text>
          </TouchableOpacity>

          <View style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginTop:10,gap:5}}>
          <MaterialIcons name="gps-fixed" size={24} color="black" />
          <Text style={styles.menuText}>Track Order</Text>
          </View>

          <View style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginTop:10,gap:5}}>
          <FontAwesome name="address-book-o" size={22} color="black" />
          <Text style={styles.menuText}>Address</Text>
          </View>

            <View style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginTop:10,gap:5}}>
            <MaterialIcons name="category" size={24} color="black" />
          <Text style={styles.menuText}>All Categories</Text>
          </View>

           <View style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginTop:10,gap:5}}>
           <Feather name="shopping-bag" size={24} color="black" />
          <Text style={styles.menuText}>My Cart</Text>
          </View>

          <View style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginTop:10,gap:5}}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.menuText}>My Account</Text>
          </View>
         
          <View style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginTop:10,gap:5}}>
          <AntDesign name="logout" size={24} color="black" />
          <Text style={styles.menuText}>Log Out</Text>
          </View>

          <View style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginTop:10,gap:5}}>
          <SimpleLineIcons name="share-alt" size={24} color="black" />
          <Text style={styles.menuText}>Referral</Text>
          </View>

          <View style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginTop:10,gap:5}}>
           <MaterialIcons name="privacy-tip" size={24} color="black" />
          <Text style={styles.menuText}>Privacy Policy</Text>
          </View>

          <View style={{flexDirection:'row',marginLeft:10,alignItems:'center',marginTop:10,gap:5}}>
          <Foundation name="clipboard-notes" size={26} color="black" />
          <Text style={styles.menuText}>Terms & Conditions</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 10,
  },

  searchContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  searchInputWrapper: {
    width: '80%',
    position: 'relative',
  },
  searchInput: {
    backgroundColor: 'rgba(0,0,0,0.03)',
    height: 45,
    width: '100%',
    paddingLeft: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  searchIcon: {
    position: 'absolute',
    top: 11,
    left: 10,
  },
  filterButton: {
    height: 45,
    width: 50,
    backgroundColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: width * 0.7,
    backgroundColor: '#ffffff',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  menuItems: {
    marginTop: 20,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
   
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left:10,
    padding: 10,
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  }
});
