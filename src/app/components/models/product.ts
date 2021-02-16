export interface Product {
    category?: any;
    shop?: any;
    product?: any;
    quantity?: any;
    currentprice?: any;
    status?: any;
    image?: any;
    initialprice?: any;
    description?: any;
    stock?: any;
    barcode?: any;
    id?: any;
    shopID?: any;
    mainCategory?: any;
    subCategory?: any;
  }
  
  export class Products {
    Date?: Date;
    productName?: string;
    images?: any[];
    currentprice?: string;
    discount?: string;
    description?: string;
    merchantID?: string;
    quantity?: string;
    stock?: string;
    barcode?: string;
    mainCategory?: string;
    subCategory?: string;
  }