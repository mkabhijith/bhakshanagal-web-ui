export interface IProductList {
  result: boolean;
  message: string;
  data: IProductListArray[];
}

export interface IProductListArray {
  crunchy: Iproduct[];
  pickles: Iproduct[]
}

export interface Iproduct {
  product_id: number;
  product_name: string;
  price: number;
  quantity: number;
  image_file: null | string;
}
