export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  quantity: number;
  rating: number;
}

export interface IProducts {
  data: Array<IProduct>;
  totalProducts: number;
}

export interface IProductCardProps {
  details: IProduct;
  onCardClick: (product: IProduct) => void;
}
