import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;  // Nhận dữ liệu sản phẩm từ route

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.productName}>{product.name}</Text>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.discount}>{product.discount}% OFF ${product.discountedPrice}</Text>
      <Text style={styles.originalPrice}>${product.originalPrice}</Text>
      </View>

      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.descriptionText}>{product.description}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.heartButton}>
          <Text style={styles.heartText}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    marginBottom: 20,
    backgroundColor: '#F8E6E5',
    borderRadius: 10,
  },
  productName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  discount: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 5,
  },
  originalPrice: {
    marginLeft: 30,
    fontSize: 18,
    color: 'black',
    textDecorationLine: 'line-through',
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heartButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButton: {
    backgroundColor: '#E94141',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '70%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  addToCartText: {
    color: '#FFF',
    fontSize: 16,

  },
});
