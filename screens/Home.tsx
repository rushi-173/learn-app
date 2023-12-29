import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useProductDataContext} from '../contexts/productDataContext';
import {ProductCard} from '../components/ProductCard';

export function Home({navigation}) {
  const {productData} = useProductDataContext();

  const productCardPressHandler = (productId, idx) => {
    navigation.navigate('ProductDetails', {
      productId,
      bgId: idx % 2,
    });
  };

  const renderProductCard = ({item, index}) => {
    return (
      <ProductCard
        category={item.category}
        name={item.name}
        price={item.price}
        image={item.image}
        index={index}
        onProductCardPress={() => {
          productCardPressHandler(item.id, index);
        }}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={productData}
        keyExtractor={item => item.id}
        renderItem={renderProductCard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  text: {
    fontWeight: '700',
    fontSize: 40,
  },
});
