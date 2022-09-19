interface Product {
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

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined,
      product: Product
      cart: undefined,
      payment: undefined
    }
  }
}