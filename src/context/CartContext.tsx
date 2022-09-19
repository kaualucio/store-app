import { createContext, useContext, useEffect, useState } from 'react'
import { ProductData } from '../components/ProductCard'

interface CartContextProviderProps {
  children: React.ReactNode
}

export interface Product extends ProductData {
  quantity: number
}

interface CartContextProps {
  cart: Product[],
  quantity: number,
  isCheckout: boolean,
  totalQuantity: number,
  fullPrice: number,
  addToCart: (product: ProductData) => void,
  handleChangeQuantity: (type: string) => void,
  handleTotalPrice: (product:  Product | ProductData) => void
  handleChangeCheckoutState: () => void
}


const CartContext = createContext({} as CartContextProps)

function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Product[]>([])
  const [isCheckout, setIsCheckout] = useState(false)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [fullPrice, setFullPrice] = useState(0)

  function handleChangeQuantity(type: string) {
    if(type === 'asc') {
      setQuantity(prevState => prevState += 1)
    }else if(type === 'desc') {
      setQuantity(prevState => prevState === 1 ? 1 : prevState -= 1)
    }
  }

  useEffect(() => {
    if(isCheckout) {
      let quantity = 0
      cart.map(item => quantity += item.quantity)
      setTotalQuantity(quantity)
      setIsCheckout(false)
    }
  }, [isCheckout])

  function handleChangeCheckoutState() {
    setIsCheckout(true)
  }

  function addToCart(product: ProductData) {
    const productAlreadyExistsInCart = cart.find(productInState => productInState.id === product.id)

    if(productAlreadyExistsInCart) {
      setCart(prevState => [...prevState.filter(prdt => prdt.id !== productAlreadyExistsInCart.id), {...productAlreadyExistsInCart, quantity: quantity}])
      handleTotalPrice(productAlreadyExistsInCart)
    }else {
      setCart(prevState => [...prevState, {...product, quantity: quantity}])
      handleTotalPrice(product)
    }
  }

  function handleTotalPrice(product:  Product | ProductData) {
    const productAlreadyExistsInCart = cart.find(productInState => productInState.id === product.id)
    if(productAlreadyExistsInCart) {
      setFullPrice(prevState => prevState - (productAlreadyExistsInCart.price * productAlreadyExistsInCart.quantity) + productAlreadyExistsInCart.price * quantity)
    }else {
      setFullPrice(prevState => prevState + product.price * quantity)
    }
    setQuantity(1)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        quantity,
        isCheckout,
        totalQuantity,
        fullPrice,
        addToCart,
        handleChangeQuantity,
        handleTotalPrice,
        handleChangeCheckoutState
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)

  return context
}

export { CartContextProvider, useCart }