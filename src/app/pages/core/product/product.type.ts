export interface IProductViewResponce {
  result: boolean;
  message: string;
  data: IProductView[];
}

export interface IProductView {
  product_id: number;
  product_name: string;
  description: string;
  status: string;
  price: number;
  quantity: number;
  category_name: string;
  image_file: null | any;
  shipping: number;
  cash_on_delivery: number;
  refundable: number;
  free_delivery: number;
  count?:number;
  totalPrice:number;
}
