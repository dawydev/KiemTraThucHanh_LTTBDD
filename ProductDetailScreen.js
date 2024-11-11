import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;  // Nhận dữ liệu sản phẩm từ route

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.discount}>{product.discount}% OFF | ${product.discountedPrice}</Text>
      <Text style={styles.originalPrice}>${product.originalPrice}</Text>

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
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  discount: {
    fontSize: 18,
    color: 'green',
    marginBottom: 5,
  },
  originalPrice: {
    fontSize: 18,
    color: 'grey',
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
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addToCartText: {
    color: '#FFF',
    fontSize: 16,
  },
});
