import { Minus, Plus } from 'phosphor-react-native';
import React from 'react';
import { View,TouchableOpacity, Text } from 'react-native';
import { useCart } from '../../context/CartContext';
import { THEME } from '../../theme/THEME';

import { styles } from './styles';

export function ActionButtons() {
  const { quantity, handleChangeQuantity} = useCart()

  return (
    <View style={styles.actionButtons}>
      <TouchableOpacity 
        onPress={() => handleChangeQuantity('desc')}
        style={styles.button}>
        <Minus size={15} color={THEME.COLORS.PRIMARY_500} />
      </TouchableOpacity>
      <Text style={styles.quantity}>
        {quantity}
      </Text>
      <TouchableOpacity 
        onPress={() => handleChangeQuantity('asc')}
        style={styles.button}>
        <Plus size={15} color={THEME.COLORS.PRIMARY_500} />
      </TouchableOpacity>
    </View>
  );
}