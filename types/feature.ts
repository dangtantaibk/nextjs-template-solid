export type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type Products = {
  id: number;
  image: string;
  nameProduct: string;
  subTitle: string;
  price?: string | number;
};
