import { useNavigation } from '@react-navigation/native';
import { ShoppingCart } from 'phosphor-react-native';
import React from 'react';
import { View, Text } from 'react-native';
import { useCart } from '../../context/CartContext';
import { THEME } from '../../theme/THEME';
import { IconButton } from '../IconButton';

import { styles } from './styles';

export function Header() {
  const { cart } = useCart()
  const navigation = useNavigation()

  function handleGoToCartScreen() {
    navigation.navigate('cart')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>My Store</Text>
      <View style={styles.cart}>
        <IconButton onPress={handleGoToCartScreen} icon={<ShoppingCart size={25} color={THEME.COLORS.TEXT} />} />
        <View style={styles.cartAlertContainer}>
            <Text style={styles.cartAlertText}>{cart.length}</Text>
        </View>
      </View>
    </View>
  );
}