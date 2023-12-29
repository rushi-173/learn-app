import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
type ProductCardProps = {
  name: string;
  category: string;
  price: string;
  image: string;
  index: number;
  onProductCardPress: () => void;
};
export const ProductCard = ({
  name,
  category,
  price,
  image,
  index,
  onProductCardPress,
}: ProductCardProps) => {
  const bgStyles = index % 2 ? styles.cardBgOne : styles.cardBgTwo;
  return (
    <TouchableOpacity
      onPress={onProductCardPress}
      style={[styles.cardContainer, bgStyles]}>
      <View>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} height={100} width={100} />
      </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontWeight: '700',
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
  },
});
