export class ProductModel {
  _id: string;
  image: string;
  title: string;
  price: string;
  oldPrice: string;
  credit: number;
  calculatedRaiting: number;
  description: string;
  advantages: string;
  disAdvantages: string;
  categories: string[];
  tags: string;
  characterics: {
    [key: string]: string;
  };
}
