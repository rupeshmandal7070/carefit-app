import { Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Image, Platform, View, Text, TouchableOpacity, TextInput } from 'react-native';



export default function TabTwoScreen() {
  const router = useRouter();
  return (
   <View style={{width:'100%',alignItems:'center',flex:1,backgroundColor:'#fff'}}>

       <View style={{width:'90%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:10}}>
      <TouchableOpacity onPress={()=>router.back()} style={{flexDirection:'row',gap:10,alignItems:'center'}}>
      <Feather name="arrow-left" size={24} color="black" />
      <Text style={{fontSize:16,fontWeight:'bold'}}>Categories</Text>
      </TouchableOpacity>
     

      <View style={{display:'flex',flexDirection:'row',gap:10}}>
      <MaterialIcons name="favorite-border" size={24} color="black" />

    
      </View>
    </View>


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
   </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
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
});
