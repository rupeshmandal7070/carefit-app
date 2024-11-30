import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const ProductSlider = () => {
  const router = useRouter();
  const data = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    title: `Product ${index + 1}`,
    description: 'Floor Exerciser Device',
    rating: '4.2',
    discountedPrice: '₹559.3',
    originalPrice: '₹799',
    discount: '-70%',
    image: require('../../assets/images/image1.png'),
  }));

  const renderHorizontalCards = () => {
    return data.map((item) => (
      <View key={item.id} style={styles.card}>
        {/* Rating */}
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>

        {/* Favorite Icon */}
        <TouchableOpacity style={styles.favoriteIcon}>
          <MaterialIcons name="favorite-border" size={18} color="black" />
        </TouchableOpacity>

        {/* Product Image */}
        <TouchableOpacity
          style={{ padding: 5 }}
          onPress={() =>
            router.push({ pathname: '/product-detail', params: { product: item } })
          }
        >
          <Image resizeMode="contain" source={item.image} style={styles.productImage} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.discountedPrice}>{item.discountedPrice}</Text>
            <Text style={styles.originalPrice}>{item.originalPrice}</Text>
            <Text style={styles.discount}>{item.discount}</Text>
          </View>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {renderHorizontalCards()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    // paddingHorizontal: 10,
    backgroundColor: '#ffff',
    marginTop:20
  },
  card: {
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: 140, // Fixed width for horizontal scrolling
    marginRight: 10, // Add space between cards
    overflow: 'hidden',
  },
  ratingContainer: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: '#e91e63',
    borderRadius: 5,
    padding: 5,
    zIndex: 10,
  },
  ratingText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 4,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    width: '100%',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductSlider;
