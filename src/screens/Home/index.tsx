import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'


import { styles } from './styles';
import { Header } from '../../components/Header';
import { TextInput, View, TouchableWithoutFeedback, Keyboard, FlatList, ScrollView, Text } from 'react-native';
import { MagnifyingGlass } from 'phosphor-react-native';
import { THEME } from '../../theme/THEME';
import { ProductData, ProductCard } from '../../components/ProductCard';
import { CATEGORIES, TRANSLATED_CATEGORIES } from '../../utils/categories';
import { Heading } from '../../components/Heading';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
import { Loading } from '../../components/Loading';

export function Home() {
  const navigation = useNavigation()
  const [products, setProducts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      let productsRes = []
      CATEGORIES.map((category, index) => {

          productsRes[index] = []
          data.filter((product: ProductData) => {
            if(category === product.category) {
              return productsRes[index].push(product)
            }
          })
      })
      setProducts(productsRes)
      setIsLoading(false)
    })
  }, [])

  function handleNavigate(product: ProductData) {
    navigation.navigate('product', { ...product })
  }

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Background>
           {
            !isLoading
            ? (
              <SafeAreaView style={styles.container}>
                <Header />
                  <ScrollView>
                    <View style={styles.inputContainer}>
                      <MagnifyingGlass size={24} color={THEME.COLORS.CAPTION_500} />
                      <TextInput 
                        style={styles.input} 
                        keyboardType="default" 
                        placeholder="Pesquisar produtos" 
                      />
                    </View>
        
                    {
                      products.map((product, index) => (
                        <View key={index}>
                          <Heading title={TRANSLATED_CATEGORIES[product[0].category]} />
                          <FlatList 
                            data={product}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={({ item }) => (
                              <ProductCard onPress={() => handleNavigate(item)} key={item.id} data={item} />
                            )}
                            style={styles.listStyle}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.listStyleContent}
                          />
                        </View>
                      ))
                    }
                  </ScrollView>

              </SafeAreaView>
            ) : (
              <Loading />
            )
           }
        </Background>
      </TouchableWithoutFeedback>
  );
}