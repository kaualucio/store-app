import { ShoppingCart } from 'phosphor-react-native';
import React from 'react';
import { View, Text } from 'react-native';
import { THEME } from '../../theme/THEME';
import { IconButton } from '../IconButton';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>My Store</Text>
      <View style={styles.cart}>
        <IconButton icon={<ShoppingCart size={25} color={THEME.COLORS.TEXT} />} />
        <View style={styles.cartAlertContainer}>
            <Text style={styles.cartAlertText}>45</Text>
        </View>
      </View>
    </View>
  );
}