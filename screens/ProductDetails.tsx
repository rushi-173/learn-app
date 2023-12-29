import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useProductDataContext} from '../contexts/productDataContext';

export const ProductDetails = ({route}) => {
  const {productId, bgId} = route.params;
  const bgStyles = bgId ? styles.cardBgOne : styles.cardBgTwo;
  const {productData} = useProductDataContext();
  const product = productData.find(item => item.id === productId);

  return (
    <View style={[styles.container, bgStyles]}>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <View style={styles.imageContainer}>
        <Image source={{uri: product.image}} height={200} width={200} />
      </View>
      <Text style={styles.bio}>{'About'}</Text>
      <Text style={styles.bio}>{product.bio}</Text>
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
  imageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
  },
  bio: {
    fontWeight: '500',
    fontSize: 16,
  },
  cardBgOne: {
    backgroundColor: '#9CE5CB',
  },
  cardBgTwo: {
    backgroundColor: '#FFE899',
  },
});
