import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { THEME } from '../../theme/THEME';

import { styles } from './styles';

export interface ProductData {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

interface Props extends TouchableOpacityProps {
  data: ProductData
}

export function ProductCard({data, ...rest}: Props) {
  return (
    <TouchableOpacity activeOpacity={.8} style={styles.container} {...rest}>
      <ImageBackground 
        style={styles.banner}
        source={{uri: data.image}}
        resizeMode="stretch"
        >
        <LinearGradient colors={THEME.COLORS.FOOTER}  style={styles.productInfo}>
            <Text numberOfLines={1} style={styles.title}>{data?.title}</Text>
            <Text style={styles.price}>R${data?.price}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}