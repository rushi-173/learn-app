import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
type ProductCardProps = {
  name: string;
  category: string;
  price: string;
  image: string;
  index: number;
  onProductCardPress: ()=>void;
};
export const ProductCard = ({
  name,
  category,
  price,
  image,
  index,
  onProductCardPress
}: ProductCardProps) => {
  const bgStyles = index % 2 ? styles.cardBgOne : styles.cardBgTwo;
  return (
    <TouchableOpacity
      onPress={onProductCardPress}
      style={[styles.cardContainer, bgStyles]}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
      {image ? <Image uri={image} height={30} width={30} />: null}
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  cardContainer: {
    margin: 16,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  cardBgOne: {
    backgroundColor: '#9CE5CB',
  },
  cardBgTwo: {
    backgroundColor: '#FFE899',
  },
  category: {
    fontWeight: '500',
    fontSize: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: '700'
  },
  price: {
    fontSize: 24,
    fontWeight: '600'
  },
});
