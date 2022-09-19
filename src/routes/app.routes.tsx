import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens/Cart";
import { Home } from "../screens/Home";
import { Payment } from "../screens/Payment";
import { Product } from "../screens/Product";


const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {

  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name="home" component={Home} />
      <Screen name="product" component={Product} />
      <Screen name="cart" component={Cart} />
      <Screen name="payment" component={Payment} />
    </Navigator>
  )

}