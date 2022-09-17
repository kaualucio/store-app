import { useNavigation, useRoute } from '@react-navigation/native';
import { ShoppingCart } from 'phosphor-react-native';
import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { PagesHeader } from '../../components/PagesHeader';
import { ProductData  } from '../../components/ProductCard';
import { THEME } from '../../theme/THEME';

import { styles } from './styles';

export function Product() {
  const navigation = useNavigation()
  const route = useRoute()
  const product = route.params as ProductData
  
  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <PagesHeader handleFunction={handleGoBack} />
        <View style={styles.productContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {
              product.images.map(image => (
                <Image resizeMode="cover" key={image} style={styles.banner} source={{ uri: image }} />
              ))
              
            }
          </ScrollView>
         <View style={styles.productDetails}>
            <Text style={styles.title}>{product.title}</Text>
            <Text numberOfLines={2} style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>R${product.price}</Text>
         </View>
            <Button 
              icon={<ShoppingCart size={25} color={THEME.COLORS.TEXT} />}
              label="Adicionar ao carrinho" />
        </View>
      </SafeAreaView>
    </Background>
  );
}