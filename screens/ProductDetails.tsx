import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useProductDataContext} from '../contexts/productDataContext';

export const ProductDetails = ({route, navigation}) => {
  const {productId} = route.params;
  const {productData} = useProductDataContext();
  const product = productData.find(item => item.id === productId);

  return (
    <View style={styles.container}>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#9CE5CB',
  },
  category: {
    fontWeight: '500',
    fontSize: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
  },
});
