interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: {
    id: number,
    title: string,
    image: string,
  },
  images: string[]
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined,
      product: Product
    }
  }
}