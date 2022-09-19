import { useNavigation } from '@react-navigation/native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { PagesHeader } from '../../components/PagesHeader';
import { useCart } from '../../context/CartContext';
import { THEME } from '../../theme/THEME';

import { styles } from './styles';

export function Payment() {
  const { cart, fullPrice, totalQuantity, handleChangeCheckoutState } = useCart();
  const { confirmPayment } = useStripe();
  const navigation = useNavigation()
  function handleGoBack() {
    navigation.goBack()
  }

  useEffect(() => {
    handleChangeCheckoutState()
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <PagesHeader title="Pagamento" handleFunction={handleGoBack} />
        <View style={styles.creditCard}>
          <Text style={styles.text}>
            Você está prestes à finalizar a compra de {totalQuantity} produtos que possuem um valor total de R${fullPrice},00.
          </Text>
          <Text style={styles.text}>
            Se está certo da compra preencha o campo abaixo com os dados de seu cartão.
          </Text>
          <CardField
            postalCodeEnabled={false}
            placeholders={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={{
              placeholderColor: THEME.COLORS.CAPTION_300,
              borderRadius: 5,
              backgroundColor: '#FFFFFF',
              textColor: THEME.COLORS.CAPTION_300,
            }}
            style={{
              width: '100%',
              height: 50,
              marginVertical: 30,
            }}
            onCardChange={(cardDetails) => {
              console.log('cardDetails', cardDetails);
            }}
            onFocus={(focusedField) => {
              console.log('focusField', focusedField);
            }}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}