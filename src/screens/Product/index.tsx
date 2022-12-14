import { useNavigation, useRoute } from '@react-navigation/native';
import { Check, ShoppingCart } from 'phosphor-react-native';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActionButtons } from '../../components/ActionButtons';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { PagesHeader } from '../../components/PagesHeader';
import { ProductData  } from '../../components/ProductCard';
import { useCart } from '../../context/CartContext';
import { THEME } from '../../theme/THEME';

import { styles } from './styles';

export function Product() {
  const { addToCart, cart } = useCart()
  const navigation = useNavigation()
  const route = useRoute()
  const product = route.params as ProductData
  const productsIsAlreadyInCart = cart.find(item => item.id === product.id)
  
  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <PagesHeader title="Produto" handleFunction={handleGoBack} iconBtn />
        <View style={styles.productContainer}>
          <Image style={styles.banner} source={{ uri: product.image }} />
          <View style={styles.productDetails}>
              <Text style={styles.title}>{product.title}</Text>
              <Text numberOfLines={6} style={styles.description}>{product.description}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>R${product.price}</Text>
                <ActionButtons />
              </View>
          </View>
            <Button 
              onPress={() => addToCart(product)}
              icon={
                !productsIsAlreadyInCart
                ? <ShoppingCart size={25} color={THEME.COLORS.TEXT} />
                : <Check size={25} color={THEME.COLORS.TEXT} />
              }
              label={!productsIsAlreadyInCart ? "Adicionar ao carrinho" : "Já está no carrinho"} />
        </View>
      </SafeAreaView>
    </Background>
  );
}