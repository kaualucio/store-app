import { Minus, Plus } from 'phosphor-react-native';
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Product, useCart } from '../../context/CartContext';
import { THEME } from '../../theme/THEME';
import { ActionButtons } from '../ActionButtons';

import { styles } from './styles';

interface Props {
  product: Product
}

export function ProductInCart({ product }: Props) {
  const { fullPrice, handleChangeQuantity } = useCart()

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={{ uri: product.image }} />
      <View style={styles.productInfo}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>R${product.price}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            onPress={() => handleChangeQuantity('desc')}
            style={styles.button}>
            <Minus size={15} color={THEME.COLORS.PRIMARY_500} />
          </TouchableOpacity>
          <Text style={styles.quantity}>
            {product.quantity}
          </Text>
          <TouchableOpacity 
            onPress={() => handleChangeQuantity('asc')}
            style={styles.button}>
            <Plus size={15} color={THEME.COLORS.PRIMARY_500} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}