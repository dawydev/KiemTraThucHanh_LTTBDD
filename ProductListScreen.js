import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProductListScreen() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('All');


  useEffect(() => {
    fetch('https://670bee967e5a228ec1cf16ca.mockapi.io/products') 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = filter === 'All' ? products : products.filter(product => product.type === filter);

  const navigateToProductDetail = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToProductDetail(item)} style={styles.product}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.productName}>{item.name}</Text>
      <View style={{flexDirection:'row'}}>
      <Text style={{color:'#F7BA83', marginRight:5, marginTop:1}}>$</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world's Best Bike</Text>
      
      {/* Thanh lọc sản phẩm */}
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => setFilter('All')} style={[styles.filterButton, filter === 'All' && styles.activeFilter]}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('Road Bike')} style={[styles.filterButton, filter === 'Road bike' && styles.activeFilter]}>
          <Text style={styles.filterText}>Road bike</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter('Mountain Bike')} style={[styles.filterButton, filter === 'Mountain' && styles.activeFilter]}>
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 20,
    marginTop: 20,
    color: '#FF4D4D',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderColor: 'red',
    borderWidth: 1,
  },
  activeFilter: {
    backgroundColor: 'white',
  },
  filterText: {
    color: 'red',
    fontSize: 16,
  },
  productList: {
    justifyContent: 'space-between',
  },
  product: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#FEF5ED',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    resizeMode: 'contain'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 18,
    textAlign: 'center',
    color: '#827E7A',
  },
  productPrice: {
    fontSize: 16,
    color: 'black',
  },
});
