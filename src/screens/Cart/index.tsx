import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { PagesHeader } from '../../components/PagesHeader';
import { ProductInCart } from '../../components/ProductInCart';
import { useCart } from '../../context/CartContext';

import { styles } from './styles';

export function Cart() {
  const { cart, fullPrice, } = useCart()
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  function handleGoToPaymentScreen() {
    navigation.navigate('payment')
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <PagesHeader title={`Carrinho (${cart.length})`} handleFunction={handleGoBack} />
        <View style={styles.checkoutContainer}>
          <ScrollView 
            style={styles.produtsOnCart}
            showsVerticalScrollIndicator={false}  
          >
            {
              cart.map(product => (
                <ProductInCart key={product.id} product={product} />
              ))
            }
          </ScrollView>
          <Text style={styles.totalPrice}>Total: R${fullPrice}</Text>
          <Button onPress={handleGoToPaymentScreen} label="Checkout" />
        </View>
      </SafeAreaView>
    </Background>
  );
}